import { it, expect } from "vitest";
import fs from "fs";
import path from "path";

import { showError } from "./dom";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

it("first test", () => {
  showError("test");
});
