/*
  Estamos definiendo una clase, y no necesitaremos un transpiler como Babel, ya que el navegador lo interpreta de forma nativa.
*/

class PlaceholderBoxPainter {
  paint(ctx, size) {
    ctx.lineWidth = 2;
    ctx.strokeColor = '#FC5D5F';

    // Dibuja una linea desde arriba a la izquierda
    // hasta abajo a la derecha.
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(size.width, size.height);
    ctx.stroke();

    // Dibuja una línea desde arriba a la derecha
    // hasta abajo a la izquierda
    ctx.beginPath();
    ctx.moveTo(size.width, 0);
    ctx.lineTo(0, size.height);
    ctx.stroke();
  }
}

registerPaint('placeholder-box', PlaceholderBoxPainter);