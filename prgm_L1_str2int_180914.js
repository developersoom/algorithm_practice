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
