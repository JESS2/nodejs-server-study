var nconf = require('nconf');
nconf.env();

console.log('OS 환경 변수의 값 : %s', nconf.get('OS'));

/*
% npm install nconf
다른 사람이 만들어 놓은 외장 모듈인 nconf 모듈을 사용하는 것이다.
npm 패키지를 사용하면 다른 사람이 만들어 올려놓은 패키지를 다운로드하여 설치할 수 있다.
*/