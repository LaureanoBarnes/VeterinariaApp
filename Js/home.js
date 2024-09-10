// Mostrar el loader al hacer clic en los botones de navegación o enlaces
document.querySelectorAll("a, button").forEach(element => {
    element.addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("loader").classList.remove("hidden");

        setTimeout(() => {
            if (element.tagName === "A") {
                window.location.href = element.href;
            } else if (element.tagName === "BUTTON") {
                window.history.back(); // Redireccionar según sea necesario
            }
        }, 1000); // Tiempo de espera antes de redirigir
    });
});
