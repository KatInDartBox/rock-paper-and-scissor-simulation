import { config } from "./config.js";
import { state } from "./state.js";
import { getBbox } from "./utils/bbox.js";
import { getDistance } from "./utils/collision.js";
import { fillCircle, fillText } from "./utils/draw.js";
import { pick, rnd } from "./utils/math.js";

export class Player {
  /** @type {import('./type.js').tPlayerType} */
  type;

  /**
   *
   * @param {number} x
   * @param {number} y
   * @param {import('./type.js').tPlayerType} type
   */
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.radius = config.radius;
    this.speed = rnd.int(2, 4);
    this.id = Math.floor(Math.random() * 10 ** 15);
  }
  get color() {
    return config.color[this.type];
  }
  render() {
    fillCircle(this, this.radius, this.color);
    fillText(
      this.type.slice(0, 1).toLocaleLowerCase(),
      this.x,
      this.y, //
      "#000000",
      "12px"
    );
  }
  move() {
    const opts = getOpponents(this);

    if (opts.length > 0) {
      const pickOpt = pickPlayer(this, opts);
      moveTo(this, pickOpt);
      const soulmate = isCollide(this, opts);
      if (soulmate) {
        const soulmateType = soulmate.type;
        soulmate.type = this.type;

        state[soulmateType].ins = state[soulmateType].ins.filter(
          (
            p //
          ) => p.id !== soulmate.id
        );
        state[this.type].ins.push(soulmate);
      }
    }
    constrain(this);
  }
}

function pickPlayer(me, players) {
  // return pickRandomPlayer(players);

  return pickNearOpt(me, players);
}
function pickRandomPlayer(players) {
  return pick(players);
}

/**
 *
 * @param {Player} me
 * @param {Player[]} players
 */
function pickNearOpt(me, players) {
  // return pick(players);

  if (players.length === 0) return;
  let p0 = players[0];
  const others = players.slice(1);
  let dtp = getDistance(me, p0);

  for (let i = 0; i < others.length; i++) {
    const p = others[i];
    const d = getDistance(me, p);
    if (d <= dtp) {
      dtp = d;
      p0 = p;
    }
  }
  return p0;
}

/** @param {Player} me */
function constrain(me) {
  const box = getBbox(me.x, me.y, me.radius * 2, me.radius * 2);
  if (box.left <= 0) {
    me.x = me.radius;
  }
  if (box.right >= state.width) {
    me.x = state.width - me.radius;
  }
  if (box.top <= 0) {
    me.y = me.radius;
  }
  if (box.bottom >= state.height) {
    me.y = state.height - me.radius;
  }
}

function moveTo(me, soulmate) {
  const angle = Math.atan2(soulmate.y - me.y, soulmate.x - me.x);

  me.x += me.speed * Math.cos(angle);
  me.y += me.speed * Math.sin(angle);
}

export function initPlayer() {
  const r = config.radius;
  const canvas = state.canvas;

  state.rock.ins = [];
  state.paper.ins = [];
  state.scissor.ins = [];

  for (let i = 0; i < config.total; i++) {
    const rock = new Player(
      rnd.int(r, canvas.width - r),
      rnd.int(r, canvas.height - r), //
      "rock"
    );
    const paper = new Player(
      rnd.int(r, canvas.width - r),
      rnd.int(r, canvas.height - r), //
      "paper"
    );
    const scissor = new Player(
      rnd.int(r, canvas.width - r),
      rnd.int(r, canvas.height - r), //
      "scissor"
    );
    state.rock.ins.push(rock);
    state.paper.ins.push(paper);
    state.scissor.ins.push(scissor);
  }
}

/**
 *
 * @param {Player} me
 * @param {Player[]} players
 */
function isCollide(me, players) {
  let dtp = me.radius * 2;

  for (let i = 0; i < players.length; i++) {
    const p = players[i];
    const d = getDistance(me, p);
    if (d <= dtp) {
      return p;
    }
  }
}

function getOpponents(me) {
  switch (me.type) {
    case "rock":
      return state.scissor.ins;
    case "paper":
      return state.rock.ins;
    case "scissor":
      return state.paper.ins;

    default:
      return [];
  }
}
