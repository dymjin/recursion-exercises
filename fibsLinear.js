function fibsLinear(number) {
  let fibsArr = [];
  if (number === 0) return [0];
  if (number === 1) return [0, 1];
  for (let i = 0; i < number; i++) {
    if (fibsArr.length < 2) {
      fibsArr.push(i);
    } else {
      fibsArr.push(fibsArr[i - 1] + fibsArr[i - 2]);
    }
  }
  return fibsArr;
}

console.log(fibsLinear(3));
