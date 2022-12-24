import { it, expect, describe } from "vitest";
import { validateStringNotEmpty, validateNumber } from "./validation";

describe("validateStringNotEmpty()", () => {
  it("should throw an error if an empty string is provided", () => {
    const input = "";
    const resultFn = () => {
      validateStringNotEmpty(input);
    };
    expect(resultFn).toThrow();
  });

  it("should throw correct error message if string is empty", () => {
    const emptyString = "";

    const resultFn = () => {
      validateStringNotEmpty(emptyString);
    };

    expect(resultFn).toThrow(/Invalid input - must not be empty/);
  });

  it("should throw an error if any other value than a string is provided", () => {
    const numInput = 1;
    const boolInput = true;
    const objInput = {};

    const numValFn = () => {
      validateStringNotEmpty(numInput);
    };
    const boolValFn = () => {
      validateStringNotEmpty(boolInput);
    };
    const objValFn = () => {
      validateStringNotEmpty(objInput);
    };

    expect(numValFn).toThrow();
    expect(boolValFn).toThrow();
    expect(objValFn).toThrow();
  });

  it("should not throw an error if a non-empty string is provided", () => {
    const string = "valid";

    const resultFn = () => {
      validateStringNotEmpty(string);
    };

    expect(resultFn).not.toThrow();
  });
});

describe("validateNumber()", () => {
  it("should throw an error if NaN is provided", () => {
    const naN = NaN;

    const resultFn = () => {
      validateNumber(naN);
    };

    expect(resultFn).toThrow();
  });

  it("should not throw an error if a number is provided", () => {
    const input = 1;

    const resultFn = () => {
      validateNumber(input);
    };

    expect(resultFn).not.toThrow();
  });

  it("should throw an error if a non numeric value is provided", () => {
    const input = "hello there";

    const resultFn = () => {
      validateNumber(input);
    };

    expect(resultFn).toThrow();
  });
});
