// Task 1

const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

var myAlphabet = document.getElementById('alphabet');

myAlphabet.innerHTML = `Алфавит: ${alphabet}`;

var massAlphabet = alphabet.split('');

console.log(massAlphabet);

var firstLine = massAlphabet.slice(0,12);
var secondLine = massAlphabet.slice(12,23);
var thirdLine = massAlphabet.slice(23,35);

var stringFirstLine = firstLine.join(" ");
var stringSecondLine = secondLine.join(" ");
var stringThirdLine = thirdLine.join(" ");

console.log(firstLine);
console.log(secondLine);
console.log(thirdLine);

var line1 = document.getElementById('line1');
var line2 = document.getElementById('line2');
var line3 = document.getElementById('line3');

line1.innerHTML = `Верхний ряд - ${stringFirstLine}`;
line2.innerHTML = `Средний ряд - ${stringSecondLine}`;
line3.innerHTML = `Нижний ряд - ${stringThirdLine}`;

var keyboard = [];

keyboard.push(firstLine);
keyboard.push(secondLine);
keyboard.push(thirdLine);

console.log(keyboard);

var hello = document.getElementById('hello');
var javascript = document.getElementById('javascript');
var trainer = document.getElementById('trainer');

var firstWord = keyboard[1][5] + keyboard[0][2] + keyboard[1][8] + keyboard[1][8] + keyboard[0][8];
var secondWord = keyboard[1][6] + keyboard[1][0] + keyboard[2][3] + keyboard[1][0] + keyboard[1][1] + keyboard[2][2] + keyboard[0][3] + keyboard[0][7] + keyboard[0][9] + keyboard[0][4];
var thirdtWord = keyboard[0][4] + keyboard[0][3] + keyboard[1][0] + keyboard[0][7] + keyboard[2][5] + keyboard[0][2] + keyboard[0][3];

hello.innerHTML = `Первое слово - ${firstWord}`;
javascript.innerHTML = `Второе слово - ${secondWord}`;
trainer.innerHTML = `Третье слово - ${thirdtWord}`;