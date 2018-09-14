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