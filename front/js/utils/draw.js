import { state } from "../state.js";

/**
 * @type {import('../type.js').tBbox} box
 **/
export function fillRect(box, color, ctx) {
  ctx = getCtx(ctx);
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.rect(box.left, box.top, box.width, box.height);
  ctx.fill();
  ctx.closePath();
}

/**
 *
 * @param {import('../type.js').tPoint} start
 * @param {import('../type.js').tPoint} end
 * @param {number} width
 * @param {string} color
 * @param {CanvasRenderingContext2D} ctx
 */
export function strokeLine(start, end, width, color, ctx) {
  ctx = getCtx(ctx);
  ctx.lineWidth = width;
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(start.x, start.y);
  ctx.lineTo(end.x, end.y);
  ctx.stroke();
  ctx.closePath();
}

/**
 *
 * @param {import('../type.js').tPoint} start
 * @param {import('../type.js').tPoint} end
 * @param {number} width
 * @param {string} color
 * @param {CanvasRenderingContext2D} ctx
 */
export function strokeDashLine(start, end, width, color, dash = [10, 7, 2, 7], ctx) {
  ctx = getCtx(ctx);
  ctx.setLineDash(dash);
  strokeLine(start, end, width, color, ctx);
  ctx.setLineDash([]);
}

/**
 *
 * @param {import('../type').tPoint} center
 * @param {*} radius
 * @param {*} color
 * @param {*} ctx
 */
export function fillCircle(center, radius, color, ctx) {
  const c = getCtx(ctx);
  c.beginPath();
  c.fillStyle = color;
  c.arc(center.x, center.y, radius, 0, Math.PI * 2);
  c.fill();
  c.closePath();
}

/**
 *
 * @param {string} text
 * @param {number} x
 * @param {number} y
 * @param {string} [color]
 * @param {string} [size]
 * @param {string} [font]
 * @param {*} ctx
 */
export function fillText(text, x, y, color, size, font, ctx) {
  const c = getCtx(ctx);
  font = font || "Arial";
  color = color || "#cecece";
  size = size || "12px";
  c.textAlign = "center";
  c.textBaseline = "middle";
  c.font = `${size} ${font}`;
  c.fillStyle = color;
  c.fillText(text, x, y);
}

/**
 *
 * @param {CanvasRenderingContext2D} c
 * @returns {CanvasRenderingContext2D}
 */
function getCtx(c) {
  if (!c) c = state.ctx;
  return c;
}
