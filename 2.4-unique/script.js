//It's guaranteed array.length >= 3
function findUnique(array){
 const firstnum = array[0];
 const secondNum = array[1];
 const thirdNum = array[2];
 return firstnum === secondNum ? thirdNum : firstnum === thirdNum ? secondNum : firstnum;
}

console.log('findUnique([ 1, 1, 1, 2, 1, 1 ])', findUnique([ 1, 1, 1, 2, 1, 1 ]));
console.log('findUnique([ 0, 0, 0.55, 0, 0 ])', findUnique([ 0, 0, 0.55, 0, 0 ]));