let keys = document.querySelectorAll('.key');
let display = document.querySelector('.display');
display.textContent = '';
var clear = document.querySelector('.clear');

clear.onclick = function () {
  display.textContent = '';
};

for (let key of keys) {
  key.onclick = function () {
      display.textContent += key.textContent;
  };
};