function convertTemperature() {
    const tempInput = document.getElementById('tempInput');
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const resultBox = document.getElementById('result-box');
    const resultText = document.getElementById('result-text');
    const errorMsg = document.getElementById('error-msg');

    errorMsg.textContent = "";
    resultBox.classList.add('hidden');

    if (tempInput.value.trim() === "") {
        errorMsg.textContent = "Please enter a number.";
        return;
    }

    const temp = parseFloat(tempInput.value);

    if (isNaN(temp)) {
        errorMsg.textContent = "Invalid input.";
        return;
    }

    let result;
    let unitLabel;
    let tempInC;

    if (fromUnit === "C") {
        tempInC = temp;
    } else if (fromUnit === "F") {
        tempInC = (temp - 32) * (5/9);
    } else if (fromUnit === "K") {
        tempInC = temp - 273.15;
    }

    if (toUnit === "C") {
        result = tempInC;
        unitLabel = "°C";
    } else if (toUnit === "F") {
        result = (tempInC * 9/5) + 32;
        unitLabel = "°F";
    } else if (toUnit === "K") {
        result = tempInC + 273.15;
        unitLabel = "K";
    }

    result = Math.round(result * 100) / 100;
    
    resultText.textContent = `${result} ${unitLabel}`;
    resultBox.classList.remove('hidden');
}
