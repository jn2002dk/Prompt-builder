let rdpompt = {};
let apiurl = '';
let apikey = '';
window.onload = function () {
  let dropdownData = {};

  // Load the local file data.json into dropdownData
  fetch(chrome.runtime.getURL('data.json'))
    .then(response => response.json())
    .then(data => {
      dropdownData = data;

      // Load data from JSON file and populate dropdowns
      populateDropdown('dropdown1', dropdownData.dropdown1);
      populateDropdown('dropdown2', dropdownData.dropdown2);
      populateDropdown('dropdown3', dropdownData.dropdown3);
      populateDropdown('dropdown4', dropdownData.dropdown4);
      populateDropdown('dropdown5', dropdownData.dropdown5);
      populateDropdown('dropdown6', dropdownData.dropdown6);
      populateDropdown('dropdown7', dropdownData.dropdown7);
      populateDropdown('dropdown8', dropdownData.dropdown8);
      populateDropdown('dropdown9', dropdownData.dropdown9);
      populateDropdown('dropdown10', dropdownData.dropdown10);
    })
    .catch(error => console.error('Error loading data:', error));
  fetch(chrome.runtime.getURL('randompromptdata.json'))
    .then(response => response.json())
    .then(data => {
      rdpompt = data;
    })
    .catch(error => console.error('Error loading data:', error));
  fetch(chrome.runtime.getURL('api.json'))
    .then(response => response.json())
    .then(data => {
      apiurl = data.api;
      apikey = data.api_key;
    })
    .catch(error => console.error('Error loading data:', error));
};
document.getElementById('dropdown1').addEventListener('change', function () {
  const selectedValue = getDropdownValue('dropdown1');
  // Save the selected value to a variable
  const currentValue = document.getElementById('prompt').value;
  // Set the value of the input with id="prompt" to the selected value
  if (currentValue === '') {
    document.getElementById('prompt').value = selectedValue;
  }
  else {
    document.getElementById('prompt').value = currentValue + "," + selectedValue;
  }
});

document.getElementById('dropdown2').addEventListener('change', function () {
  const selectedValue = getDropdownValue('dropdown2');
  // Save the selected value to a variable
  const currentValue = document.getElementById('prompt').value;
  // Set the value of the input with id="prompt" to the selected value
  if (currentValue === '') {
    document.getElementById('prompt').value = selectedValue;
  }
  else {
    document.getElementById('prompt').value = currentValue + "," + selectedValue;
  }
});

document.getElementById('dropdown3').addEventListener('change', function () {
  const selectedValue = getDropdownValue('dropdown3');
  // Save the selected value to a variable
  const currentValue = document.getElementById('prompt').value;
  // Set the value of the input with id="prompt" to the selected value
  if (currentValue === '') {
    document.getElementById('prompt').value = selectedValue;
  }
  else {
    document.getElementById('prompt').value = currentValue + "," + selectedValue;
  }
});


document.getElementById('dropdown4').addEventListener('change', function () {
  const selectedValue = getDropdownValue('dropdown4');
  // Save the selected value to a variable
  const currentValue = document.getElementById('prompt').value;
  // Set the value of the input with id="prompt" to the selected value
  if (currentValue === '') {
    document.getElementById('prompt').value = selectedValue;
  }
  else {
    document.getElementById('prompt').value = currentValue + "," + selectedValue;
  }
});

document.getElementById('dropdown5').addEventListener('change', function () {
  const selectedValue = getDropdownValue('dropdown5');
  // Save the selected value to a variable
  const currentValue = document.getElementById('prompt').value;
  // Set the value of the input with id="prompt" to the selected value
  if (currentValue === '') {
    document.getElementById('prompt').value = selectedValue;
  }
  else {
    document.getElementById('prompt').value = currentValue + "," + selectedValue;
  }
});

document.getElementById('dropdown6').addEventListener('change', function () {
  const selectedValue = getDropdownValue('dropdown6');
  // Save the selected value to a variable
  const currentValue = document.getElementById('prompt').value;
  // Set the value of the input with id="prompt" to the selected value
  if (currentValue === '') {
    document.getElementById('prompt').value = selectedValue;
  }
  else {
    document.getElementById('prompt').value = currentValue + "," + selectedValue;
  }
});

document.getElementById('dropdown7').addEventListener('change', function () {
  const selectedValue = getDropdownValue('dropdown7');
  // Save the selected value to a variable
  const currentValue = document.getElementById('prompt').value;
  // Set the value of the input with id="prompt" to the selected value
  if (currentValue === '') {
    document.getElementById('prompt').value = selectedValue;
  }
  else {
    document.getElementById('prompt').value = currentValue + "," + selectedValue;
  }
});

