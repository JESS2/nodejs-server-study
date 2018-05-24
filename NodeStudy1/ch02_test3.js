console.dir(process.env);

console.log('OS 환경 변수의 값 : ' + process.env[OS]);

/*
위의 코드가 에러나는 이유 :
OS 변수가 시스템 환경 변수에 들어 있는데도 오류가 발생하는 것은 노드의 process.env 속성에 사용자 정의 환경 변수만 들어있기 때문이다.
따라서 process.env 객체에 들어있는 속성만으로는 OS와 같은 시스템 환경 변수에 접근할 수 없다.
*/