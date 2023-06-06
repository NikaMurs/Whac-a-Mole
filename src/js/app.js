import { Game } from "./game/game";

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game(document.querySelector(".game"));
  document.querySelector('.gameButton').addEventListener('click', ()=>{
    game.start()
  })
  
});
