function abbreviate(str) {
  return (str.charAt(0) + "." + str.charAt(str.indexOf(" ") + 1)).toUpperCase();
}

console.log(abbreviate("Simon Asmar"));
