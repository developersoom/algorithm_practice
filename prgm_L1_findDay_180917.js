function findDay(a, b) {
    var answer = '';
    if (b % 7 === 1) {
        answer = FRI;
    } else if (b % 7 === 2) {
        answer = SAT;
    } else if (b % 7 === 3){
        answer = SUN;
    } else if (b % 7 === 4){
        answer = MON;
    } else if (b % 7 === 5){
        answer = TUE;
    } else if (b % 7 === 6){
        answer = WED;
    } else if (b % 7 === 0){
        answer = THU;
    }
    return answer;
}