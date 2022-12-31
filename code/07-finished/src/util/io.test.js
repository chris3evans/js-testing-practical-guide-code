import { it, expect, vi } from "vitest";
import { promises as fs } from "fs";

import writeData from "./io";

vi.mock("fs");

it("should execute the writeFile method", () => {
  const testData = "test";
  const testFileName = "test.txt";

  // return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
  expect(fs.writeFile).toBeCalled();
});
