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
  "valid-values",
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
  if (i === "valid-values") {
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
      amount: 10000.12,
      years: 5.13,
      rate: 0.12,
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

// TEST FOR ACCURATE CALCULATIONS
describe("calculateMonthlyPayment is calculating accurately", function () {
  it("monthlyPaymentNum is accurate when inputs are valid", function () {
    let principle = 10000;
    let years = (values = 10);
    let yearlyRate = 0.07;
    // n = total number of payments (years * 12)
    let numPayments = years * 12;
    // i = periodic interest rate (in our case yearly rate / 12)
    let periodicRate = yearlyRate / 12;
    // calculate monthly payment
    // monthlyPayment = (p * i)/(1-(1+i)^-n)
    let monthlyPaymentNum =
      (principle * periodicRate) / (1 - (1 + periodicRate) ** -numPayments);
    expect(monthlyPaymentNum).toBeCloseTo(116.1084792, 4);
  });
  it("monthlyPaymentNum is accurate when inputs are decimals", function () {
    let principle = 10000.11111;
    let years = 10.22222;
    let yearlyRate = 0.0713333;
    // n = total number of payments (years * 12)
    let numPayments = years * 12;
    // i = periodic interest rate (in our case yearly rate / 12)
    let periodicRate = yearlyRate / 12;
    // calculate monthly payment
    // monthlyPayment = (p * i)/(1-(1+i)^-n)
    let monthlyPaymentNum =
      (principle * periodicRate) / (1 - (1 + periodicRate) ** -numPayments);
    expect(monthlyPaymentNum).toBeCloseTo(115.0574414, 4);
  });
  //
  // total number of payments is input years * 12 months
  // it("total number of payments is calculated correctly", function () {
  //   // test when object has valid values
  //   values = getTestValues("valid-values");
  //   expect(values["amount"] * 12).toEqual(10000 * 12);
  //   // test when object has decimal-values
  //   values = getTestValues("decimal-values");
  // test when object has zero-values
  // test when object has invalid rate
  // test when input is empty-object
  // test when input is null
  // test when object has null-values
  // test when object has negative-values
  // test when input is an array
  // test when object has array values
  // test when input is a string
  // test when object has string values
  // });
  //
  // periodic interest rate is input rate / 12 months
  // it("periodic interest rate is correct", function () {
  // test when object has valid values
  // test when object has zero-values
  // test when object has decimal-values
  // test when object has invalid rate
  // test when input is empty-object
  // test when input is null
  // test when object has null-values
  // test when object has negative-values
  // test when input is an array
  // test when object has array values
  // test when input is a string
  // test when object has string values
});

// PARAMETERS VALID
describe("calculateMonthlyPayment has required parameters", function () {
  // parameter is an object
  it("the function parameter is an object", function () {
    values = getTestValues("valid-values");
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
  // object has an amount key
  it("the object has the required keys", function () {
    values = getTestValues("valid-values");
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
  });
});

// TEST FOR VALID VALUES
describe("calculateMonthlyPayment has valid values", function () {
  it("values is in number format", function () {
    // test when object has valid values
    values = getTestValues("valid-values");
    expect(values["amount"]).toBeInstanceOf(Number);
    expect(values["years"]).toBeInstanceOf(Number);
    expect(values["rate"]).toBeInstanceOf(Number);

    // test when object has decimal-values
    values = getTestValues("decimal-values");
    expect(values["amount"]).toBeInstanceOf(Number);
    expect(values["years"]).toBeInstanceOf(Number);
    expect(values["rate"]).toBeInstanceOf(Number);
  });
  // test when object has zero-values
  // test when object has invalid rate
  // test when input is empty-object
  // test when input is null
  // test when object has null-values
  // test when object has negative-values
  // test when input is an array
  // test when object has array values
  // test when input is a string
  // test when object has string values
  // test when object has valid values
  //   it("values are within range", function () {
  // test when object has valid values
  // test when object has zero-values
  // test when object has decimal-values
  // test when object has invalid rate
  // test when input is empty-object
  // test when input is null
  // test when object has null-values
  // test when object has negative-values
  // test when input is an array
  // test when object has array values
  // test when input is a string
  // test when object has string values
});

// TEST FOR ACCURATE OUTPUT
// describe("calculateMonthlyPayment is returning in the correct format", function () {
// it("should return a result in string format", function () {
// test when object has valid values
// test when object has zero-values
// test when object has decimal-values
// test when object has invalid rate
// test when input is empty-object
// test when input is null
// test when object has null-values
// test when object has negative-values
// test when input is an array
// test when object has array values
// test when input is a string
// test when object has string values
// it("should return a result with 2 decimal places", function () {
// test when object has valid values
// test when object has zero-values
// test when object has decimal-values
// test when object has invalid rate
// test when input is empty-object
// test when input is null
// test when object has null-values
// test when object has negative-values
// test when input is an array
// test when object has array values
// test when input is a string
// test when object has string values
// });
