function findNextSquare(num) {
  const squareRootOfNum = Math.sqrt(num);
  
  if (checkIfInt(squareRootOfNum)) {
    return Math.pow(squareRootOfNum + 1, 2);
  } else {
    return -1;
  }
}

function checkIfInt(num) {
  const isInt = num % 1 === 0 ? true : false;
  return isInt;
}

console.log('findNextSquare(121)', findNextSquare(121));
console.log('findNextSquare(625)', findNextSquare(625));
console.log('findNextSquare(114)', findNextSquare(114));