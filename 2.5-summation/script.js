function summation(num){
  let sum = 0;

  if(num === 1){
    sum = num;
  } else {
    for(let i = 1; i<=num; i++){
      sum += i;
    }
  }

  return sum;
}

console.log('summation(8)', summation(8));
console.log('summation(2)', summation(2));
console.log('summation(25)', summation(25));