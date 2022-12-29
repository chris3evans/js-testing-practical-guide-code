import { describe, it, expect } from "vitest";
import { generateToken } from "./async-example";

describe("generateToken()", () => {
  it("should generate a token value", (done) => {
    const testUserEmail = "test@test.com";

    generateToken(testUserEmail, (error, token) => {
      try {
        expect(token).toBeDefined();
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});
