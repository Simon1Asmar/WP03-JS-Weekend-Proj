function shortestWordLength(str){
  const arrayOfWords = str.split(" ");

  let shortestWordLength = arrayOfWords[0].length;

  for (word in arrayOfWords){
    if(arrayOfWords[word].length < shortestWordLength){
      shortestWordLength = arrayOfWords[word].length;
    }
  }

  return shortestWordLength;
}

console.log('shortestWordLength("hello my name is Simon")', shortestWordLength("hello my name is Simon"));
console.log('shortestWordLength("hello")', shortestWordLength("hello"));