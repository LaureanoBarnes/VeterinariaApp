// Ocultar el loader cuando la página se carga inicialmente
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loader").classList.add("hidden");
});

// Mostrar el loader y procesar el envío del formulario
function mostrarLoader(event) {
    event.preventDefault();
    document.getElementById("loader").classList.remove("hidden");

    setTimeout(() => {
        const exito = Math.random() > 0.5;

        if (exito) {
            mostrarMensaje("Formulario enviado correctamente.", "exito");
            document.getElementById("registro-form").reset();
        } else {
            mostrarMensaje("Error al enviar el formulario. Inténtalo de nuevo.", "error");
        }

        document.getElementById('loader').classList.add("hidden"); // Ocultar el loader después de completar
    }, 1500); // Retraso simulado de 1.5 segundos
}

// Mostrar mensajes de éxito o error
function mostrarMensaje(mensaje, tipo) {
    const mensajeDiv = document.getElementById("mensaje");
    mensajeDiv.textContent = mensaje;
    mensajeDiv.classList.remove("hidden");
    mensajeDiv.style.color = tipo === "exito" ? "green" : "red";
}

// Función para regresar a la página anterior con el loader
function goBack() {
    document.getElementById("loader").classList.remove("hidden");
    setTimeout(function() {
        window.history.back();
    }, 1000); // Retraso de 1 segundo antes de volver
}

// Aplicar el loader a los enlaces
document.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir la redirección inmediata
        document.getElementById("loader").classList.remove("hidden");

        // Redirigir después de 1 segundo
        setTimeout(() => {
            window.location.href = link.href;
        }, 1000);
    });
});

// Evento pageshow para ocultar el loader cuando se regresa a la página
window.addEventListener("pageshow", function() {
    document.getElementById("loader").classList.add("hidden");
});
