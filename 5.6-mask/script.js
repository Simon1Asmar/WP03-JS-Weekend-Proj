function maskify(str){
  str = str.toString();
  return str.substring(str.length-4).padStart(str.length, "#");
}

console.log(maskify("1232144353902209"));
console.log(maskify("Simon Asmar"));
console.log(maskify(123456789));