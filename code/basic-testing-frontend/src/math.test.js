import { it, expect } from "vitest";
import { add } from "./math";

it("should summarize all number values in an aray", () => {
  // Arrange
  const numbers = [1, 2, 3];
  const expectedResult = numbers.reduce((acc, el) => acc + el, 0);

  // Act
  const result = add(numbers);

  // Assert
  expect(result).toBe(expectedResult);
});
