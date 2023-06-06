import "./game.css";
import goblinImg from "./img/goblin.png";

export class Game {
  constructor(gameField) {
    this.gameField = gameField;
    this.scopesFiels = gameField.querySelector('.scopes')
    this.columns = this.gameField.querySelectorAll(".fieldColumn");
    this.column;
    this.cell;
    this.img = document.createElement("img");
    this.img.src = goblinImg;
    this.intervalID;
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
      this.changePosition();
    })
  }

  changePosition() {
     this.intervalID = setInterval(function wrapper(){
       this.newPosition()
       return wrapper
     }.bind(this)().bind(this), 1000)
  }




  start() {
    this.changePosition()
    this.clickListener()
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
