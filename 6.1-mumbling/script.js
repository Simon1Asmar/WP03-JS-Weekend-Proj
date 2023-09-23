function accum(str) {
  let output = "";

  for (let i = 0; i < str.length; i++) {
    if(i>0){
      output+="-";
    }

    let currentLetter = str.charAt(i).toLowerCase();
    output += currentLetter.toUpperCase() + currentLetter.repeat(i);
  }

  return output;
}

console.log(accum("RqaEzty"));