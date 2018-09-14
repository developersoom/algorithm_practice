function solution(n) {
    var answer = 0;
    var number = n.toString();
    var value = number.split("");
    
    value.forEach(function(v,i,a){
        answer += Number(a[i]);
    });

    console.log(answer);
    return answer;
}

solution(987);