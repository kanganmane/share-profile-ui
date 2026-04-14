const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")

function openshare(){
    console.log("Opening.");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
}

function closeshare(){
    console.log("Closing.");
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
}