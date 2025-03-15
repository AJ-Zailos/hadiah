function matchheight() {
    const img = document.getElementById("mele");
    const div = document.getElementById("all");
    const vid = document.getElementById("videonya");
    const eee = document.getElementById("bday");
    vid.style.width = eee.clientWidth + "px";
    div.style.height = img.clientHeight + "px";
}

window.onload = matchheight;
window.onresize = matchheight;
