// takes a year as a parameter and returns the centruy of the given year
function centuryFromYear(year) {
  //divides the year by 100 and
  // then does Math.ceil to round it up to the higher integer if it's float
  return Math.ceil(year / 100);
}

console.log("centuryFromYear(1705)", centuryFromYear(1705));
console.log("centuryFromYear(1900)", centuryFromYear(1900));
console.log("centuryFromYear(1601)", centuryFromYear(1601));
console.log("centuryFromYear(2000)", centuryFromYear(2000));
