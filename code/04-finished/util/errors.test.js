import { it, describe, expect, beforeEach } from "vitest";

import { HttpError, ValidationError } from "./errors";

// beforeEach(() => {
//   const testClass = new HttpError(400, "error message", "xyz");
//   return testClass;
// });

describe("HttpError", () => {
  it("should contain the provided statusCode, message and data", () => {
    const testStatus = 1;
    const testMessage = "test";
    const testData = { key: "test" };

    const testError = new HttpError(testStatus, testMessage, testData);
    expect(testError.statusCode).toBe(testStatus);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).toBe(testData);
  });

  it("should contain undefined as data if no data is provided", () => {
    const testStatus = 1;
    const testMessage = "test";

    const testError = new HttpError(testStatus, testMessage);

    expect(testError.statusCode).toBe(testStatus);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).not.toBeDefined();
  });
});

describe("ValidationError", () => {
  it("should contain the provided message", () => {
    const testMessage = "test";

    const testError = new ValidationError(testMessage);

    expect(testError.message).toBe(testMessage);
  });
});
