# La tercera flor: resumen del proyecto

Página web para el cumpleaños 39 de Caro (Linda Schiffmann), 30 de octubre de 2026.
Estado al 17 de octubre de 2026.

## La idea

- **Cuándo empieza:** a las 00:00 del 30 de octubre (hora de Bogotá), Donald le manda el link por WhatsApp.
- **Cuándo termina:** el final ("La tercera flor") está cerrado. Se abre cuando ella escanea el QR de la tarjeta del ramo que Donald le entrega en persona en Bogotá.
- **Plan B:** si no se escanea el QR, el final se abre solo el 30 de octubre a las 8:00 p. m., hora de Bogotá.
- **El hilo de la historia:** tres flores en tres cumpleaños.
  - 2024: una rosa azul.
  - 2025: girasoles que llegaron solos, en un día difícil.
  - 2026: la tercera flor, que esta vez él lleva en persona.

## Archivos y vista previa local

- `index.html`: página, estilos e interacciones.
- `img/`: fotografías y textura lunar.
- `js/`: GSAP, ScrollTrigger y `config.js`.
- `js/config.js`: número de WhatsApp con código de país y ruta opcional del audio.
- `verificar.cjs`: comprobaciones locales (`node verificar.cjs`).

Para previsualizar: `python -m http.server 8765 --bind 127.0.0.1` y abrir `http://127.0.0.1:8765`.
Para Vercel, publicar esta carpeta como sitio estático, sin comando de compilación. No hay despliegue realizado desde esta revisión.

El enlace de medianoche usa la URL base. El QR usa esa misma URL con `#tercera-flor`. El fragmento es una llave de sorpresa, no una protección de acceso.

Para probar desde cero, usar una ventana privada nueva. Los vales se pueden deshacer individualmente. Los estados `flor`, `cobijas`, `vale0` a `vale6` y `respuesta-p1` a `respuesta-p4` se guardan en el navegador; borrar los datos del sitio los reinicia.

## Mejoras aplicadas el 17 de octubre

- Apertura automática comprobada cada segundo y al volver a la pestaña.
- Vales con confirmación manual, reenvío y opción de deshacer.
- Respuestas guardadas automáticamente en el teléfono, con aviso si no se pueden guardar.
- Galería ampliable con anterior/siguiente, teclado y cierre con Escape.
- Cartas de altura adaptable al texto.
- Luna ilustrada en SVG con animaciones CSS y respuesta al toque; ya no calcula una esfera píxel por píxel.
- Contador basado en el día de Bogotá.
- Título y descripción para compartir preparados; falta imagen social y URL definitiva.
- Soporte de audio opcional en la carta final mediante `voiceUrl`, sin reproducción automática.

## Lo que tiene la página, en orden

1. **El sobre.** Un sobre con sello de cera "L" y el texto "Para Linda Schiffmann 😍". Al tocar el sello, se rompe, sale la carta con chispas y empieza todo.
2. **La luna.** Es una ilustración vectorial de luna creciente dorada, con órbitas delicadas y estrellas que titilan. Flota suavemente y al tocarla se balancea con un destello de partículas. Reemplaza la esfera realista para integrarse con el estilo de la página. Debajo aparece "Feliz cumpleaños, linda" letra por letra.
3. **El fondo.** Tres capas de estrellas con profundidad, titilación suave y estrellas fugaces ocasionales. Los pétalos azules se vuelven dorados durante los recuerdos de 2025; al abrir el final se mezclan. El cielo pasa por violeta y ámbar. Tres constelaciones se dibujan en las pausas de la historia. El movimiento se detiene al ocultar la pestaña y respeta la preferencia de movimiento reducido.
4. **«Vamos a vernos en tu cumple».**
   - Conversación real del 4/10/2026, de 8:05 a 8:11 p. m., del chat proporcionado por Donald.
   - Cinco burbujas alternadas: «Te pone feliz venir?», «Claro que si mi amor / No quiero nada más que ir a verte», «A mi pone demasiado feliz», «Vamos a vernos en tu cumple / Es poético», «Chiiiiiiii / Cómo hace 4 años».
   - Se preservan las palabras originales y se agrupan mensajes consecutivos del mismo autor. No se atribuye la frase literal «es un hecho», que no aparece en este intercambio.
   - El contador sigue desde el 24/11/2023 y ahora muestra explícitamente esa fecha para no confundirlo con esta conversación.
