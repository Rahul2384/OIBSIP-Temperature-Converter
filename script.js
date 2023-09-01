document.getElementById("calculate").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Hi");
  document.getElementById("result").value = "";
  const input = document.getElementById("celsius-input").value;
  console.log(input);

  var selectedfirst = document.getElementById("input");
  var inputVal = selectedfirst.options[selectedfirst.selectedIndex].value;
//   console.log(value);

  var select = document.getElementById("convert");
  var value = select.options[select.selectedIndex].value;
  console.log(value);

  const ctf = (val) => {
    let f = ((val * 9) / 5 + 32).toFixed(1);
    return f;
  };

  const ftc = (val) => {
    let c = (((val - 32) * 5) / 9).toFixed(1);
    return c;
  };

  if(inputVal === value){
    document.getElementById("result").innerHTML = input + "&#176; " + inputVal;
  }

  else if (inputVal === "Celsius" && value === "Fahrenheit") {
    var result = ctf(input);
    document.getElementById("result").innerHTML = result + "&#176; Fahrenheit";
    console.log(result);
  }
  else if (inputVal === "Fahrenheit" && value === "Celsius"){
    var result = ftc(input);
    document.getElementById("result").innerHTML = result + "&#176; Celsius";
    console.log(result);
  }

  else if (inputVal === "Celsius" && value === "Kelvin"){
    // var result = ftc(input);
    var result = Number(input) + 273.15;
    document.getElementById("result").innerHTML = result + "&#176; Kelvin";
    console.log(result);
  }

  else if (inputVal === "Kelvin" && value === "Celsius"){
    // var result = ftc(input);
    var result = Number(input) - 273.15;
    document.getElementById("result").innerHTML = result + "&#176; Celsius";
    console.log(result);
  }

  else if (inputVal === "Fahrenheit" && value === "Kelvin"){
    var result = ftc(input);
    result = Number(result) + 273.15;
    document.getElementById("result").innerHTML = result + "&#176; Kelvin";
    console.log(result);
  }

  else if (inputVal === "Kelvin" && value === "Fahrenheit"){
    // var result = ftc(input);
    var result = Number(input) - 273.15;
    // result = Number(result) + 273.15;
    result = ctf(result);
    document.getElementById("result").innerHTML = result + "&#176; Fahrenheit";
    console.log(result);
  }
});
