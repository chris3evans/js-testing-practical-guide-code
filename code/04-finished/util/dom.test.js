import { it, expect, vi } from "vitest";
import fs from "fs";
import path from "path";

import { showError } from "./dom";
import { Window } from "happy-dom";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
document.write(htmlDocumentContent);
vi.stubGlobal("document", document);

it('should add an error paragraph to the id="errors" element', () => {
  showError("Test Error");

  const errorsEl = document.getElementById("errors");
  const errorParagraph = errorsEl.firstElementChild;

  expect(errorParagraph).not.toBeNull();
});
