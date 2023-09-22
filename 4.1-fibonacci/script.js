function fibonacci(n) {
  let numA = 0;
  let numB = 1;

  if (n === 0) {
    return numA;
  } else {
    for (let i = 0; i < n; i++) {
      const sum = numA + numB;
      numA = numB;
      numB = sum;
    }

    return numA;
  }
}

console.log(fibonacci(10));
