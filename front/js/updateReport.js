import { config } from "./config.js";
import { initPlayer } from "./Player.js";
import { state } from "./state.js";

export async function updateReport() {
  const winner = getWinner();
  if (!!winner && state.totalSim > 0) {
    state.isPause = true;
    state.totalSim--;
    initPlayer();

    const sUrl = "http://localhost:5000/winner";
    const winnerObj = {
      rps: winner,
      time: Date.now(),
    };
    await fetch(sUrl, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(winnerObj),
    });
    state.isPause = false;
  }
  // console.log(winner);
}

function getWinner() {
  const rNo = state.rock.ins.length;
  const pNo = state.paper.ins.length;
  const sNo = state.scissor.ins.length;
  const wNo = config.total * 3;
  if (rNo === wNo) {
    return "rock";
  }
  if (pNo === wNo) {
    return "paper";
  }
  if (sNo === wNo) {
    return "scissor";
  }
}
