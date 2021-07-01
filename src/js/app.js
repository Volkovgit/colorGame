// import colors from "./colors.js";

// const color1 = document.querySelector(".color1");
// const color2 = document.querySelector(".color2");
// const scope_div = document.querySelector(".scope");
// const multiplier_div = document.querySelector(".multiplier");
// const correct_answer_div = document.querySelector('.CorrectAnswer');


// const btn_start = document.querySelector(".JustClick");
// const true_btn = document.querySelector(".true");
// const false_btn = document.querySelector(".false");

// let scope = 0;
// let multiplier = 1;
// let count_correct_answer = 0;

// btn_start.addEventListener("click", () => {
//   setNewColor(color1, getRandomColor(), getRandomColorName());
//   setNewColor(color2, getRandomColor(), getRandomColorName());
//   btn_start.disabled = true;
//   true_btn.disabled = false;
//   false_btn.disabled = false;
// });


// true_btn.disabled = true;
// false_btn.disabled = true;

// multiplier_div.textContent = multiplier;
// scope_div.textContent = scope;
// correct_answer_div.textContent = count_correct_answer;

// true_btn.addEventListener("click", () => {
//   let color_one = getColorByName(getInfo(color1).text); // Получаю первый цвет
//   let color_two = getInfo(color2).color; // Получаю второй цвет
//   checkAnswer(true, checkColors(color_one, color_two));
//   scope_div.textContent = scope;
//   setNewColor(color1, getRandomColor(), getRandomColorName());
//   setNewColor(color2, getRandomColor(), getRandomColorName());
// });

// false_btn.addEventListener("click", () => {
//   let color_one = getColorByName(getInfo(color1).text); // Получаю первый цвет
//   let color_two = getInfo(color2).color; // Получаю второй цвет
//   checkAnswer(false, checkColors(color_one, color_two));
//   scope_div.textContent = scope;
//   setNewColor(color1, getRandomColor(), getRandomColorName());
//   setNewColor(color2, getRandomColor(), getRandomColorName());
// });

// function getRandomColor() {
//   let color_number = Math.round(Math.random() * (3 - 0) + 0);
//   return colors[color_number].color;
// }

// function getRandomColorName() {
//   let color_number = Math.round(Math.random() * (3 - 0) + 0);
//   return colors[color_number].name;
// }

// function setNewColor(obj, newColor, newColorName) {
//   obj.style.color = newColor;
//   obj.textContent = newColorName;
// }

// function getInfo(obj) {
//   return {
//     id: obj.id,
//     text: obj.textContent,
//     color: obj.style.color,
//   };
// }

// function getColorByName(colorName) {
//   let [color] = colors.filter((color) => color.name === colorName);
//   return color.color;
// }

// function checkColors(colorOne, colorTwo) {
//   if (colorOne === colorTwo) return true;
//   return false;
// }

// function checkAnswer(answer, response) {
//   if (answer === response) {
//     scope += 100 * multiplier;
//     countCorrectAnswer();
//   } else {
//     setZero();
//   }
// }


// function countCorrectAnswer(){
//   count_correct_answer+=1;
//   correct_answer_div.textContent = count_correct_answer;
//   if(count_correct_answer>=5){
//     multiplier+=1;
//     multiplier_div.textContent = multiplier;
//     count_correct_answer = 0;
//   }
// }

// function setZero(){
//   count_correct_answer = 0;
//   multiplier = 1;
//   scope = 0;
//   multiplier_div.textContent = multiplier;
// }


import game from "./myGame.js";


game.initApp();
// game.start();
