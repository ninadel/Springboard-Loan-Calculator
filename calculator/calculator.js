// this is a listener that starts when DOMContentLoaded
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

// this function pulls UI values from form
// this function is called by update function BEFORE form submission (default values)
// this function is also called by update function AFTER form submission (submitted values)
function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// this function is called by window listener when DOMContentLoaded
// this is called BEFORE form is submitted
function setupIntialValues() {
  // default values in the inputs
  // let something equal default value
  let values = {
    amount: "10000",
    years: "5",
    rate: "0.07",
  };
  // populate form with these default values
  document.getElementById("loan-amount").value = values["amount"];
  document.getElementById("loan-years").value = values["years"];
  document.getElementById("loan-rate").value = values["rate"];
  // run update to calculate and display payment for initial default values
  update();
}

// this function is called by function setupInitialValues BEFORE the form is submitted
// this function is also called by form listener AFTER the form is submitted
// function update does not have input parameters
function update() {
  // function update calls function getCurrentValues to gets object with text values
  let currentValues = getCurrentUIValues();
  // function update calls function calculateMonthlyPayment with parameter currentValues
  // function calculateMonthlyPayment returns string value payment
  let payment = calculateMonthlyPayment(currentValues);
  // function update calls function updateMonthly which displays payment string in UI
  updateMonthly(payment);
}

// function calculateMonthlyPayment is called by function update
// function calculateMonthlyPayment receives object from function update
// function calculateMonthlyPayment modifies values of values object from text to numbers
function calculateMonthlyPayment(values) {
  // object of values (each value is still in string format so needs to be converted to float)
  let principle = parseFloat(values["amount"]);
  let years = parseFloat(values["years"]);
  let yearlyRate = parseFloat(values["rate"]);
  // n = total number of payments (years * 12)
  let numPayments = years * 12;
  // i = periodic interest rate (in our case yearly rate / 12)
  let periodicRate = yearlyRate / 12;
  // calculate monthly payment
  // monthlyPayment = (p * i)/(1-(1+i)^-n)
  let monthlyPaymentNum =
    (principle * periodicRate) / (1 - (1 + periodicRate) ** -numPayments);
  // output string that always has 2 decimal places
  // return string (this string is used by function updateMonthly)
  return monthlyPaymentNum.toFixed(2).toString();
}

// - Given a string representing the monthly payment value,
// - update the UI to show the value.
// this is a UI function
// function updateMonthly is called by function update
function updateMonthly(monthly) {
  // function updateMonthly receives string from function update
  // monthly payment UI is populated with calculated monthly payment
  let monthlyPaymentStr = document.getElementById("monthly-payment");
  monthlyPaymentStr.innerText = monthly;
}
