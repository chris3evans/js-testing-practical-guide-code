import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

// it("should throw an error if no argument is passed", () => {
//   const testFn = () => {
//     transformToNumber();
//   };

//   expect(testFn).toThrow();
// });

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
