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
