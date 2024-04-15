function calcularTotal() {
    var precioProducto1 = 10;
    var precioProducto2 = 15;
    var precioProducto3 = 20;

    var cantidadProducto1 = parseInt(document.getElementById('cantidadProducto1').value) || 0;
    var cantidadProducto2 = parseInt(document.getElementById('cantidadProducto2').value) || 0;
    var cantidadProducto3 = parseInt(document.getElementById('cantidadProducto3').value) || 0;

    var subtotal = (precioProducto1 * cantidadProducto1) + (precioProducto2 * cantidadProducto2) + (precioProducto3 * cantidadProducto3);
    var iva = subtotal * 0.16;
    var total = subtotal + iva;

    document.getElementById('precioTotal').textContent = 'Total: $' + total.toFixed(2);
    document.getElementById('ivaTotal').textContent = 'IVA (16%): $' + iva.toFixed(2);
}
