function preload() {
    let a = document.getElementById("loader");
    let body = document.getElementById("glavniDiv");
    setTimeout(function() {
        a.style.display = "none";
        body.style.display = "block";
    }, 1000);
}