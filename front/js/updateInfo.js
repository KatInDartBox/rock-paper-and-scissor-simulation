import { state } from "./state.js";

const elmRock = document.querySelector("#rock .no");
const elmPaper = document.querySelector("#paper .no");
const elmScissor = document.querySelector("#scissor .no");

export function updateInfo() {
  const rNo = state.rock.ins.length;
  const pNo = state.paper.ins.length;
  const sNo = state.scissor.ins.length;

  setNo(elmRock, rNo);
  setNo(elmPaper, pNo);
  setNo(elmScissor, sNo);
}

function setNo(elm, no) {
  if (elm.innerText !== no.toString) elm.innerText = no;
}
