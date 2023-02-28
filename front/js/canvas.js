import { state } from "./state.js";

/**
 * @param {number} w
 * @param {number} h
 **/
export function initCanvas(w, h) {
  /** @type {HTMLCanvasElement} */
  const canvas = document.querySelector("#cvMain");
  state.canvas = canvas;
  state.canvas.width = w;
  state.canvas.height = h;
  const ctx = state.canvas.getContext("2d");
  state.ctx = ctx;

  // event

  return { canvas: state.canvas, ctx: state.ctx };
}
