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
});
