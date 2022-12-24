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

  const result = transformToNumber(input);

  expect(result).toBeNaN();
});
