//Create functionality object
const functionality = {
    generateBtn: document.getElementById("generate"),
    colorDisplay: document.querySelector(".display"),
    generateRandom: () => {
        
        //Create random rgb values
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        //Display in UI
        document.querySelector("body").style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        functionality.colorDisplay.textContent = `RGB Value: ${r} ${g} ${b}`;
    }
}

//Event listeners
functionality.generateBtn.addEventListener("click", functionality.generateRandom);