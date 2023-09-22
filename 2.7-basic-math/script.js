function basicOp(operation, value1, value2) {
  let output;
  switch (operation) {
    case "+":
      output = value1 + value2;
      break;
    case "-":
      output = value1 - value2;
      break;
    case "/":
      output = value1 / value2;
      break;
    case "*":
      output = value1 * value2;
      break;
    default:
      console.log("Not an operation");
  }
  return output;
}

console.log('basicOp("+", 6, 8);', basicOp("+", 6, 8))
console.log('basicOp("-", 6, 8);', basicOp("-", 6, 8))
console.log('basicOp(\'*\', 6, 8);', basicOp('*', 6, 8))
console.log('basicOp("/", 6, 8);', basicOp("/", 6, 8))
