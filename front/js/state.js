import { config } from "./config.js";

export const state = {
  /** @type {HTMLCanvasElement} */
  canvas: undefined,
  /** @type {CanvasRenderingContext2D} */
  ctx: undefined,

  rock: {
    no: config.total,
    /** @type {import("./Player.js").Player[]} */
    ins: [],
  },
  paper: {
    no: config.total,
    /** @type {import("./Player.js").Player[]} */
    ins: [],
  },
  scissor: {
    no: config.total,
    /** @type {import("./Player.js").Player[]} */
    ins: [],
  },
  /** @type {import("./Player.js").Player[]} */
  get players() {
    return this.rock.ins.concat(this.paper.ins).concat(this.scissor.ins);
  },
  get width() {
    return this.canvas.width;
  },
  get height() {
    return this.canvas.height;
  },
  totalSim: config.totalSim,
  isPause: false,
};
