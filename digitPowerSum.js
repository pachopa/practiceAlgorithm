
/*
  1. 겹치지 않는 숫자 길이가 제곱 숫자
  2. 한 자리 숫자를 각각 더한 숫자가  base number
  3. 제곱 숫자를 연산 후, 그 대상의 숫자와 숫자가 같은 값
  4. a = b^c
  5. a2= 512, a4 = 614656, a5 = ? // 정답  a5 : 1679616
*/
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


