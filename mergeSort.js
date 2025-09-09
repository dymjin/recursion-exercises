// my function (doesn't work)
function mergeSort(arr) {
  const mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, arr.length);

  if (left.length > 1) mergeSort(left);
  if (right.length > 1) mergeSort(right);

  let copy = arr.slice();
  let leftIDX = 0,
    rightIDX = 0,
    arrIDX = 0;

  while (leftIDX <= left.length && rightIDX <= right.length) {
    if (left[leftIDX] > right[rightIDX]) {
      copy[arrIDX] = right[rightIDX];
      rightIDX += 1;
    } else {
      copy[arrIDX] = left[leftIDX];
      leftIDX += 1;
    }
    arrIDX += 1;
  }

  return copy;
}

// working mergesort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  let sortedArr = [];
  let leftIDX = 0;
  let rightIDX = 0;

  while (leftIDX < sortedLeft.length && rightIDX < sortedRight.length) {
    if (sortedLeft[leftIDX] > sortedRight[rightIDX]) {
      sortedArr.push(sortedRight[rightIDX]);
      rightIDX++;
    } else {
      sortedArr.push(sortedLeft[leftIDX]);
      leftIDX++;
    }
  }
  return [
    ...sortedArr,
    ...sortedLeft.slice(leftIDX),
    ...sortedRight.slice(rightIDX),
  ];
}

console.log(mergeSort([1, 9, 3, 4, 5, 6, 7, 8, 2, 9]));
