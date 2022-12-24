import { it, expect } from "vitest";
import { add } from "./math";

it("should summarize all number values in an aray", () => {
  const numbers = [1, 2];
  const expectedResult = numbers.reduce((acc, el) => acc + el, 0);

  const result = add(numbers);

  expect(result).toBe(expectedResult);
});

it("should yield NaN if at least one invalid number is provided", () => {
  const inputs = ["invalid", 1];

  const result = add(inputs);

  expect(result).toBeNaN();
});

it("should yield a correct sum if an array of numeric string values is provided", () => {
  const inputs = ["1", "2"];
  const expectedResult = inputs.reduce((acc, el) => +acc + +el, 0);

  const result = add(inputs);

  expect(result).toBe(expectedResult);
});

it("should yield 0 as a sum if an empty array is provided", () => {
  const inputs = [];

  const result = add(inputs);

  expect(result).toBe(0);
});

it("should throw an error if no value is passed into the function", () => {
  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrow();
});

it("should throw an error if provided with multiple arguments instead of an array", () => {
  const resultFn = () => {
    add(1, 2, 3);
  };

  expect(resultFn).toThrow();
});
