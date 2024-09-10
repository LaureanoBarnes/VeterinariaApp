document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los enlaces de la página
    document.querySelectorAll('a').forEach(function(link) {
        // Añade un event listener para cada enlace
        link.addEventListener('click', function(event) {
            // Muestra el loader
            document.getElementById("loader").classList.remove("hidden");

            // Espera un momento antes de permitir que la navegación continúe
            event.preventDefault(); // Evita la navegación inmediata

            // Usa setTimeout para que el loader se muestre antes de redirigir
            setTimeout(function() {
                window.location.href = link.href; // Continúa la navegación
            }, 750); // Ajusta este valor según tus necesidades
        });
    });
});