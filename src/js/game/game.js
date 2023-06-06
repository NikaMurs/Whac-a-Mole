import "./game.css";
import goblinImg from "./img/goblin.png";


export class Game {
  constructor(gameField) {
    this.gameField = gameField;
    this.goodPoints = 0;
    this.badPoints = -1;
    this.gameStart = false;
    this.columns = this.gameField.querySelectorAll(".fieldColumn");
    this.column;
    this.cell;
    this.img = document.createElement("img");
    this.img.src = goblinImg;
    this.intervalID;
  }

  deleteLast() {
    this.columns[this.column]
      .querySelectorAll(".fieldCell")
      [this.cell].querySelector("img")
      .remove();
  }

  newPosition() {
    let newRandomColumn = getRandomInt(4);
    let newRandomCell = getRandomInt(4);

    while (newRandomColumn == this.column && newRandomCell == this.cell) {
      newRandomColumn = getRandomInt(4);
      newRandomCell = getRandomInt(4);
    }

    this.column = newRandomColumn;
    this.cell = newRandomCell;

    this.columns[this.column]
      .querySelectorAll(".fieldCell")
    [this.cell].appendChild(this.img);
  }

  clickListener() {
    this.img.addEventListener('click', () => {
      clearInterval(this.intervalID);
      this.goodPoints++
      this.changePosition(true);
    })
  }

  changePosition(isClick) {
    if (this.gameStart){
      this.intervalID = setInterval(function wrapper() {
        if (!isClick) {
          this.badPoints++
        }
        if (this.badPoints === 5){
          alert(`Набрано очков: ${this.goodPoints}`)
          clearInterval(this.intervalID)
          this.gameStart = false
        }
        isClick = false;
        this.newPosition();
        if (!this.gameStart){
          this.deleteLast()
        }
        return wrapper
      }.bind(this)().bind(this), 1000)
    }
  }

  start() {
    this.goodPoints = 0;
    this.badPoints = -1;
    this.gameStart = true;
    this.changePosition(false)
    this.clickListener()
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
