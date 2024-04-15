document.getElementById('formularioContraseña').addEventListener('submit', function(evento) {
    evento.preventDefault();

    var contraseña = document.getElementById('contraseña').value;
    var confirmarContraseña = document.getElementById('confirmarContraseña').value;

    var mensaje = document.getElementById('mensaje');
    mensaje.textContent = '';

    if (contraseña !== confirmarContraseña) {
        mensaje.textContent = 'Las contraseñas no coinciden';
        return;
    }

    if (contraseña.length < 8) {
        mensaje.textContent = 'La contraseña debe tener al menos 8 caracteres';
        return;
    }

    mensaje.textContent = '¡Contraseña validada exitosamente!';
});
