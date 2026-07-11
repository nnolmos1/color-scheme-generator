const getSchemeBtn = document.getElementById("get-scheme-btn");
const colorPicker = document.getElementById("color-picker");

const colorBoxes = document.querySelectorAll(".color-box");
const colorCodes = document.querySelectorAll(".color-code");

const schemeSelect = document.getElementById("scheme-options");

// Event listener for the "Get Color Scheme" button
getSchemeBtn.addEventListener("click", function(){
    const pickedColor = colorPicker.value.replace("#", ""); // Remove the '#' symbol from the hex picker value
    const schemeMode = schemeSelect.value.toLowerCase(); // Convert the scheme mode to lowercase for the API request

    fetch(`https://www.thecolorapi.com/scheme?hex=${pickedColor}&mode=${schemeMode}`) 
        .then(response => response.json())
        .then(data => {
            
            colorBoxes.forEach((box, index) => {
                const hexValue = data.colors[index].hex.value;                
                box.style.backgroundColor = hexValue;
                colorCodes[index].textContent = hexValue;
            })
        })
})
