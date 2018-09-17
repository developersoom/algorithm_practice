function solution(s) {
    let answer = 0;
    let arr = s.split("").join('');
    answer = Number(arr);
    return answer;
    // let arr = s.split("");
    // let answer = 0;
    // if (arr[0] !== '+') {
    //     answer = arr.join('');
    //     Number(answer);
    //     console.log(answer);
    //     return answer;
    // } {
    //     let out = arr.shift();
    //     answer = arr.join('');
    //     Number(answer);
    //     console.log(answer);
    //     return answer;
    // }
}

solution('+1234');

/*
1. most likes code (약간 꼼수인듯 ㅋㅋ JS는 어차피 +는 반환 안함)

function strToInt(str){
  return str/1
  }


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(strToInt("-1234"));

2. many peoples' code

function strToInt(str){
  var result = 0;
  result = Number(str);
  return result;
}

console.log(strToInt("-1234"));

*/
