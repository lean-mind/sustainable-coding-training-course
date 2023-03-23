
let instructions = document.querySelector(".popup-container");
let startButton = document.querySelector("#start-btn");
let customContainer = document.querySelector(".container-custom");

// adding functionalities to the instructions container
startButton.addEventListener("click", () =>{
    instructions.style.display = "none";
    customContainer.style.display = "flex";
})
