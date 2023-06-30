// Your goal is to write tests for the calculateMontlyPayment function. There are a few suggested tests, but if you can think of more, feel free to add to it.

// TESTS for calculateMonthlyPayment

// EXAMPLE
// it("should calculate the low tax bracket", function () {
//   expect(calculateTaxes(10000)).toEqual(1500);
//   expect(calculateTaxes(20000)).toEqual(3000);
//   expect(calculateTaxes(0)).toEqual(0);
// });

// calculateMonthlyPayment is a function that takes an object with 3 properties (amount, years, rate) which are in numeric format
// it extracts values from the object and runs a calculation

function getTestValues(i) {
  if (i === "valid") {
    return {
      amount: "10000",
      years: "5",
      rate: "0.07",
    };
  } else if (i === "empty") {
    return {};
  } else if (i === "missing") {
    return null;
  } else if (i === "negative") {
    return {
      amount: "-10000",
      years: "-5",
      rate: "-0.07",
    };
  }
}

// PARAMETERS VALID
describe("calculateMonthlyPayment has required parameters", function () {
  // parameter is an object
  it("the function parameter is an object", function () {
    values = getTestValues("valid");
    expect(values).toEqual(jasmine.any(Object));
    values = getTestValues("empty");
    expect(values).toEqual(jasmine.any(Object));
    values = getTestValues("missing");
    expect(values).not.toEqual(jasmine.any(Object));
    values = getTestValues("negative");
    expect(values).toEqual(jasmine.any(Object));
  });
  // expect(result).toBeDefined();
  // object has an amount key
  it("the object has an amount key", function () {
    values = getTestValues("valid");
    expect(values["amount"]).toBeDefined();
    values = getTestValues("empty");
    expect(values["amount"]).not.toBeDefined();
    values = getTestValues("missing");
    expect(function () {
      values["amount"];
    }).toThrowError();
    values = getTestValues("negative");
    expect(values["amount"]).toBeDefined();
  });
  // expect(result).toBeDefined();
  // object has a years key
  it("the object has a years key", function () {
    values = getTestValues("valid");
    expect(values["years"]).toBeDefined();
    values = getTestValues("empty");
    expect(values["years"]).not.toBeDefined();
    values = getTestValues("missing");
    expect(function () {
      values["years"];
    }).toThrowError();
    values = getTestValues("negative");
    expect(values["years"]).toBeDefined();
  });
  //   // expect(result).toBeDefined();
  //   // object has a rate key
  it("the object has a rate key", function () {
    values = getTestValues("valid");
    expect(values["rate"]).toBeDefined();
    values = getTestValues("empty");
    expect(values["rate"]).not.toBeDefined();
    values = getTestValues("missing");
    expect(function () {
      values["rate"];
    }).toThrowError();
    values = getTestValues("negative");
    expect(values["rate"]).toBeDefined();
  });
});

// // VALID VALUES
describe("calculateMonthlyPayment has valid values", function () {
  it("values is in string format", function () {
    values = getTestValues("valid");
    expect(values["amount"]).toBeInstanceOf(String);
    expect(values["years"]).toBeInstanceOf(String);
    expect(values["rate"]).toBeInstanceOf(String);
    values = getTestValues("empty");
    expect(values["amount"]).not.toBeDefined();
    expect(values["years"]).not.toBeDefined();
    expect(values["rate"]).not.toBeDefined();
    values = getTestValues("missing");
    expect(function () {
      values["amount"];
    }).toThrowError();
    expect(function () {
      values["years"];
    }).toThrowError();
    expect(function () {
      values["rate"];
    }).toThrowError();
    values = getTestValues("negative");
    expect(values["amount"]).toBeInstanceOf(String);
    expect(values["years"]).toBeInstanceOf(String);
    expect(values["rate"]).toBeInstanceOf(String);
  });
  it("values are within range", function () {
    values = getTestValues("valid");
    expect(parseFloat(values["amount"])).toBeGreaterThan(0);
    expect(parseFloat(values["years"])).toBeGreaterThan(0);
    expect(parseFloat(values["rate"])).toBeGreaterThan(0);
    expect(parseFloat(values["rate"])).toBeLessThan(1);
    values = getTestValues("empty");
    expect(parseFloat(values["amount"])).toBeNaN();
    expect(parseFloat(values["years"])).toBeNaN();
    expect(parseFloat(values["rate"])).toBeNaN();
    // values = getTestValues("missing");
    // expect(parseFloat(values["amount"])).toBeNaN();
    // expect(parseFloat(values["years"])).toBeNaN();
    // expect(parseFloat(values["rate"])).toBeNaN();
    values = getTestValues("negative");
    expect(parseFloat(values["amount"])).not.toBeGreaterThan(0);
    expect(parseFloat(values["years"])).not.toBeGreaterThan(0);
    expect(parseFloat(values["rate"])).not.toBeGreaterThan(0);
    expect(parseFloat(values["rate"])).toBeLessThan(1);
  });
});

describe("calculateMonthlyPayment is calculating intermediary values correctly", function () {
  it("values are converted to float", function () {
    values = getTestValues("valid");
    values["amount"] = parseFloat(values["amount"]);
    expect(values["amount"]).not.toBeInstanceOf(String);
    expect(values["amount"]).toBeInstanceOf(Number);
    values["years"] = parseFloat(values["years"]);
    expect(values["years"]).not.toBeInstanceOf(String);
    expect(values["years"]).toBeInstanceOf(Number);
    values["rate"] = parseFloat(values["rate"]);
    expect(values["rate"]).not.toBeInstanceOf(String);
    expect(values["rate"]).toBeInstanceOf(Number);
    // values = getTestValues("empty");
    // values = getTestValues("missing");
    // values = getTestValues("negative");
  });
  it("total number of payments is calculated correctly", function () {
    values = getTestValues("valid");
    expect(parseFloat(values["years"]) * 12).toEqual(60);
    // values = getTestValues("empty");
    // values = getTestValues("missing");
    values = getTestValues("negative");
    expect(parseFloat(values["years"]) * 12).toEqual(-60);
  });
  it("periodic interest rate is correct", function () {
    values = getTestValues("valid");
    expect(parseFloat(values["rate"]) / 12).toBeCloseTo(0.0058, 4);
    values = getTestValues("negative");
    expect(parseFloat(values["rate"]) / 12).toBeCloseTo(-0.0058, 4);
  });
  //   //   // check that numerator of calculation is correct
  //   //   it("numerator of calculation is correct", function () {});
  //   //   // check that denominator of calculation is correct
  //   //   it("denominator of calculation is correct", function () {});
  //   //   // check that calculated monthly payment is correct
  //   //   it("calculated monthly payment is correct", function () {});
});

// describe("calculateMonthlyPayment is returning in the correct format", function () {
//   // check that the returned value is a string
//   // check that the returned string value has a 2 decimal places
// });

// it("should calculate the monthly rate correctly", function () {
//   // provide values and get payment from calculateMontlyPayment function
//   // take yearly rate, divide by 12
//   // calculateMontlyPayment function(?)
//   // what are the edge cases?
//   // what about negative value
//   // what about wrong format? (string, array)
//   // what about empty?
//   // provide values and check monthly payment
// });

// it("should return a result with 2 decimal places", function () {
//   // provide values to calculateMonthlyPayment function as object
//   // get result from calculateMonthlyPayment function in string format
//   // check result string, look for position of decimal within string, not float because that could be rounded to zero or one place after decimal
//   // ..
// });

/// etc
