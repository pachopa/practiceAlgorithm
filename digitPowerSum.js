
function findAnswer() {
  for(var inputNum = 614657;  ;inputNum++) {
    var input = inputNum;
    var splitNum = input.toString().split("");
    var sum = 0;
    var result = splitNum.filter(function(value, index, arr) {
      //find a number which is used once
      //if a number used twice or more, then extract the number once
      sum += parseInt(value);
      return arr.indexOf(value) === index;
    });
    var a5 = findOutput(result, sum, input);
    if(a5) {
      return a5;
    } else{
      continue;
      //return a5;
    }
  }
}

function findOutput(result, sum, input) {
  //find a output with base number
  var startingNumber = 1;
  for(var multiply = 0; multiply < result.length; multiply++) {
    startingNumber = sum * startingNumber;
  }
  if(input === startingNumber) {
    return input;
  } else {
    startingNumber = 1;
    return false;
  }
}

console.log(findAnswer())


