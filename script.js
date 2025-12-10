//JS MouseEvent
const img = document.getElementById("spnIntro");

img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.1)";
});

img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
});
//JS KeyboardEvent
function keydownFunction() {
    document.getElementById("test").style.backgroundColor = "blue"
}
function keyupFunction() {
    document.getElementById("test").style.backgroundColor = "green"
}
//Eigen functie
document.addEventListener("DOMContentLoaded", () => {
    const deanImg = document.getElementById("dean");
    let isDean = true;
    deanImg.addEventListener("click", () => {
        deanImg.src = isDean ? "img/sammy.png" : "img/dean.png";
        isDean = !isDean;
    });

});




