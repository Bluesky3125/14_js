// hoist: 끌어올리다
// 인터프리터 + 컴파일러: 함수 선언문 먼저 인식 후 순차적으로 해석 -> hoisting 발생

console.log(hello('이몽룡'));
// console.log(hi('피카츄'));

function hello(name) {      // 함수 선언문은 hoisting 발생함
    return `${name}님 반갑소!`;
};

var hi = function(name) {   // 함수 표현식은 hoisting 발생하지 않음
    return `${name} 안녕~!`;
};

/*
    함수 선언문은 런타임 이전 자바스크립트 엔진에 의해 먼저 해석된다.(컴파일적인 요소)
    따라서 함수 선언문 이전에 함수를 참조할 수 있으며 호출할 수도 있다.
    함수 선언문이 코드의 선두로 끌어올려진 것처럼 동작하는 자바스크립트 고유의 특징을
    '호이스팅'이라고 한다.(이후 변수에서도 나올 예정)
*/