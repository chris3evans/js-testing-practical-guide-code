import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

it("should return a number value if a number argument is entered", () => {
  const input = 1;

  const result = transformToNumber(input);

  expect(result).toBe(1);
});

it("should return a number value if a string number argument is entered", () => {
  const input = "1";

  const result = transformToNumber(input);

  expect(result).toBe(1);
});

it("should yield NaN for non-transformable values", () => {
  const input = "hello";
  const input2 = {};

  const result = transformToNumber(input);
  const result2 = transformToNumber(input2);

  expect(result).toBeNaN();
  expect(result2).toBeNaN();
});