5. **Tres preguntas fáciles.**
   - La rosa azul.
   - "Delicia nicaragüense de mi corazón".
   - "...me gustas tú".
   - Si acierta salen chispas; si se equivoca, la opción dice "(casi 😄)".
6. **Nuestra historia.** Las flores se dibujan y florecen al bajar, y las fotos caen como polaroids.
   - **30 oct 2024:** la rosa azul. Incluye su frase "Tu rosa azul está en la mitad de mi sala".
   - **2 may 2025:** las flores amarillas que le llegaron a su casa cuando estaba en la clínica. Le duraron casi el mes.
   - **Agosto 2025:** St. Pete Beach, con 3 fotos.
   - **30 oct 2025:** los girasoles. "Este año no te las mando, te las llevo yo".
   - **3 ene 2026:** Chicago, a 412 metros, con 3 fotos.
   - **6 feb 2026:** "Recibir flores... sin ser fecha especial, es algo que solo has hecho tú". Ella le respondió "Ya lo haces".
   - **1 abr 2026:** Manu y la luna. "Es un privilegio ver la luna".
   - **27 abr 2026:** "No dejes de ser detallista conmigo".
   - **Junio 2026:** el Mundial, las dos con la camiseta.
7. **"Lo que veo cuando te miro".** Cinco cartas que se reparten como baraja y se voltean al tocarlas: Tu bondad, Tu cabeza, La mamá que eres, Tu fuerza y Tu sonrisa.
8. **"Te pregunto yo".** Cuatro preguntas que ella responde. Sus respuestas se arman en un mensaje de WhatsApp para mandárselas a Donald.
9. **Las cobijitas.** Una sección pícara con candado. La clave es 3010.
10. **La vela.** Una torta cero azúcar. Al soplarla salen confeti y fuegos artificiales.
11. **Los vales.** Siete vales que sirven a distancia; después de enviar el mensaje ella confirma el canje y se estampa "COBRADO". Puede deshacerlo o volver a enviar.
    - Noche de plancha
    - Cine por Meet
    - Una semana de audios de buenos días
    - Reto cero azúcar
    - 30 besitos en el cuello
    - Una foto tuya, la pose la escoge ella
    - Una carta escrita a mano
12. **La tercera flor.** Antes del QR, el capullo se mece y dice "Lo tengo yo 😏". Con el QR, el cielo se atenúa y los pétalos se detienen durante 1,2 segundos; después la flor se abre pétalo por pétalo, explotan los fuegos y aparece la carta final, con la lista C&D para escuchar "Para Tu Amor".
13. **La música.** Un botón flotante, "Nuestra música", controla la banda sonora local por capítulos, volumen, pausa y efectos.

## Cómo fue cambiando

1. **Propuesta "La tercera flor"**, a partir de todo el chat de WhatsApp (nov 2023 a oct 2026).
2. **Ajustes a la idea:** los vales cambiaron para que sirvan a distancia y sean más pícaros. Se quitaron Full 80s, Jenga con Manu y "pregúntame lo que quieras".
3. **Música:** se eligió de la playlist C&D de Donald.
4. **Primera versión** con las 12 fotos.
5. **Rediseño completo** con animaciones (GSAP): sobre, flores que florecen, cartas, fuegos artificiales y vales con sello.
6. **Voz de Donald:**
   - Todos los textos se reescribieron como él escribe ("linda", "mi vida", "te quiero un montón", "jaja").
   - "Mi colombiana" se cambió por "Tu sonrisa".
   - Se agregaron detalles del chat: la rosa en la sala, la clínica y el 6 de febrero.
   - Se agregaron el contador de días y el reproductor de Spotify dentro de la página.
