'use strict';

var showSetup = document.querySelector('.setup');

document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = document.querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');

var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];


var WIZARDS_COUNT = 4;

function getRandom(max) {
  return Math.floor(Math.random() * max);
}

function getRandomElement(array) {
  return array[getRandom(array.length - 1)];
}

var insertWizzardHtml = function (wizzards) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < WIZARDS_COUNT; i++) {
    fragment.appendChild(renderWizard(wizzards[i]));
  }
  similarListElement.appendChild(fragment);
};

var renderWizard = function (wizzard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizzard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizzard.coat;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizzard.eyes;
  return wizardElement;
};

var getWizzards = function () {
  var wizzards = [];
  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

  for (var i = 0; i < WIZARDS_COUNT; i++) {
    wizzards[i] = {
      name: getRandomElement(NAMES) + ' ' + getRandomElement(LAST_NAMES),
      coat: getRandomElement(coatColor),
      eyes: getRandomElement(eyesColor)
    };
  }
  return wizzards;
};

insertWizzardHtml(getWizzards());

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var onPopupEscPress = function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function() {
  openPopup();
});

setupOpen.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function() {
  closePopup();
});

setupClose.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

wizardCoat.addEventListener('click', function(evt) {
  wizardCoat.style.fill = getRandomElement(COAT_COLORS);
});

wizardEyes.addEventListener('click', function(evt) {
  wizardEyes.style.fill = getRandomElement(EYES_COLORS);
});

wizardFireball.addEventListener('click', function(evt) {
  wizardFireball.style.backgroundColor = getRandomElement(FIREBALL_COLORS);
});

