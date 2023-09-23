function isIsogram(str) {
  str = str.split("").sort().join("").toLowerCase();

  for (let i = 0; i < str.length; i++) {
    const currentChar = str.charAt(i);
    if (str.indexOf(currentChar) != str.lastIndexOf(currentChar)) {
      return false;
    }
  }

  return true;
}

console.log('isIsogram("asmar")', isIsogram("asmar"));
console.log('isIsogram("simon")', isIsogram("simon"));
console.log('isIsogram("moOse")', isIsogram("moOse"));
console.log('isIsogram("Dermatoglyphics")', isIsogram("Dermatoglyphics"));
