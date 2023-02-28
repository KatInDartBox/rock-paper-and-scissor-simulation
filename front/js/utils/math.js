export const rnd = {
  random() {
    return Math.random();
  },
  float(n1, n2) {
    return n1 + (n2 - n1) * Math.random();
  },
  int(n1, n2) {
    return Math.floor(n1 + (n2 - n1 + 1) * Math.random());
  },
};
/** @param {any[]} arr */
export function pick(arr) {
  const range = arr.length - 1;

  return arr[rnd.int(0, range)];
}
