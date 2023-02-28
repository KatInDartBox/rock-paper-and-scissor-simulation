/**
 *
 * @param {import('../type.js').tCircle} p1
 * @param {import('../type.js').tCircle} p2
 */
export function is2circleCollide(p1, p2) {
  const d = getDistance(p1, p2);

  return d <= p1.radius + p2.radius;
}
/**
 *
 * @param {import("../type.js").tPoint} p1
 * @param {import("../type.js").tPoint} p2
 * @returns
 */
export function getDistance(p1, p2) {
  const dy = p2.y - p1.y;
  const dx = p2.x - p1.x;
  return Math.sqrt(dy * dy + dx * dx);
}
