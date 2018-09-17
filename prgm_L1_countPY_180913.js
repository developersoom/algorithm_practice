function solution(s){
    var answer = true;
    var ls = s.toLowerCase();
    var p = [...ls].filter(l => l ==='p').length
    var y = [...ls].filter(l => l ==='y').length
    console.log('p = '+p);
    console.log('y = '+y);
    if (p !== y){
        answer = false;
    }
    return answer;
}

console.log(solution('pPPy'));

/*
1. most likes code

function numPY(s) {
  return s.match(/p/ig).length == s.match(/y/ig).length;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( numPY("pPoooyY") )
console.log( numPY("Pyy") )

2. best code
function numPY(s){
  //함수를 완성하세요
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( numPY("pPoooyY") )
console.log( numPY("Pyy") )

*/
