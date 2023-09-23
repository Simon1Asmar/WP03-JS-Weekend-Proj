function toCamelCase(str){
  str = str.trim();
  let newStr = str.charAt(0);
  
  let nextIsCapital = false;

  for(let i=1; i<str.length; i++){
    if(str.charAt(i)==="-" || str.charAt(i)==="_"){
      nextIsCapital = true;
    } else if(nextIsCapital){
        newStr+=str.charAt(i).toUpperCase();
        nextIsCapital = false;
    } else {
      newStr+=str.charAt(i).toLowerCase();
    }
  }

  return newStr;
}

console.log(toCamelCase("hello-my-name-is-simon"));
console.log(toCamelCase("to_camel_case"));