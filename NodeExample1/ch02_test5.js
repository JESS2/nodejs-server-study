var calc = require('./calc'); //require() 함수를 호출할 때 파라미터로 모듈 파일을 전달한다. 이렇게 불러들인 모듈은 calc 변수에 할당한다.
console.log('모듈로 분리한 후 - calc.add 함수 호출 결과 : %d', calc.add(10, 10));

var calc2 = require('./calc2');
console.log('모듈로 분리한 후 - calc2.add 함수 호출 결과 : %d', calc2.add(10, 10));