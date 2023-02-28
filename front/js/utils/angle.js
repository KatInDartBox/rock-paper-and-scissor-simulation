/**
 * @param {number} deg
 **/
export function getRad(deg) {
  return (deg * Math.PI) / 180;
}
/**
 * @param {number} rad
 **/
export function getDeg(rad) {
  return (rad * 180) / Math.PI;
}

/**
 * @param {number} startX
 * @param {number} startY
 * @param {number} deg
 * @param {number} length
 * @return {{x:number,y:number}}
 **/
export function getEndPos(startX, startY, deg, length) {
  const rad = getRad(deg);
  const x = startX + Math.cos(rad) * length;
  const y = startY + Math.sin(rad) * length;

  return { x, y };
}
