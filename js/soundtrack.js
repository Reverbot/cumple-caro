/* Banda sonora local. Siempre requiere un gesto para empezar. */
(function () {
  var $ = function (s) { return document.querySelector(s); };
  var tracks = [
    ['audio/cuando-nos-volvamos.mp3', 'Cuando Nos Volvamos a Encontrar', 'Carlos Vives · Marc Anthony'],
    ['audio/bailar-contigo.mp3', 'Bailar Contigo', 'Monsieur Periné'],
    ['audio/para-tu-amor.mp3', 'Para Tu Amor', 'Juanes']
  ];
  var ctx, master, players = [], gains = [], stage = 0, current = -1;
  var enabled = false, effects = true, volume = .18, serial = 0, pending = null;
  var fades = [], voicePlaying = false;
  function init() {
    if (ctx) return;
    var Context = window.AudioContext || window.webkitAudioContext;
    if (!Context) throw new Error('Audio no disponible');
    ctx = new Context(); master = ctx.createGain(); master.gain.value = volume; master.connect(ctx.destination);
    tracks.forEach(function (t) {
      var audio = new Audio(t[0]); audio.preload = 'none'; audio.loop = true;
      audio.hidden = true; audio.dataset.soundtrack = t[1]; document.body.appendChild(audio);
      var source = ctx.createMediaElementSource(audio), gain = ctx.createGain();
      gain.gain.value = 0; source.connect(gain); gain.connect(master);
      players.push(audio); gains.push(gain);
    });
  }
  function status(text) { $('#audio-status').textContent = text; }
  function render() {
    $('#audio-toggle').textContent = enabled ? 'Pausar música' : 'Reproducir música';
    $('#audio-toggle').setAttribute('aria-pressed', String(enabled));
    $('#audio-title').textContent = tracks[stage][1];
    $('#audio-artist').textContent = tracks[stage][2];
    $('#musica').classList.toggle('sonando', enabled);
  }
  function stopFades() { fades.forEach(clearTimeout); fades = []; }
  function ramp(gain, value, seconds) {
    var now = ctx.currentTime;
    gain.cancelScheduledValues(now); gain.setValueAtTime(gain.value, now); gain.linearRampToValueAtTime(value, now + seconds);
  }
  async function changeTrack() {
    if (!enabled || current === stage) return;
    var request = ++serial, next = stage;
    try {
      await players[next].play();
      if (request !== serial || !enabled) { if (next !== current) players[next].pause(); return; }
      stopFades();
      gains.forEach(function (gain, i) {
        ramp(gain.gain, i === next ? 1 : 0, 2.5);
        if (i !== next) fades.push(setTimeout(function () { if (current !== i) players[i].pause(); }, 2600));
      });
      current = next; status('La música acompaña tu recorrido.');
    } catch (e) {
      pause(); status('Toca Reproducir para continuar. Si no carga, comprueba tu conexión.');
    }
    render();
  }
  async function start() {
    try {
      init(); enabled = true; render();
      await ctx.resume();
      if (enabled) await changeTrack();
    } catch (e) { pause(); status('No se pudo iniciar el audio en este navegador. Puedes seguir sin música.'); }
  }
  function pause() {
    enabled = false; serial++; stopFades();
    players.forEach(function (p) { p.pause(); });
    if (ctx) gains.forEach(function (g) { g.gain.cancelScheduledValues(ctx.currentTime); g.gain.value = 0; });
    current = -1; render();
  }
  function advance(next) {
    if (next <= stage) return;
    stage = next; render(); if (enabled) changeTrack();
  }
  // Sólo avanza: subir para releer no provoca cambios continuos de canción.
  function checkChapter() {
    if (stage >= 1) return;
    var chapter = document.querySelectorAll('.capitulo')[2];
    if (chapter.getBoundingClientRect().top < innerHeight * .65) {
      if (!pending) pending = setTimeout(function () { pending = null; if (chapter.getBoundingClientRect().top < innerHeight * .65) advance(1); }, 1800);
    } else { clearTimeout(pending); pending = null; }
  }
  addEventListener('scroll', checkChapter, { passive: true });
  addEventListener('caro:carta', function () { advance(2); });
  function effect(kind) {
    if (!enabled || !effects || !ctx || ctx.state !== 'running' || voicePlaying) return;
    var notes = kind === 'flor' ? [523.25, 659.25, 783.99] : kind === 'luna' ? [880, 1174.66] : [440];
    notes.forEach(function (freq, i) {
      var osc = ctx.createOscillator(), gain = ctx.createGain(), t = ctx.currentTime + i * .16;
      osc.type = 'sine'; osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, t); gain.gain.linearRampToValueAtTime(.09, t + .025); gain.gain.exponentialRampToValueAtTime(.0001, t + .8);
      osc.connect(gain); gain.connect(master); osc.start(t); osc.stop(t + .85);
      osc.onended = function () { osc.disconnect(); gain.disconnect(); };
    });
  }
  addEventListener('caro:luna', function () { effect('luna'); });
  addEventListener('caro:flor', function () { effect('flor'); });
  var lastStarSound = -Infinity;
  addEventListener('caro:fugaz', function () {
    if (!enabled || !effects || !ctx || ctx.state !== 'running' || voicePlaying || document.hidden) return;
    if (ctx.currentTime - lastStarSound < 12) return;
    lastStarSound = ctx.currentTime;
    var osc = ctx.createOscillator(), gain = ctx.createGain(), t = ctx.currentTime;
    osc.type = 'sine'; osc.frequency.setValueAtTime(740, t); osc.frequency.exponentialRampToValueAtTime(370, t + 1.05);
    gain.gain.setValueAtTime(0, t); gain.gain.linearRampToValueAtTime(.035, t + .15); gain.gain.exponentialRampToValueAtTime(.0001, t + 1.1);
    osc.connect(gain); gain.connect(master); osc.start(t); osc.stop(t + 1.2);
    osc.onended = function () { osc.disconnect(); gain.disconnect(); };
  });
  $('#abrir-musica').addEventListener('click', function () {
    start().then(function () { effect('sobre'); }); $('#sobre').click();
  });
  $('#audio-toggle').addEventListener('click', function () { if (enabled) pause(); else start(); });
  $('#audio-volume').addEventListener('input', function () {
    volume = Number(this.value) / 100;
    $('#audio-volume-value').textContent = this.value + '%';
    if (master) ramp(master.gain, voicePlaying ? volume * .15 : volume, .2);
  });
  $('#audio-effects').addEventListener('change', function () { effects = this.checked; });
  // La voz de Donald, si está configurada, siempre tiene prioridad.
  var voice = document.querySelector('#carta-final audio');
  if (voice) {
    voice.addEventListener('play', function () { voicePlaying = true; if (master) ramp(master.gain, volume * .15, .5); });
    ['pause', 'ended'].forEach(function (name) { voice.addEventListener(name, function () { voicePlaying = false; if (master) ramp(master.gain, volume, .7); }); });
  }
  addEventListener('pagehide', pause);
  render();
})();
