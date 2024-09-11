document.querySelectorAll("a, button").forEach(element => {
    element.addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("loader").classList.remove("hidden");

        setTimeout(() => {
            if (element.tagName === "A") {
                window.location.href = element.href;
            } else if (element.tagName === "BUTTON") {
                window.history.back();
            }
            
        }, 1000);
        
    });
    // Evento pageshow para ocultar el loader cuando se regresa a la página
window.addEventListener("pageshow", function() {
    document.getElementById("loader").classList.add("hidden");
    
})})
