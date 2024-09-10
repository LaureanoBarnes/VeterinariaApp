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