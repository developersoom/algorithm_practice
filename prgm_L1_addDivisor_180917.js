function solution(n) {
    let answer = 0;
    for (let i = n; i > 0; i--) {
        if (n % i === 0) {
            answer += i;
        }
    }
    return answer;
}

let result = solution(5);
console.log(result);

// mine is the best! lollol