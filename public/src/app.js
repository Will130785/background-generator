//Create functionality object
const functionality = {
    generateBtn: document.getElementById("generate"),
    colorDisplay: document.querySelector(".display"),
    rgbForm: document.querySelector(".rgb-input"),
    rValue: document.querySelector("#r-value"),
    gValue: document.querySelector("#g-value"),
    bValue: document.querySelector("#b-value"),
    generateRandom: () => {
        
        //Create random rgb values
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        //Display in UI
        document.querySelector("body").style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        functionality.colorDisplay.textContent = `RGB Value: ${r} ${g} ${b}`;
        functionality.rValue.value = "";
        functionality.gValue.value = "";
        functionality.bValue.value = "";
    }
}

//Event listeners
//Generate random button
functionality.generateBtn.addEventListener("click", functionality.generateRandom);
//Pick rgb value button
functionality.rgbForm.addEventListener("submit", e => {
    e.preventDefault();
    let r = functionality.rValue.value;
    let g = functionality.gValue.value;
    let b = functionality.bValue.value;

    //Display in UI
    document.querySelector("body").style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    functionality.colorDisplay.textContent = `RGB Value: ${r} ${g} ${b}`;
});
