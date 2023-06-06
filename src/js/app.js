import { Game } from "./game/game";

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game(document.querySelector(".game"));
  let gameStart = false;

  window.game = game;

  game.start()
});
