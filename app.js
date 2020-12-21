// fetch API - used to make http requests to the backend and database in nodejs, making requests from fron end to backend, or to use 3rd pary API.

// fetch api will get a response from api

// we can also make a request to a file in the folder

// function calculate() {
//   // fetch is built into the browser so no CDN needed
//   // runs asynchonously and returns a promise when its done fetching and we catch the primise by attaching .then.
//   fetch("items.json")
//     //   must take the res and format it to what we want which is json
//     .then((res) => res.json())
//     // then we get another promis back and catch it
//     .then((data) => console.log(data));
//   // data can be called whatever we want
// }

// // fetch api course on youtube

// calculate();

/* status numbers
200 range = successfull
201 = successfull but created on a server
300 range = redirect
400 range = user errors
500 range =  server error
*/

// ==============================Variables========================

// Currency 1 Selection
const currency_One = document.getElementById("currency-1");

// Amount Currency 1
const amount_One = document.getElementById("amount-1");

// Currency 2 selection
const currency_Two = document.getElementById("currency-2");

// Amount Currency 1
const amount_Two = document.getElementById("amount-2");

// Swap Button
const swap_Button = document.getElementById("swap");

// Rate Input
const rate_Element = document.getElementById("rate");

// ====================Fetch exchange rates and update the DOM====================
function calculate() {
  // we have to select the value of the option selected
  const currency_one = currency_One.value;
  const currency_two = currency_Two.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
      const rates = data.rates[currency_two];
      rate_Element.innerText = `1 ${currency_one} = ${rates}${currency_two}`;

      amount_Two.value = (amount_One.value * rates).toFixed(2);
    });
}

// ==============================Event Listeners==================================
//as a select option we use change
currency_One.addEventListener("change", calculate);
//run if we type something in the input or using the arrows
amount_One.addEventListener("input", calculate);
currency_Two.addEventListener("change", calculate);
amount_Two.addEventListener("input", calculate);

swap_Button.addEventListener("click", () => {
  const temp = currency_One.value;
  currency_One.value = currency_Two.value;
  currency_Two.value = temp;
  calculate();
});

// ==============================Function Calls==================================
calculate();
