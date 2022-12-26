import { describe, it, expect } from "vitest";
import { transformToNumber, cleanNumbers } from "./numbers";

describe("transformToNumber()", () => {
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
});

describe("cleanNumbers()", () => {
  it("should return an array of number values if an array of string number values is provided", () => {
    const numberValues = ["1", "2"];

    const cleanedNumbers = cleanNumbers(numberValues);

    expect(cleanedNumbers[0]).toBeTypeOf("number");
  });
});
