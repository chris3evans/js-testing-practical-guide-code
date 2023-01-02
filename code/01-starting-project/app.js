<<<<<<< HEAD
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
=======
import { extractPostData, savePost } from './posts/posts.js';

const formElement = document.querySelector('form');

export async function submitFormHandler(event) {
  event.preventDefault();

  const formData = new FormData(formElement);
  try {
    const postData = extractPostData(formData);
    await savePost(postData);
  } catch (error) {
    showError(error.message);
  }
}

formElement.addEventListener('submit', submitFormHandler);
>>>>>>> c3622121a8cc2c4d499760155ad30a0e4425b37a