document.getElementById('dropdown8').addEventListener('change', function () {
  const selectedValue = getDropdownValue('dropdown8');
  // Save the selected value to a variable
  const currentValue = document.getElementById('prompt').value;
  // Set the value of the input with id="prompt" to the selected value
  if (currentValue === '') {
    document.getElementById('prompt').value = selectedValue;
  }
  else {
    document.getElementById('prompt').value = currentValue + "," + selectedValue;
  }
});

document.getElementById('dropdown9').addEventListener('change', function () {
  const selectedValue = getDropdownValue('dropdown9');
  // Save the selected value to a variable
  const currentValue = document.getElementById('prompt').value;
  // Set the value of the input with id="prompt" to the selected value
  if (currentValue === '') {
    document.getElementById('prompt').value = selectedValue;
  }
  else {
    document.getElementById('prompt').value = currentValue + "," + selectedValue;
  }
});

document.getElementById('dropdown10').addEventListener('change', function () {
  const selectedValue = getDropdownValue('dropdown10');
  // Save the selected value to a variable
  const currentValue = document.getElementById('prompt').value;
  // Set the value of the input with id="prompt" to the selected value
  if (currentValue === '') {
    document.getElementById('prompt').value = selectedValue;
  }
  else {
    document.getElementById('prompt').value = currentValue + "," + selectedValue;
  }
});

document.getElementById('clear').addEventListener('click', function () {
  document.getElementById('prompt').value = '';
  // set dropdown index to 0
  document.getElementById('dropdown1').selectedIndex = 0;
  document.getElementById('dropdown2').selectedIndex = 0;
  document.getElementById('dropdown3').selectedIndex = 0;
  document.getElementById('dropdown4').selectedIndex = 0;
});

document.getElementById('clear_generated').addEventListener('click', function () {
  document.getElementById('generated').value = '';
});

document.getElementById('copy').addEventListener('click', function () {
  const text = document.getElementById('prompt').value;
  navigator.clipboard.writeText(text);
});

document.getElementById('copy_generated').addEventListener('click', function () {
  const text = document.getElementById('generated').value;
  navigator.clipboard.writeText(text);
});

document.getElementById('Random prompt').addEventListener('click', function () {
  document.getElementById('prompt').value = getRandomPrompt();
});

document.getElementById('settings').addEventListener('click', function () {
  // open settings.html
  window.location.href = 'settings.html';
})

document.getElementById('ai_random').addEventListener('click', function () {
  let answerstring = '';
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: 'Bearer ' + apikey
    },
    body: JSON.stringify({
      model: 'mistral-small-latest',
      messages: [
        {
          role: 'user',
          content: 'Generate a random image prompt for Stable Diffusion. Style should be either concept art, watercolor, photograph, anime, sci-fi, fantasy art or oil painting. Your answer should contain only the prompt text'
        }
      ]
    })
  };

  fetch(apiurl, options)
    .then(response => response.json())
    .then(response => {
      answerstring = response.choices[0].message.content;
      return answerstring.replace(/"/g, ''); // Remove double quotes
    })
    .then(cleanedAnswer => {
      cleanedAnswer = cleanedAnswer.replace(/(\r\n|\n|\r)/gm, ""); // Remove newlines
      document.getElementById('generated').value = cleanedAnswer;
    })
    .catch(err => console.error(err));
});

document.getElementById('generate').addEventListener('click', function () {
  let answerstring = '';
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: 'Bearer ' + apikey
    },
    body: JSON.stringify({
      model: 'mistral-small-latest',
      messages: [
        {
          role: 'user',
          content: 'Rewrite the following text as a prompt for Stable Diffusion where your answer only contains the prompt text: ' + document.getElementById('prompt').value
        }
      ]
    })
  };

  fetch(apiurl, options)
    .then(response => response.json())
    .then(response => {
      answerstring = response.choices[0].message.content;
      return answerstring.replace(/"/g, ''); // Remove double quotes
    })
    .then(cleanedAnswer => {
      cleanedAnswer = cleanedAnswer.replace(/(\r\n|\n|\r)/gm, ""); // Remove newlines
      document.getElementById('generated').value = cleanedAnswer;
    })
    .catch(err => console.error(err));
});

function generated(data) {
  var responseObject = JSON.parse(data);
  return document.getElementById('generated').value = responseObject.text;
}

