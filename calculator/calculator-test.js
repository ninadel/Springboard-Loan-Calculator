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

let tests = [
  "valid",
  "zero",
  "empty-object",
  "null",
  "null-values",
  "negative-values",
  "array",
  "array-values",
  "string",
  "string-values",
];

const objectKeys = ["amount", "years", "rate"];

function getTestValues(i) {
  if (i === "valid") {
    return {
      amount: 10000,
      years: 5,
      rate: 0.07,
    };
  } else if (i === "zero-values") {
    return {
      amount: 0,
      years: 0,
      rate: 0,
    };
  } else if (i === "decimal-values") {
    return {
      amount: 10000.1,
      years: 5.1,
      rate: 0.1,
    };
  } else if (i === "invalid-rate") {
    return {
      amount: 10000,
      years: 5,
      rate: 7,
    };
  } else if (i === "empty-object") {
    return {};
  } else if (i === "null") {
    return null;
  } else if (i === "null-values") {
    return {
      amount: null,
      years: null,
      rate: null,
    };
  } else if (i === "negative-values") {
    return {
      amount: -10000,
      years: -5,
      rate: -0.07,
    };
  } else if (i === "array") {
    return [];
  } else if (i === "array-values") {
    return {
      amount: [],
      years: [],
      rate: [],
    };
  } else if (i === "string") {
    return "abc";
  } else if (i === "string-values") {
    return {
      amount: "10000",
      years: "5",
      rate: "0.05",
    };
  }
}

// PARAMETERS VALID
describe("calculateMonthlyPayment has required parameters", function () {
  // parameter is an object
  it("the function parameter is an object", function () {
    values = getTestValues("valid");
    expect(values).toEqual(jasmine.any(Object));
    values = getTestValues("zero-values");
    expect(values).toEqual(jasmine.any(Object));
    values = getTestValues("decimal-values");
    expect(values).toEqual(jasmine.any(Object));
    values = getTestValues("zero-values");
    expect(values).toEqual(jasmine.any(Object));
    values = getTestValues("empty-object");
    expect(values).toEqual(jasmine.any(Object));
    values = getTestValues("null");
    expect(values).not.toEqual(jasmine.any(Object));
    values = getTestValues("null-values");
    expect(values).toEqual(jasmine.any(Object));
    values = getTestValues("negative-values");
    expect(values).toEqual(jasmine.any(Object));
    values = getTestValues("array");
    expect(values).toEqual(jasmine.any(Object));
    values = getTestValues("array-values");
    expect(values).toEqual(jasmine.any(Object));
    values = getTestValues("string");
    expect(values).not.toEqual(jasmine.any(Object));
    values = getTestValues("string-values");
    expect(values).toEqual(jasmine.any(Object));
  });
  // expect(result).toBeDefined();
  // object has an amount key
  it("the object has the required keys", function () {
    values = getTestValues("valid");
    for (key of objectKeys) {
      expect(values[key]).toBeDefined();
    }
    values = getTestValues("zero-values");
    for (key of objectKeys) {
      expect(values[key]).toBeDefined();
    }
    values = getTestValues("decimal-values");
    for (key of objectKeys) {
      expect(values[key]).toBeDefined();
    }
    values = getTestValues("zero-values");
    for (key of objectKeys) {
      expect(values[key]).toBeDefined();
    }
    values = getTestValues("empty-object");
    for (key of objectKeys) {
      expect(values[key]).not.toBeDefined();
    }
    values = getTestValues("null");
    for (key of objectKeys) {
      expect(function () {
        values[key];
      }).toThrowError();
    }
    values = getTestValues("null-values");
    for (key of objectKeys) {
      expect(values[key]).toBeDefined();
    }
    values = getTestValues("negative-values");
    for (key of objectKeys) {
      expect(values[key]).toBeDefined();
    }
    values = getTestValues("array");
    for (key of objectKeys) {
      expect(values[key]).not.toBeDefined();
    }
    values = getTestValues("array-values");
    for (key of objectKeys) {
      expect(values[key]).toBeDefined();
    }
    values = getTestValues("string");
    for (key of objectKeys) {
      expect(values[key]).not.toBeDefined();
    }
    values = getTestValues("string-values");
    for (key of objectKeys) {
      expect(values[key]).toBeDefined();
    }

    // values = getTestValues("valid");
    // expect(values["amount"]).toBeDefined();
    // values = getTestValues("empty-object");
    // expect(values["amount"]).not.toBeDefined();
    // values = getTestValues("missing");
    // expect(function () {
    //   values["amount"];
    // }).toThrowError();
    // values = getTestValues("negative-values");
    // expect(values["amount"]).toBeDefined();
    // expect(result).toBeDefined();
    // object has a years key
    // it("the object has a years key", function () {
    //   values = getTestValues("valid");
    //   expect(values["years"]).toBeDefined();
    //   values = getTestValues("empty-object");
    //   expect(values["years"]).not.toBeDefined();
    //   values = getTestValues("missing");
    //   expect(function () {
    //     values["years"];
    //   }).toThrowError();
    //   values = getTestValues("negative-values");
    //   expect(values["years"]).toBeDefined();
    // });
    //   // expect(result).toBeDefined();
    //   // object has a rate key
    // it("the object has a rate key", function () {
    //   values = getTestValues("valid");
    //   expect(values["rate"]).toBeDefined();
    //   values = getTestValues("empty-object");
    //   expect(values["rate"]).not.toBeDefined();
    //   values = getTestValues("missing");
    //   expect(function () {
    //     values["rate"];
    //   }).toThrowError();
    //   values = getTestValues("negative-values");
    //   expect(values["rate"]).toBeDefined();
    // });
  });
});

