const bigBang = Date.now()
let start = Date.now()
let frameNo = 0

/**
* @param {number} f framePerSec
* @param {(fNo:number,elapse:number)=>Void} onAnimate
*/
export function runAnimation(f, onAnimate) {
  const frameTimeOut = 1000 / f
  if (Date.now() - start >= frameTimeOut) {
    frameNo++
    start = Date.now()
    const elapse = Date.now() - bigBang
    onAnimate(frameNo,frameTimeOut, elapse)
  }
  window.requestAnimationFrame(() => runAnimation(f, onAnimate))
}
