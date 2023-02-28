
/**
 * @param {number} cx
 * @param {number} cy
 * @param {number} w
 * @param {number} h
 * @return {import('../type.js').tBbox}
 * */
export function getBbox(cx,cy,w,h){
  return {
    left:cx-w*0.5,
    right:cx+w*0.5,
    top:cy-h*0.5,
    bottom:cy+h*0.5,
    width:w,
    height:h,
    cx,cy
  }
}
