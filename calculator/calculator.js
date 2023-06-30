// this is a function that loads at start
window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

// this function pulls UI values from ?
function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// this function is called by the 'DomContentLoaded' function
// - Get the inputs from the DOM.
// - Put some default values in the inputs
// - Call a function to calculate the current monthly payment
function setupIntialValues() {
  // default values in the inputs
  // let something equal default value
  let values = {
    amount: "",
    years: "",
    rate: "",
  };
  let currentValues = getCurrentValues();
  values["amount"] += currentValues["amount"];
  values["years"] += currentValues["years"];
  values["rate"] += currentValues["rate"];
  // call function calculateMontlyPayment
  // calculateMonthlyPayment(values)
  let monthlyPayment = calculateMonthlyPayment(values);
}

// this function is called by the 'DomContentLoaded' function
// - Get the current values from the UI
// - Update the monthly payment
function update() {
  // get values from function getCurrentUIValues
  // update monthly payment
}

// - Given an object of values (a value has amount, years and rate ),
// - calculate the monthly payment.  The output should be a string
// - that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  // object of values
  // P = Amount of principle
  let p = values["amount"];
  let y = values["years"];
  let r = values["rate"];
  let monthlyPayment = null;
  // n = total number of payments (years * 12)
  let n = y * 12;
  // i = periodic interest rate (in our case yearly rate / 12)
  let i = r / 12;
  // calculate monthly payment
  // monthlyPayment = (p * i)/(1-(1+i)^-n)
  monthlyPayment = (p * i) / (1 - ((1 + i) ^ (n * -1)));
  // output string that always has 2 decimal places
  // return string (this is called by function updateMonthly)
  return monthlyPayment.toFixed(2).toString();
}

// - Given a string representing the monthly payment value,
// - update the UI to show the value.
function updateMonthly(monthly) {
  // get string from function calculateMonthlyPayment
  // string
  // update UI to string values
  // <span id="monthly-payment">(MONTHLY PAYMENT VALUE)</span>
}
