function reservarCamilla(id) {
    const camilla = document.getElementById(id);
    const estado = camilla.querySelector('.estado');
    
    estado.textContent = "Reservado";
    estado.classList.remove('disponible');
    estado.classList.add('reservado');

    // Cambiar botones
    const reservarBtn = camilla.querySelector('.reservar-btn');
    reservarBtn.remove();

    // Añadir botones de ocupar y desocupar
    const ocuparBtn = document.createElement('button');
    ocuparBtn.textContent = "Ocupar";
    ocuparBtn.classList.add('ocupar-btn');
    ocuparBtn.setAttribute('onclick', `ocuparCamilla('${id}')`);
    camilla.appendChild(ocuparBtn);

    const desocuparBtn = document.createElement('button');
    desocuparBtn.textContent = "Desocupar";
    desocuparBtn.classList.add('desocupar-btn');
    desocuparBtn.setAttribute('onclick', `desocuparCamilla('${id}')`);
    camilla.appendChild(desocuparBtn);
}

function ocuparCamilla(id) {
    const camilla = document.getElementById(id);
    const estado = camilla.querySelector('.estado');

    estado.textContent = "Ocupado";
    estado.classList.remove('reservado');
    estado.classList.add('ocupado');

    // Cambiar botones
    const ocuparBtn = camilla.querySelector('.ocupar-btn');
    ocuparBtn.remove();

    // Añadir botón de ficha
    const fichaBtn = document.createElement('button');
    fichaBtn.textContent = "Ficha";
    fichaBtn.classList.add('ficha-btn');
    fichaBtn.setAttribute('onclick', `verFicha('${id}')`);
    camilla.appendChild(fichaBtn);
}

function desocuparCamilla(id) {
    const camilla = document.getElementById(id);
    const estado = camilla.querySelector('.estado');

    estado.textContent = "Disponible";
    estado.classList.remove('ocupado');
    estado.classList.add('disponible');

    // Eliminar botones y volver al estado inicial
    camilla.querySelectorAll('button').forEach(button => button.remove());

    const reservarBtn = document.createElement('button');
    reservarBtn.textContent = "Reservar";
    reservarBtn.classList.add('reservar-btn');
    reservarBtn.setAttribute('onclick', `reservarCamilla('${id}')`);
    camilla.appendChild(reservarBtn);
}



function verFicha(id) {
    // Simulando datos del animal (estos vendrían de la base de datos)
    const animalData = {
        raza: "Labrador",
        genero: "Macho",
        edad: "5 años",
        veterinario: "Dr. Juan Pérez",
        motivoIngreso: "Fractura en la pata",
        tratamiento: "Vendaje y reposo",
        fechaIngreso: "2024-09-01",
        historialMedico: "Sin enfermedades previas",
        notasVeterinario: "Evolución favorable, revisitar en una semana."
    };

    // Asignando los datos a la ficha
    document.getElementById("fichaRaza").textContent = animalData.raza;
    document.getElementById("fichaGenero").textContent = animalData.genero;
    document.getElementById("fichaEdad").textContent = animalData.edad;
    document.getElementById("fichaVeterinario").textContent = animalData.veterinario;
    document.getElementById("fichaMotivoIngreso").textContent = animalData.motivoIngreso;
    document.getElementById("fichaTratamiento").textContent = animalData.tratamiento;
    document.getElementById("fichaFechaIngreso").textContent = animalData.fechaIngreso;
    document.getElementById("fichaHistorialMedico").textContent = animalData.historialMedico;
    document.getElementById("fichaNotasVeterinario").textContent = animalData.notasVeterinario;

    const fichaMedica = document.getElementById("fichaMedica");
    const overlay = document.querySelector('.modal-overlay');

    fichaMedica.style.display = 'block';
    overlay.style.display = 'block';

    // Añadir la clase para iniciar las transiciones
    setTimeout(() => {
        fichaMedica.classList.add('mostrar');
        overlay.classList.add('mostrar');
    }, 10); // Pequeño retraso para garantizar que display: block se aplique primero
}



document.getElementById("cerrarFicha").addEventListener("click", function() {
    const fichaMedica = document.getElementById("fichaMedica");
    const overlay = document.querySelector('.modal-overlay');

    fichaMedica.classList.remove('mostrar');
    overlay.classList.remove('mostrar');

    // Esperar a que termine la transición antes de ocultar completamente
    setTimeout(() => {
        fichaMedica.style.display = 'none';
        overlay.style.display = 'none';
    }, 300);
});





function volver() {
    if (document.referrer === "") {
        window.location.href = "home.html";
    } else {
        window.history.back();
    }
}
