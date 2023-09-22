function sumOfLowestNums(array){
  if(Array.isArray(array)){
    array.sort((a,b)=>a-b);
    return array[0] + array[1];
  }
}

const arrayOfNums = [19, 5, 42, 2, 77];
console.log(sumOfLowestNums(arrayOfNums));

const arrayOfNums2 = [110, 343445353, 3453445, 3453545353453];
console.log(sumOfLowestNums(arrayOfNums2));

