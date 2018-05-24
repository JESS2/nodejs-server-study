var calc = {}; //calc라는 객체 생성

calc.add = function(a, b) { //calc라는 객체에 add 속성을 추가하고 더하기 함수를 할당함
    return a + b;
}

console.log('모듈로 분리하기 전 - calc.add 함수 호출 결과 : %d', calc.add(10, 10));