// // VALID VALUES
// describe("calculateMonthlyPayment has valid values", function () {
//   it("values is in number format", function () {
//     values = getTestValues("valid");
//     expect(values["amount"]).toBeInstanceOf(Number);
//     expect(values["years"]).toBeInstanceOf(Number);
//     expect(values["rate"]).toBeInstanceOf(Number);
//     values = getTestValues("empty-object");
//     expect(values["amount"]).not.toBeDefined();
//     expect(values["years"]).not.toBeDefined();
//     expect(values["rate"]).not.toBeDefined();
//     values = getTestValues("missing");
//     expect(function () {
//       values["amount"];
//     }).toThrowError();
//     expect(function () {
//       values["years"];
//     }).toThrowError();
//     expect(function () {
//       values["rate"];
//     }).toThrowError();
//     values = getTestValues("negative-values");
//     expect(values["amount"]).toBeInstanceOf(Number);
//     expect(values["years"]).toBeInstanceOf(Number);
//     expect(values["rate"]).toBeInstanceOf(Number);
//   });
//   it("values are within range", function () {
//     values = getTestValues("valid");
//     expect(parseFloat(values["amount"])).toBeGreaterThan(0);
//     expect(parseFloat(values["years"])).toBeGreaterThan(0);
//     expect(parseFloat(values["rate"])).toBeGreaterThan(0);
//     expect(parseFloat(values["rate"])).toBeLessThan(1);
//     values = getTestValues("empty-object");
//     expect(parseFloat(values["amount"])).toBeNaN();
//     expect(parseFloat(values["years"])).toBeNaN();
//     expect(parseFloat(values["rate"])).toBeNaN();
//     // values = getTestValues("missing");
//     // expect(parseFloat(values["amount"])).toBeNaN();
//     // expect(parseFloat(values["years"])).toBeNaN();
//     // expect(parseFloat(values["rate"])).toBeNaN();
//     values = getTestValues("negative-values");
//     expect(parseFloat(values["amount"])).not.toBeGreaterThan(0);
//     expect(parseFloat(values["years"])).not.toBeGreaterThan(0);
//     expect(parseFloat(values["rate"])).not.toBeGreaterThan(0);
//     expect(parseFloat(values["rate"])).toBeLessThan(1);
//   });
// });

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
    // values = getTestValues("empty-object");
    // values = getTestValues("missing");
    // values = getTestValues("negative-values");
  });
  // it("total number of payments is calculated correctly", function () {
  //   values = getTestValues("valid");
  //   expect(values["years"] * 12).toEqual(60);
  //   // values = getTestValues("empty-object");
  //   // values = getTestValues("missing");
  //   values = getTestValues("negative-values");
  //   expect(values["years"] * 12).toEqual(-60);
  // });
  // it("periodic interest rate is correct", function () {
  //   values = getTestValues("valid");
  //   expect(values["rate"] / 12).toBeCloseTo(0.0058, 4);
  //   values = getTestValues("negative-values");
  //   expect(values["rate"] / 12).toBeCloseTo(-0.0058, 4);
  // });
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
