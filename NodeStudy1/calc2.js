var calc = {};

calc.add = function(a, b) {
    return a + b;
};

module.exports = calc;

/*
exports를 사용한 calc와 달리 calc2에서는 module.exports를 사용한다.
calc 객체를 만들고 그 객체의 속성으로 더하기 함수를 할당한 후 마지막에는 module.exports에 calc 객체를 할당했다.
이렇게 하면 calc 객체는 모듈을 불러들이는 쪽에서 그대로 사용할 수 있다.
*/