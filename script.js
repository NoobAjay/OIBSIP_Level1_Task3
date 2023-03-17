function convertTemp() {
    
    const inputTemp = document.getElementById("inputTemp").value;
    const inputUnit = document.getElementById("inputUnit").value;
    const outputUnit = document.getElementById("outputUnit").value;
  
    let celsius;
    if (inputUnit === "celsius") {
      celsius = inputTemp;
    } else if (inputUnit === "fahrenheit") {
      celsius = (inputTemp - 32) * 5/9;
    } else if (inputUnit === "kelvin") {
      celsius = inputTemp - 273.15;
    }
  
    let outputTemp;
    if (outputUnit === "celsius") {
      outputTemp = celsius;
    } else if (outputUnit === "fahrenheit") {
      outputTemp = (celsius * 9/5) + 32;
    } else if (outputUnit === "kelvin") {
      outputTemp = celsius + 273.15;
    }
  
    document.getElementById("result").innerHTML = outputTemp.toFixed(2) + " " + outputUnit;
  }
  

  document.getElementById("convertBtn").addEventListener("click", convertTemp);
  