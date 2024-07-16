// Write your code here!
// Remove the <main> element with id 'main'
const mainElement = document.getElementById('main');
if (mainElement) {
  mainElement.remove();
}

// Create a new <h1> element and assign it to a variable 'newHeader'
const newHeader = document.createElement('h1');

// Set the id of the new <h1> element to 'victory'
newHeader.id = 'victory';

// Set the text content of the new <h1> element to 'YOUR-NAME is the champion'
newHeader.textContent = 'Larry Mecha is the champion';

// Append the new <h1> element to the body or any other desired location in the document
document.body.appendChild(newHeader);
