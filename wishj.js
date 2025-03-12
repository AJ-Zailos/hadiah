function back() {
    window.location.href = "index.html";
}

function matchheight() {
    const img = document.getElementById("mele");
    const div = document.getElementById("all");
    div.style.height = img.clientHeight + "px";
}

window.onload = matchheight;
window.onresize = matchheight;