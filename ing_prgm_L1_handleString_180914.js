function solution(s) {
    var answer = true;
    var len = s.length;
    if (len < 1 || len > 9) {
        answer = false;
        return false;
    }
    if (len === 4 || len === 6) {
        if (!isNaN(s)) {
            return answer;
        }
        answer = false;
        return answer;
    }
    answer = false;
    return answer;
}

let a = solution("12341234");

console.log(a);