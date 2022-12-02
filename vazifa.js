'use strict';

// DOM

const weightDisplay = document.getElementById('weight--display');
const heightDispaly = document.getElementById('height--display');

const numberPad = document.getElementById('number--pad');
const resultBar = document.getElementById('result--bar');

const buttons = document.getElementsByClassName('cal__btn');

const AC = document.getElementById('AC');
const C = document.getElementById('CLEAR');
const GO = document.getElementById('GO');

const CLEAN = document.getElementById('clean');

///////////////////////////
// RESULT
// const weightResult = document.getElementById('weightResult');
// const heightResult = document.getElementById('heightResult');
const mainResult = document.getElementById('mainResult');

let rostamanOgrlikmi = true;
let weightArray = [];
let heightArray = [];

for (let btn = 0; btn < buttons.length; btn++) {
  buttons[btn].addEventListener('click', () => {
    if (rostamanOgrlikmi) {
      // biz arrayga element qo'shyapmiz
      console.log(buttons[btn].id);

      if (
        buttons[btn].id !== 'AC' &&
        buttons[btn].id !== 'CLEAR' &&
        buttons[btn].id !== 'GO'
      ) {
        weightArray.push(buttons[btn].textContent);

        // biz bu yerda weightDisplayga elementlarni tenglayapmniz (yoki chiqaryapmiz)
        weightDisplay.textContent = weightArray.join('');
      }
    } else {
      // agar bosgan tugmamiz AC, CLEAR yoki GO ga teng bolmasa menga elemenlarni display qilaver
      if (
        buttons[btn].id !== 'AC' &&
        buttons[btn].id !== 'CLEAR' &&
        buttons[btn].id !== 'GO'
      ) {
        heightArray.push(buttons[btn].textContent);
        heightDispaly.textContent = heightArray.join('');
      }
    }
  });
}

const weightBtn = document.getElementById('weight--btn');
const heightBtn = document.getElementById('height--btn');

weightBtn.addEventListener('click', () => {
  rostamanOgrlikmi = true;
  console.log(rostamanOgrlikmi);
  weightBtn.style.background = `aqua`;
  heightBtn.style.background = ``;
  numberPad.classList.remove('hidden');
  resultBar.classList.add('hidden');
});

heightBtn.addEventListener('click', () => {
  rostamanOgrlikmi = false;
  console.log(rostamanOgrlikmi);
  heightBtn.style.background = `aqua`;
  weightBtn.style.background = ``;
  numberPad.classList.remove('hidden');
  resultBar.classList.add('hidden');
});

// shift, pop, push, unshift

// const array = [1, 2, 5];

// array.shift();

// console.log(array);

AC.addEventListener('click', () => {
  console.log(weightArray, weightDisplay.textContent);
  weightArray = [];
  heightArray = [];
  weightDisplay.textContent = '0';
  heightDispaly.textContent = '0';

  console.log(weightArray);
});

C.addEventListener('click', () => {
  if (weightArray.length <= 1) {
    weightDisplay.textContent = '0';
    weightArray = [];
  } else {
    weightArray.pop();
    weightDisplay.textContent = weightArray.join('');
  }

  if (heightArray.length <= 1) {
    heightDispaly.textContent = '0';
    heightArray = [];
  } else {
    heightArray.pop();
    heightDispaly.textContent = heightArray.join('');
  }
});

GO.addEventListener('click', () => {
  // (boy * 2) / og'irlik
  const weight = Number(weightDisplay.textContent);
  const height = Number(heightDispaly.textContent);

  const calcBMI = weight / height ** 2;

  // weightResult.textContent = weightDisplay.textContent;

  // heightResult.textContent = heightDispaly.textContent;

  mainResult.textContent = calcBMI.toFixed(1);
  console.log(weight, height);
  console.log(calcBMI);

  numberPad.classList.add('hidden');
  resultBar.classList.remove('hidden');
});

CLEAN.addEventListener('click', () => {
  rostamanOgrlikmi = true;
  weightArray = [];
  heightArray = [];

  weightDisplay.textContent = '0';
  heightDispaly.textContent = '0';
  mainResult.textContent = '0'
});
