function goBack() {
    document.getElementById("loader").classList.remove("hidden");
    setTimeout(function() {
        window.history.back();
    }, 1000);
}

document.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
        document.getElementById("loader").classList.remove("hidden");
    });
});
