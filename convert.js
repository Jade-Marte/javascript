let celsius;
let fahrenhait;
function celsiusToFahrenhait(celsius) {
  let fTemp = (celsius * 9) / 5 + 32;
  return fTemp;
}
console.log(celsiusToFahrenhait(0));
function fahrenhaitToCelsius(fahrenhait) {
  let cTemp = ((fahrenhait - 32) * 5) / 9;
  return cTemp;
}
console.log(fahrenhaitToCelsius(0));
