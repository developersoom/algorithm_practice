function solution(seoul) {
    let position = "";
    for (let i = 0; i < seoul.length; i++) {
        if (seoul[i] === "Kim") {
            position = i;
        }
    }
    let answer = '김서방은 '+position+'에 있다'
    return answer;
}

let seoul =["Kim","Jane","Soom"];
let result = solution(seoul);
console.log(result);


/* better code

function findKim(seoul){
  var idx = seoul.indexOf('Kim');
  return "김서방은 " + idx + "에 있다";
}

// 실행을 위한 테스트코드입니다.
console.log( findKim(["Queen", "Tod", "Kim"]));

*/