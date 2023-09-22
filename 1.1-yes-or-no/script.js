function yesOrNo(booleanVariable){
  return booleanVariable === true ? "Yes" : booleanVariable === false ? "No" : "Not a boolean variable";
}

console.log("yesOrNo(true):", yesOrNo(true));
console.log("yesOrNo(false):",yesOrNo(false));
console.log("yesOrNo(5):",yesOrNo(5));
