document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById("loader").classList.remove("hidden");

            setTimeout(function() {
                window.location.href = link.href;
            }, 750);
        });
    });
    // Evento pageshow para ocultar el loader cuando se regresa a la página
window.addEventListener("pageshow", function() {
    document.getElementById("loader").classList.add("hidden");
})});
