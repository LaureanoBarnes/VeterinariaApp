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

function goBack() {
    document.getElementById("loader").classList.remove("hidden");
    setTimeout(function() {
        window.history.back();
    }, 1000);
}

document.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
        document.getElementById("loader").classList.remove("hidden");
    });
});
