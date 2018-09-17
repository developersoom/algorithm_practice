function solution(n) {
    var answer = '';
    var arr = [];

    for (let i = 0; i < n; i++) {
        if (i === 0 || i % 2 === 0) {
            arr.push('수');
        } else {
            arr.push('박');
        } answer = arr.toString();
        answer = arr.join("");          
    }
    console.log(answer);
    return answer;
}


/*
1. most likes code
function waterMelon(n){
  var result = "수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박"
  //함수를 완성하세요

  return result.substring(0,n);
}

// 실행을 위한 테스트코드입니다.
console.log("n이 3인 경우: "+ waterMelon(3))
console.log("n이 4인 경우: "+ waterMelon(4))


2. many people's code 
function waterMelon(n){
  var result = "";
    for(var i = 0 ; i < n ; i++) {
        result += i % 2 == 0 ? "수" : "박";
  }
  return result;
}

// 실행을 위한 테스트코드입니다.
console.log("n이 3인 경우: "+ waterMelon(3))
console.log("n이 4인 경우: "+ waterMelon(4))

*/
