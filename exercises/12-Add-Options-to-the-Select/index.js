let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here
let countryNames = document.querySelector("#mySelect");

for(let i = 0; i < countries.length; i++){
  let optionElement = document.createElement("option");
  optionElement.value = countries[i];
  optionElement.innerHTML = countries[i];
  countryNames.appendChild(optionElement);
}
countryNames.addEventListener("change", function() {
   let selectedCountry = countryNames.value;
   alert(selectedCountry);
}) 