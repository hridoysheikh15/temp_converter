function myfunction() {
  var selectItem = document.getElementById("selectItem").value;
  const myInput = document.getElementById("myInput").value;
  var celsius, fahren, kelvin, rank, romer;
  if (selectItem === "cel") {
    fahren = myInput * (9 / 5) + 32;
    kelvin = myInput * 1 + 273.15;
    rank = (myInput * 1 + 273.15) * (9 / 5) + 491.67;
    romer = myInput * 1 * (21 / 40) + 7.5;
    document.getElementById("res1").innerHTML =
      "fahrenheit: " + parseFloat(fahren) + "°F";
    document.getElementById("res2").innerHTML =
      "kelvin is: " + parseFloat(kelvin) + "°K";
    document.getElementById("res3").innerHTML =
      "rankine is: " + parseFloat(rank) + "°R";
    document.getElementById("res4").innerHTML =
      "Romer is: " + parseFloat(romer) + "°Rø";
  } else if (selectItem === "fah") {
    celsius = (myInput - 32) * (5 / 9);
    kelvin = (myInput - 32) * (5 / 9) + 273.15;
    rank = myInput * 1 + 459.67;
    romer = ((myInput * 1 - 32) * 7) / 24 + 7.5;
    document.getElementById("res1").innerHTML =
      "Celsius is: " + parseFloat(celsius) + "°C";
    document.getElementById("res2").innerHTML =
      "kelvin is: " + parseFloat(kelvin) + "°K";
    document.getElementById("res3").innerHTML =
      "rankine is: " + parseFloat(rank) + "°R";
    document.getElementById("res4").innerHTML =
      "Romer is: " + parseFloat(romer) + "°Rø";
  } else if (selectItem === "kel") {
    celsius = myInput * 1 - 273.15;
    fahren = (myInput * 1 - 273.15) * 1.8 + 32;
    rank = myInput * 1 * 1.8;
    romer = (myInput * 1 - 273.15) * 0.525 + 7.5;
    document.getElementById("res1").innerHTML =
      "Celsius is: " + parseFloat(celsius) + "°C";
    document.getElementById("res2").innerHTML =
      "Fahrenheit is: " + parseFloat(fahren) + "°F";
    document.getElementById("res3").innerHTML =
      "rankine is: " + parseFloat(rank) + "°R";
    document.getElementById("res4").innerHTML =
      "Romer is: " + parseFloat(romer) + "°Rø";
  } else if (selectItem === "ran") {
    celsius = ((myInput * 1 - 491.67) * 5) / 9;
    fahren = myInput * 1 - 459.67;
    kelvin = myInput * 1 * (5 / 9);
    romer = (myInput * 1 - 491.67) * (4 / 9);
    document.getElementById("res1").innerHTML =
      "Celsius is: " + parseFloat(celsius) + "°C";
    document.getElementById("res2").innerHTML =
      "Fahrenheit is: " + parseFloat(fahren) + "°F";
    document.getElementById("res3").innerHTML =
      "Kelvin is: " + parseFloat(kelvin) + "°K";
    document.getElementById("res4").innerHTML =
      "Romer is: " + parseFloat(romer) + "°Rø";
  } else if (selectItem === "ro") {
    celsius = (myInput * 1 - 7.5) * (24 / 40);
    fahren = (myInput * 1 - 7.5) * (24 / 40) * 1.8 + 32;
    kelvin = (myInput * 1 - 7.5) * (24 / 40) + 273.15;
    rank = (myInput * 1 - 7.5) * (24 / 40) * 1.8 + 491.67;
    document.getElementById("res1").innerHTML =
      "Celsius is: " + parseFloat(celsius) + "°C";
    document.getElementById("res2").innerHTML =
      "Fahrenheit is: " + parseFloat(fahren) + "°F";
    document.getElementById("res3").innerHTML =
      "Kelvin is: " + parseFloat(kelvin) + "°K";
    document.getElementById("res4").innerHTML =
      "Ranking is: " + parseFloat(rank) + "°R";
  } else {
    window.alert("You want to select a degree format for results");
  }
}
