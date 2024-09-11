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

        document.getElementById('loader').classList.add("hidden");
    }, 1500);
}

function mostrarMensaje(mensaje, tipo) {
    const mensajeDiv = document.getElementById("mensaje");
    mensajeDiv.textContent = mensaje;
    mensajeDiv.classList.remove("hidden");
    mensajeDiv.style.color = tipo === "exito" ? "green" : "red";
}

document.querySelectorAll("a, button").forEach(element => {
    element.addEventListener("click", function(event) {
        event.preventDefault();
        const loader = document.getElementById("loader");
        
        // Prevenir que el loader se active varias veces
        if (!loader.classList.contains("hidden")) {
            return;
        }

        loader.classList.remove("hidden");

        setTimeout(() => {
            if (element.tagName === "A") {
                window.location.href = element.href;
            } else if (element.tagName === "BUTTON") {
                if (window.history.length > 1) {
                    window.history.back();
                } else {
                    window.location.href = 'index.html';
                }
            }

            // Ocultar el loader automáticamente después de la acción
            setTimeout(() => loader.classList.add("hidden"), 2000);
        }, 1000);
    });
});
