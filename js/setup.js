'use strict';

var showSetup = document.querySelector('.setup');
showSetup.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var NAMES = ['Иван',
             'Хуан Себастьян',
             'Мария',
             'Кристоф',
             'Виктор',
             'Юлия',
             'Люпита',
             'Вашингтон'
            ];

var LAST_NAMES = ['да Марья',
                  'Верон',
                  'Мирабелла',
                  'Вальц',
                  'Онопко',
                  'Топольницкая',
                  'Нионго',
                  'Ирвинг'
                 ];

var coatColor = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

function getRandom(max) {
  return Math.floor(Math.random() * max);
}

function getRandomElement(array) {
  return array[getRandom(array.length - 1)];
}

var WIZARDS_COUNT = 4;

var wizzards = [];

for (var i = 0; i < WIZARDS_COUNT; i++) {
  wizzards[i] = {
    name: getRandomElement(NAMES) + ' ' + getRandomElement(LAST_NAMES),
    coat: getRandomElement(coatColor),
    eyes: getRandomElement(eyesColor)
  };
}

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizzards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizzards[i].coat;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizzards[i].eyes;

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < WIZARDS_COUNT; i++) {
  fragment.appendChild(renderWizard(wizzards[i]));
}
similarListElement.appendChild(fragment);
