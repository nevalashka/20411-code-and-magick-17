'use strict';
var CLOUD_WIDTH = 430;
var CLOUD_HEIGHT = 280;
var MAX_BAR_HEIGHT = 150;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var FONT_GAP = 50;
var GAP = 10;
var TEXT_WIDTH = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color; // почему так?
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT); // почему x и y?
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getRandomColor = function () {
  var randomColor = Math.random().toFixed(2);
  return 'rgba(0, 0, 255, ' + randomColor + ')';
};

var drawText = function (ctx, text, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
};

var drawRect = function (ctx, x, y, height, width, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, height, width);
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, FONT_GAP - CLOUD_Y);
  ctx.fillText('Список результатов: ', CLOUD_X + GAP * 2, FONT_GAP + CLOUD_Y);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var pointX = CLOUD_X + FONT_GAP + (FONT_GAP + TEXT_WIDTH) * i;
    var pointY = (MAX_BAR_HEIGHT - MAX_BAR_HEIGHT * times[i]) / maxTime;
    var heightColumn = CLOUD_Y + FONT_GAP * 5;
    var color = players[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : getRandomColor();
    drawText(ctx, Math.round(times[i]), pointX, heightColumn + pointY - GAP - CLOUD_Y, color);
    drawText(ctx, players[i], pointX, heightColumn + GAP, color);
    drawRect(ctx, pointX, heightColumn - GAP, TEXT_WIDTH, pointY, color);
  }
};
