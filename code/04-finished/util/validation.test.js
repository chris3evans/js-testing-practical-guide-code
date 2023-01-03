import { it, expect } from "vitest";

import { validateNotEmpty } from "./validation";

it("should throw an error if an empty string is provided as a value", () => {
  const testInput = "";

  const validationFn = () => {
    validateNotEmpty(testInput);
  };

  expect(validationFn).toThrow();
});

it("should throw an error if a string of spaces is provided", () => {
  const testInput = "  ";
  const validationFn = () => {
    validateNotEmpty(testInput);
  };
  expect(validationFn).toThrow();
});

it("should throw an error with the provided message", () => {
  const testInput = "";
  const testErrorMessage = "Test";

  const validateFn = () => {
    validateNotEmpty(testInput, testErrorMessage);

    expect(validateFn).toThrow(testErrorMessage);
  };
});
