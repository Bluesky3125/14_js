// javascript와 java는 다른 언어

/*
    data-type은 값의 종류를 말하며 자바스크립트(ES6)는 7개의 데이터타입
    (number, string, boolean, undefined(객체가 없음(java의 null)), null(객체에 값이 없음), symbol(객체에 쓰이는 무언가, 같은 값이지만 다르다), object(함수도 객체))을 제공한다.
*/

/* 정수, 실수, 음수 모두 숫자(number)타입이다. (내부적으로는 실수로만 인식) */
var integer = 10;
var double = 5.5;   // 동적 타입 언어, 웬만하면 돌아감 -> TypeScript로 타입을 정적화함
var negative = -10;

console.log(typeof integer);

integer = '한글';
console.log(typeof integer);

console.log(typeof double);
console.log(typeof negative);

console.log(10 / 4);
console.log(10 / -0);       // -Infinity(10 / -0.0000000001)로 취급
console.log(1 * "문자열");  // NaN(Not a Number, 숫자가 아님)
console.log("문자열");