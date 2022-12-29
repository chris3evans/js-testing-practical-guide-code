<<<<<<< HEAD
import { extractEnteredNumberValues } from './src/parser.js';
import { calculateResult } from './src/math.js';
import { generateResultText, outputResult } from './src/output.js';

const form = document.querySelector('form');

function formSubmitHandler(event) {
  event.preventDefault();
  const numberValues = extractEnteredNumberValues(form);

  const result = calculateResult(numberValues);
  const resultText = generateResultText(result);

  outputResult(resultText);
}

form.addEventListener('submit', formSubmitHandler);
=======
import { generateReportData, storeData } from './src/data.js';
import log from './src/util/logger.js';

const data = generateReportData(log);
storeData(data);
>>>>>>> ef4b179ff2897aaaa56ab18cc47b2ef45497895f
