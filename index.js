// Write your code here!
// 1. Remove the <main> element with id 'main'
let mainElement = document.getElementById('main');
mainElement.remove();

// 2. Create a new h1 element and store it in the variable 'newHeader'
let newHeader = document.createElement('h1');

// 3. Set the id of the newHeader element to 'victory'
newHeader.id = 'victory';

// 4. Set the text of newHeader to 'YOUR-NAME is the champion'
newHeader.textContent = 'YOUR-NAME is the champion';

// 5. Append the newHeader element to the DOM (e.g., to the body)
document.body.appendChild(newHeader);