7. **Luna realista:** primero una foto que giraba plana. Ahora es una esfera 3D que gira sobre su eje.

La versión anterior se había probado en tamaño de celular: la página no se mueve de lado, la clave 3010 funciona y el final se abre con el QR.

## Próximas mejoras

### Necesitan algo de Donald

- [ ] **URL de Vercel.** Hace falta para generar el QR de la tarjeta del ramo (URL + `#tercera-flor`) y para la vista previa del link en WhatsApp. **Es urgente:** sin esto no hay QR.
- [ ] **Nota de voz de 30 a 60 segundos**, para que suene cuando se abra la tercera flor. Es la mejora con más impacto.
- [ ] **Número de WhatsApp de Donald**, para que los vales y las respuestas de ella le lleguen directo, sin tener que buscar el chat.
- [ ] **Vista previa del link en WhatsApp.** Que el mensaje de las 00:00 se vea como una tarjeta con la luna y "Para Linda 😍", no como un link pelado. También depende de la URL de Vercel.

### Se pueden hacer ya

- [x] **"La distancia":** un avioncito recorre una ruta ilustrada de Nicaragua a Bogotá al bajar. Aterriza al desbloquear la flor y aparece "Esta vez, la tarjeta vino conmigo".
- [x] **Sorpresa escondida:** tres toques seguidos en la luna revelan un mensaje y una estrella fugaz.

### Antes del 30 de octubre

- [ ] Subir el zip final a Vercel y abrir el link en un celular para revisarlo completo.
- [ ] Imprimir el QR en la tarjeta del ramo y probar que abre el final.
- [ ] Dejar programado o listo el mensaje de WhatsApp para las 00:00 del 30 de octubre (hora de Bogotá).
- [ ] Probar el link en un celular que no sea el de Donald, porque la página recuerda en cada teléfono qué cosas ya se abrieron.

## Escena final actualizada

Al desbloquear la tercera flor aparece una tarjeta entre los pétalos. Ella toca «Es para ti» para sacarla y desplegar la carta. Spotify se carga al sacar la carta. La interacción funciona también con teclado y movimiento reducido. El recorrido del avión es ilustrativo, no un mapa geográfico.

## Banda sonora local

Los MP3 están en `audio/` y se controlan desde `js/soundtrack.js`. No se usa Spotify para reproducir la música.

- Inicio: Carlos Vives y Marc Anthony, «Cuando Nos Volvamos a Encontrar».
- Desde St. Pete Beach: Monsieur Periné, «Bailar Contigo».
- Al sacar la carta: Juanes, «Para Tu Amor».

Se inicia únicamente con «Abrir con música» o «Reproducir música». El sello permite entrar sin audio. Volumen inicial 18%, control hasta 60%, pausa y efectos desactivables. Transiciones de 2,5 segundos. Los capítulos musicales sólo avanzan, para evitar cambios al releer. Cada canción se repite si se permanece en su capítulo. Si el navegador bloquea una reproducción, se pide tocar Reproducir. Los archivos se solicitan conforme se necesitan (aproximadamente 18 MB en total).

Efectos sintetizados discretos al abrir con música, descubrir el secreto lunar y florecer el final. No se usan sonidos en cada toque ni en cada foto. La futura nota de voz reduce la música mientras se reproduce. Falta comprobar reproducción y cambios en Safari/iPhone y Chrome/Android reales.

## Ajustes del viaje y estrellas fugaces

El avión recorre el 100% de Nicaragua a Bogotá mediante scroll en una escena fija durante el desplazamiento. Retrocede al subir y funciona igual con la flor abierta o cerrada. Al llegar aparece «Esta vez, la tarjeta vino conmigo». Sustituye el aterrizaje anterior ligado al QR.

Las estrellas fugaces disparan un tono sinusoidal descendente muy tenue, sólo si la música y los efectos están habilitados. Se respeta un mínimo de 12 segundos entre tonos; no suenan con la pestaña oculta o durante la nota de voz.
