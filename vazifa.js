'use strict';

// DOM

const weightBtn = document.getElementById('weight--btn');
const heightBtn = document.getElementById('height--btn');

const weightDisplay = document.getElementById('weight--display');
const heightDispaly = document.getElementById('height--display');

const numberPad = document.getElementById('number--pad');
const buttons = document.getElementsByClassName('cal__btn');

const AC = document.getElementById('AC');
const C = document.getElementById('CLEAR');
const GO = document.getElementById('GO');

const mainResult = document.getElementById('mainResult');
const resultBar = document.getElementById('result--bar');
const CLEAN = document.getElementById('clean');

///////////////////////////
// RESULT

let rostamanOgrlikmi = true;
let weightArray = [];
let heightArray = [];

for (let btn = 0; btn < buttons.length; btn++) {
  const notThisButtons =
    buttons[btn].id !== 'AC' &&
    buttons[btn].id !== 'CLEAR' &&
    buttons[btn].id !== 'GO';

  buttons[btn].addEventListener('click', () => {
    if (rostamanOgrlikmi) {
      // biz arrayga element qo'shyapmiz

      if (notThisButtons && weightArray.length <= 3) {
        weightArray.push(buttons[btn].textContent);

        weightDisplay.textContent = weightArray.join('');
      }
    } else {
      // agar bosgan tugmamiz AC, CLEAR yoki GO ga teng bolmasa menga elemenlarni display qilaver
      if (notThisButtons && heightArray.length <= 3) {
        heightArray.push(buttons[btn].textContent);
        heightDispaly.textContent = heightArray.join('');
      }
    }
  });
}

// universal functions
const openNumPad = (ogirlikmi, rang) => {
  rostamanOgrlikmi = ogirlikmi;
  if (ogirlikmi) {
    weightBtn.style.background = rang;
    heightBtn.style.background = ``;
  } else {
    weightBtn.style.background = ``;
    heightBtn.style.background = rang;
  }
  numberPad.classList.remove('hidden');
  resultBar.classList.add('hidden');
};

const clearAll = () => {
  weightArray = [];
  heightArray = [];
  weightDisplay.textContent = '0';
  heightDispaly.textContent = '0';
};

const clearByOne = (array, display) => {
  array.pop();
  // ['7','7','7','7']
  display.textContent = array.join(''); // [] = ''

  if (array.length === 0) {
    display.textContent = '0';
  }
};

weightBtn.addEventListener('click', () => {
  openNumPad(true, 'aqua');
});

heightBtn.addEventListener('click', () => {
  openNumPad(false, 'aqua');
});

AC.addEventListener('click', () => {
  clearAll();
});

C.addEventListener('click', () => {
  if (rostamanOgrlikmi) {
    clearByOne(weightArray, weightDisplay);
  } else {
    clearByOne(heightArray, heightDispaly);
  }
});

GO.addEventListener('click', () => {
  // (boy * 2) / og'irlik
  const weight = Number(weightDisplay.textContent);
  const height = Number(heightDispaly.textContent);

  const calcBMI = weight / height ** 2;

  mainResult.textContent = calcBMI.toFixed(1);

  numberPad.classList.add('hidden');
  resultBar.classList.remove('hidden');
});

CLEAN.addEventListener('click', () => {
  rostamanOgrlikmi = true;

  clearAll();
  mainResult.textContent = '0';
});
