// improved fibonacci

// function fibsRecursive(number) {
//   if (number === 1) return [0, 1];
//   let fibsArr = fibsRecursive(number - 1);
//   fibsArr.push(fibsArr[fibsArr.length - 1] + fibsArr[fibsArr.length - 2]);
//   return fibsArr;
// }

// my solution
function fibsRecursive(number) {
  if (number === 1) return [0,1];
  let secondLast = fibsRecursive(number - 1).length - 2,
    last = fibsRecursive(number - 1).length - 1;
  return fibsRecursive(number - 1).concat(
    fibsRecursive(number - 1)[secondLast] + fibsRecursive(number - 1)[last]
  );
}

console.log(fibsRecursive(10));
