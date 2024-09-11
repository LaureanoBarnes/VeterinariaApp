// Aplicar el loader a todos los enlaces y botones
document.querySelectorAll("a, button").forEach(element => {
    element.addEventListener("click", function(event) {
        event.preventDefault();  // Prevenir comportamiento predeterminado
        const loader = document.getElementById("loader");

        // Evitar que el loader se active varias veces
        if (!loader.classList.contains("hidden")) {
            return;
        }

        // Mostrar el loader
        loader.classList.remove("hidden");

        setTimeout(() => {
            // Si es un enlace (<a>), redirige
            if (element.tagName === "A") {
                window.location.href = element.href;
            }
            // Si es un botón (<button>), retrocede o redirige
            else if (element.tagName === "BUTTON") {
                if (window.history.length > 1) {
                    window.history.back();
                } else {
                    window.location.href = 'index.html'; // Si no hay historial, redirige al home
                }
            }

            // Ocultar el loader tras realizar la acción
            setTimeout(() => loader.classList.add("hidden"), 2000); // Ocultar después de 2s
        }, 1000); // Simula una carga de 1s antes de la redirección o retroceso
        // Evento pageshow para ocultar el loader cuando se regresa a la página
window.addEventListener("pageshow", function() {
    document.getElementById("loader").classList.add("hidden");
    });
})});
