import { initCanvas } from "./js/canvas.js";
import { config } from "./js/config.js";
import { runAnimation } from "./js/animation.js";
import { initPlayer } from "./js/Player.js";
import { state } from "./js/state.js";
import { updateInfo } from "./js/updateInfo.js";
import { updateReport } from "./js/updateReport.js";

const { canvas, ctx } = initCanvas(config.canvas.width, config.canvas.height);

initPlayer();

runAnimation(15, () => {
  if (state.isPause) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // render animation
  // const players = [r, p, s];
  const players = state.players;
  players.forEach((p) => {
    p.render();
    p.move();
  });

  updateInfo();

  updateReport();
  // update

  // next move

  // constrain
});
