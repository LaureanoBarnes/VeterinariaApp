document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío inmediato del formulario para ver la animación
    const form = event.target;
    
    form.classList.add("submitted"); // Añadir la clase para la animación

    setTimeout(() => {
        form.submit(); // Enviar el formulario después de la animación
    }, 500); // La animación dura 0.5s
});
