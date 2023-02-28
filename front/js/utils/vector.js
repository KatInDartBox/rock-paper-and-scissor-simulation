import { getRad, getDeg } from "./angle.js";

export class Vector {
  x = 0;
  y = 0;

  /**
   * @param{txy} xy
   * @param{tDegLen} degLen
   **/
  constructor(xy, degLen) {
    this.setProp(xy, degLen);
  }
  setProp({ x, y } = {}, { deg, len } = {}) {
    if (x !== undefined && y !== undefined) {
      this.x = x;
      this.y = y;
    }
    if (deg !== undefined && len !== undefined) {
      this.deg = deg;
      this.len = len;
    }
  }
  get len() {
    return Math.hypot(this.x, this.y);
  }
  len(length) {
    const rad = getRad(this.deg);
    this.x = length * Math.sin(rad);
    this.y = length * Math.cos(rad);
  }
  addLen(len) {
    const allLen = len + this.len;
    this.len(allLen);
  }
  get deg() {
    return getDeg(this.rad);
  }
  deg(deg) {
    this.rad(getRad(deg));
  }
  addDeg(deg) {
    this.addRad(getRad(deg));
  }
  get rad() {
    return Math.atan2(this.y, this.x);
  }
  rad(rad) {
    this.x = this.len * Math.sin(rad);
    this.y = this.len * Math.cos(rad);
  }
  addRad(rad) {
    const allRad = this.rad + rad;
    this.rad(allRad);
  }
  /** @param {Vector} v **/
  add(v) {
    this.x += v.x;
    this.y += v.y;
  }
  setXy(x, y) {
    this.x = x;
    this.y = y;
  }

  /** @param {Vector} v **/
  static Add(v) {
    return {
      x: this.x + v.x,
      y: this.y + v.y,
    };
  }
}

/**
 * @typedef {{x:number,y:number}} tPoint
 **/

/**
 * @typedef{Object} tDegLen
 * @property {number} deg
 * @property {number} len
 *
 **/
