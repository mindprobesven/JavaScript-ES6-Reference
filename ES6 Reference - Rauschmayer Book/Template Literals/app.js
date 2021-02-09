// -------------------------------------------------------------------------------------------------------
// Created by Sven Kohn
// -------------------------------------------------------------------------------------------------------

let name = 'Sven Kohn';

let initApp = () => {
  console.log('Init...');

  showMessage(name);
}

let showMessage = (name) => {
  let message = `
  <p>${makeUpperCase('Hello')} ${name}! You are logged in.</p>
  <p>How would you like to proceed?</p>
  `;

  window.document.getElementById('output').innerHTML = message;
}

let makeUpperCase = (word) => {
  return word.toUpperCase();
}

window.onload = initApp();