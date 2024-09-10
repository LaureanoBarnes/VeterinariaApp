function mostrarLoader(event) {
    event.preventDefault(); // Prevenir el envío inmediato
    document.getElementById("loader").classList.remove("hidden"); // Mostrar el loader

    // Simular el envío del formulario con un retraso de 2 segundos (puedes cambiarlo a la duración real)
    setTimeout(() => {
        const exito = Math.random() > 0.5; // Simulación de éxito o error (puedes reemplazarlo con una comprobación real)

        if (exito) {
            mostrarMensaje("Formulario enviado correctamente.", "exito");
            document.getElementById("registro-form").reset(); // Limpiar los campos del formulario
        } else {
            mostrarMensaje("Error al enviar el formulario. Inténtalo de nuevo.", "error");
        }

        document.getElementById('loader').classList.add("hidden"); // Ocultar el loader después del proceso
    }, 1500);
}
function mostrarMensaje(mensaje, tipo) {
    const mensajeDiv = document.getElementById("mensaje");
    mensajeDiv.textContent = mensaje;
    mensajeDiv.classList.remove("hidden");
    if (tipo === "exito") {
        mensajeDiv.style.color = "green";
    } else {
        mensajeDiv.style.color = "red";
    }
}

// Función para mostrar el loader al volver atrás
function goBack() {
    document.getElementById("loader").classList.remove("hidden");
    setTimeout(function() {
        window.history.back();
    }, 1000); // Tiempo de espera de 1 segundo antes de regresar
}

// Mostrar el loader al hacer clic en los enlaces de la página (si es necesario)
document.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        document.getElementById("loader").classList.remove("hidden");
    });
});