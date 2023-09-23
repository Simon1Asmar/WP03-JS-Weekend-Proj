//This function counts duplicates using an object and checking in a letter appeared before
function countDuplicates1(str){
  const letterCounter = {
    numOfDuplicates: 0,
  }

  str = str.toLowerCase();
  for(let i=0; i<str.length; i++){
    if(letterCounter[str.charAt(i)] === undefined){
      letterCounter[str.charAt(i)] = 1;
    } else {
      letterCounter[str.charAt(i)]++;

      if(letterCounter[str.charAt(i)] === 2){
        letterCounter.numOfDuplicates++;
      }
    }
  }

  return letterCounter.numOfDuplicates;
}

//This function counts duplicates by sorting a string alphabetically and checking if indexOf and lastIndexOf a char
function countDuplicates2(str){
  str = str.toLowerCase();
  str = str.split("").sort().join(""); //turns string into array, sorts it alphabetically, then joins it back into a string

  let numOfDuplicates = 0;

  for(let i = 0; i<str.length; i++){
    const currentChar = str.charAt(i);
    if(!(str.indexOf(currentChar)===str.lastIndexOf(currentChar))){
      numOfDuplicates++;
      i=str.lastIndexOf(currentChar);
    }
  }

  return numOfDuplicates;
}


console.log('countDuplicates1("aA11")', countDuplicates1("aA11"));

console.log('countDuplicates2("Indivisibilities")', countDuplicates2("Indivisibilities"));