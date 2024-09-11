function goBack() {
    const loader = document.getElementById("loader");
    
    if (!loader.classList.contains("hidden")) {
        return;  // Si el loader ya está visible, no permitir más acciones
    }

    loader.classList.remove("hidden");

    setTimeout(function() {
        window.history.back();
    }, 1000);
}

document.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
        document.getElementById("loader").classList.remove("hidden");
    });
});

document.getElementById('volver-btn').addEventListener('click', function() {
    const loader = document.getElementById("loader");
    
    if (!loader.classList.contains("hidden")) {
        return;  // Si el loader ya está visible, no hacer nada
    }

    if (window.history.length > 1) {
        loader.classList.remove("hidden"); // Muestra el loader
        setTimeout(function() {
            window.history.back();
        }, 1000); // Espera un segundo antes de volver
    } else {
        // Si no hay página anterior, redirige al home (index.html)
        window.location.href = 'index.html';
    }
});

document.getElementById('volver-btn').addEventListener('click', function() {
    const loader = document.getElementById("loader");

    if (!loader.classList.contains("hidden")) {
        return;  // Si el loader ya está visible, no hacer nada
    }

    // Verifica si hay historial hacia atrás
    if (window.history.length > 1) {
        loader.classList.remove("hidden"); // Muestra el loader

        // Solo volver si no estamos en la misma página
        if (document.referrer && document.referrer !== window.location.href) {
            setTimeout(function() {
                window.history.back();
            }, 1000); // Espera un segundo antes de volver
        } else {
            loader.classList.add("hidden");  // Si no hay página previa válida, oculta el loader
        }
    } else {
        window.location.href = 'index.html';  // Redirige al home si no hay historial
    }
});

