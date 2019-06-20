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
    name: getRandomElement(NAMES) + ' ' + getRandomElement(LAST_NAMES)
  };
}

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

for (var i = 0; i < WIZARDS_COUNT; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizzards[i].name;

  similarListElement.appendChild(wizardElement);
}
