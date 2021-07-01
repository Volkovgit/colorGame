import colors from "./colors.js";

class ColorGame {
  scope = 0;
  multiplier = 1;
  count_correct_answer = 0;

  TIMEOUT = 60000;

  constructor(colors) {
    //Вывод информации
    this.color_text_1 = document.querySelector(".color1");
    this.color_text_2 = document.querySelector(".color2");
    this.scope_div = document.querySelector(".scope");
    this.multiplier_div = document.querySelector(".multiplier");
    // this.correct_answer_div = document.querySelector(".CorrectAnswer");
    this.time_div = document.querySelector(".timeout");

    //Кнопки
    this.btn_start = document.querySelector(".JustClick");
    this.btn_education = document.querySelector(".education");
    this.true_btn = document.querySelector(".true");
    this.false_btn = document.querySelector(".false");

    this.colors = colors;
  }

  initApp() {
    this.multiplier_div.textContent = this.multiplier;
    this.scope_div.textContent = this.scope;
    // this.correct_answer_div.textContent = this.count_correct_answer;
    this.time_div.textContent = this.formatTime(this.TIMEOUT);
    this.btn_start.disabled = false;
    this.true_btn.disabled = true;
    this.false_btn.disabled = true;

    this.btn_start.addEventListener("click", () => {
      this.start();
    });
    this.btn_education.addEventListener("click", () => {
      this.education();
    });
  }

  start() {
    this.btn_education.disabled = true;


    this.setNewColor(
      this.color_text_1,
      this.getRandomColor(),
      this.getRandomColorName()
    );
    this.setNewColor(
      this.color_text_2,
      this.getRandomColor(),
      this.getRandomColorName()
    );
    this.btn_start.disabled = true;
    this.true_btn.disabled = false;
    this.false_btn.disabled = false;

    const start_game = Date.now();

    const interval = setInterval(() => {
      const delta = Date.now() - start_game;
      this.time_div.textContent = this.formatTime(this.TIMEOUT - delta);
    }, 1000);

    const timeout = setTimeout(() => {
      this.btn_start.disabled = false;
      this.true_btn.disabled = true;
      this.false_btn.disabled = true;
      this.time_div.textContent = this.formatTime(this.TIMEOUT);
      clearInterval(interval);
      clearTimeout(timeout);
    }, this.TIMEOUT);

    this.true_btn.addEventListener("click", () => {
      let color_one = this.getColorByName(this.getInfo(this.color_text_1).text); // Получаю первый цвет
      let color_two = this.getInfo(this.color_text_2).color; // Получаю второй цвет
      this.checkAnswer(true, this.checkColors(color_one, color_two));
      this.scope_div.textContent = this.scope;
      this.setNewColor(
        this.color_text_1,
        this.getRandomColor(),
        this.getRandomColorName()
      );
      this.setNewColor(
        this.color_text_2,
        this.getRandomColor(),
        this.getRandomColorName()
      );
    });

    this.false_btn.addEventListener("click", () => {
      let color_one = this.getColorByName(this.getInfo(this.color_text_1).text); // Получаю первый цвет
      let color_two = this.getInfo(this.color_text_2).color; // Получаю второй цвет
      this.checkAnswer(false, this.checkColors(color_one, color_two));
      this.scope_div.textContent = this.scope;
      this.setNewColor(
        this.color_text_1,
        this.getRandomColor(),
        this.getRandomColorName()
      );
      this.setNewColor(
        this.color_text_2,
        this.getRandomColor(),
        this.getRandomColorName()
      );
    });
  }

  education() {
    this.btn_start.disabled = true;
    this.btn_education = true;
    this.true_btn.disabled = true;
    this.false_btn.disabled = true;

    this.setNewColor(this.color_text_1, "red", "Red");
    this.setNewColor(this.color_text_2, "red", "Green");

    const promise1 = new Promise((resolve, reject) => {
      this.true_btn.disabled = false;
      this.true_btn.addEventListener("click", () => {
        resolve();
      });
    }).then((resp) => {
      this.false_btn.disabled = false;
      this.true_btn.disabled = true;
      this.setNewColor(this.color_text_1, "black", "Green");
      this.setNewColor(this.color_text_2, "blue", "Red");
      this.false_btn.addEventListener('click',() => {
        this.initApp();
      });
    })
  }

  formatTime(ms) {
    return Number.parseFloat(ms / 1000).toFixed(0);
  }

  getRandomColor() {
    let color_number = Math.round(Math.random() * (3 - 0) + 0);
    return this.colors[color_number].color;
  }

  getRandomColorName() {
    let color_number = Math.round(Math.random() * (3 - 0) + 0);
    return this.colors[color_number].name;
  }

  setNewColor(obj, newColor, newColorName) {
    obj.style.color = newColor;
    obj.textContent = newColorName;
  }

  getInfo(obj) {
    return {
      id: obj.id,
      text: obj.textContent,
      color: obj.style.color,
    };
  }

  getColorByName(colorName) {
    let [color] = this.colors.filter((color) => color.name === colorName);
    return color.color;
  }

  checkColors(colorOne, colorTwo) {
    if (colorOne === colorTwo) return true;
    return false;
  }

  checkAnswer(answer, response) {
    if (answer === response) {
      this.scope += 100 * this.multiplier;
      this.countCorrectAnswer();
    } else {
      this.setZero();
    }
  }

  countCorrectAnswer() {
    this.count_correct_answer += 1;
    // this.correct_answer_div.textContent = this.count_correct_answer;
    if (this.count_correct_answer >= 5) {
      this.multiplier += 1;
      this.multiplier_div.textContent = this.multiplier;
      this.count_correct_answer = 0;
    }
  }

  setZero() {
    this.count_correct_answer = 0;
    this.multiplier = 1;
    this.scope = 0;
    this.multiplier_div.textContent = this.multiplier;
  }
}

const game = new ColorGame(colors);

export default game;