function populateDropdown(dropdownId, options) {
  const dropdown = document.getElementById(dropdownId);
  options.forEach((option, index) => {
    const optionElement = document.createElement('option');
    optionElement.value = option;
    optionElement.textContent = option;
    dropdown.appendChild(optionElement);
  });
}

function getDropdownValue(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  return dropdown.value;
}

function getPrompt() {
  return document.getElementById('prompt').value;
}

function loadDataFromFile() {
  api.load_settings();
}

function getRandomPrompt() {
  let resultString = '';
  let randomIndex = 0;
  let pb = document.getElementById('personbox');
  let lb = document.getElementById('landscapebox');
  let ab = document.getElementById('abstractbox');
  let personorlandscape = 0;
  if (pb.checked == true) {
    personorlandscape = 0;
  } else if (lb.checked == true) {
    personorlandscape = 1;
  } else if (ab.checked == true) {
    personorlandscape = 2;
  }
  if (pb.checked == false && lb.checked == false && ab.checked == false) {
    personorlandscape = Math.floor(Math.random() * 3);
  }
  if (personorlandscape == 0) {
    resultString = generatePerson();
  } else if (personorlandscape == 1) {
    resultString = generateLandscape();
  }
  else if (personorlandscape == 2) {
    resultString = generateAbstract();
  }

  let styleamount = Math.floor(Math.random() * 3) + 1;
  for (let i = 0; i < styleamount; i++) {
    randomIndex = Math.floor(Math.random() * rdpompt.style.length);
    resultString = resultString + ', ' + rdpompt.style[randomIndex];
  }
  if (personorlandscape != 2) {
    randomIndex = Math.floor(Math.random() * rdpompt.weather.length);
    resultString = resultString + ', ' + rdpompt.weather[randomIndex];
    randomIndex = Math.floor(Math.random() * rdpompt.season.length);
    resultString = resultString + ', ' + rdpompt.season[randomIndex];
    randomIndex = Math.floor(Math.random() * rdpompt.view.length);
    resultString = resultString + ', ' + rdpompt.view[randomIndex];
    randomIndex = Math.floor(Math.random() * rdpompt.lighting.length);
    resultString = resultString + ', ' + rdpompt.lighting[randomIndex];
    randomIndex = Math.floor(Math.random() * rdpompt.artist.length);
    resultString = resultString + ' by ' + rdpompt.artist[randomIndex];
  }


  // write resultString to clipboard
  navigator.clipboard.writeText(resultString);
  return resultString;

}

function generatePerson() {
  let resultString = 'Create an image of ';
  randomIndex = Math.floor(Math.random() * rdpompt.ethnicity.length);
  resultString = resultString + ' ' + rdpompt.ethnicity[randomIndex];
  randomIndex = Math.floor(Math.random() * rdpompt.person.length);
  resultString = resultString + ' ' + rdpompt.person[randomIndex];

  randomIndex = Math.floor(Math.random() * rdpompt.action.length);
  resultString = resultString + ' ' + rdpompt.action[randomIndex];
  randomIndex = Math.floor(Math.random() * rdpompt.clothing.length);
  resultString = resultString + ' ' + rdpompt.clothing[randomIndex];
  randomIndex = Math.floor(Math.random() * rdpompt.attributes.length);
  resultString = resultString + ', ' + rdpompt.attributes[randomIndex];
  randomIndex = Math.floor(Math.random() * rdpompt.expression.length);
  resultString = resultString + ', ' + rdpompt.expression[randomIndex];
  randomIndex = Math.floor(Math.random() * rdpompt.location.length);
  resultString = resultString + ', at a ' + rdpompt.location[randomIndex];

  return resultString;
}
function generateLandscape() {
  let resultString = 'Create an image of ';
  randomIndex = Math.floor(Math.random() * rdpompt.landscape.length);
  resultString = resultString + rdpompt.landscape[randomIndex];

  return resultString;
}

function generateAbstract() {
  let resultString = 'Create an abstract image with ';
  let colors = Math.floor(Math.random() * 3) + 1;
  for (let i = 0; i < colors; i++) {
    randomIndex = Math.floor(Math.random() * rdpompt.color.length);
    resultString = resultString + ' ' + rdpompt.color[randomIndex];
  }
  randomIndex = Math.floor(Math.random() * rdpompt.abstract.length);
  resultString = resultString + ' ' + rdpompt.abstract[randomIndex];
  randomIndex = Math.floor(Math.random() * rdpompt.gradients.length);
  resultString = resultString + ' ' + rdpompt.gradients[randomIndex];

  return resultString;
}

