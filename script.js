// getting the value form the input field 
let currencyInUsd = document.getElementById("usd");
let currencyInCad = document.getElementById("cad");
const exchangeRate = 1.35;
//creating a function to convert the currency
function convertCurrency() {
    let usd = currencyInUsd.value;
    let cad = usd * exchangeRate;
    currencyInCad.value = cad;
}
