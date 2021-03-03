
exports.min = function min (array) {
  let result = Math.min.apply(null,array);
  if(array&&array.length!==0) {
    return result;
  } else {
    return 0;
  }
}

exports.max = function max (array) {
  let resultmax = Math.max.apply(null,array);
  if(array&&array.length!==0) {
    return resultmax;
  } else {
    return 0;
  }
}

exports.avg = function avg (array) {
  let sum = array.reduce((a, b) => a + b); 
  let avg = sum /array.length;
  if (array&&array.length!==0){
      return avg;
  } else {
    return 0;
  }
}