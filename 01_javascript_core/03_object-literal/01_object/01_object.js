/*
자바스크립트는 프로토타입 기반의 객체 지향(기반) 프로그래밍 언어로 원시 값을 제외한 나머지 값
(함수, 배열, 정규표현식 등)은 모두 객체이다.(feat. 프로토타입을 가지면 객체)
*/
// 자바스크립트: 생성자 + prototype = 객체
var name2 = '홍씨';
var age = 10;

// 속성만 있으면 구조체, 속성 + 기능 = 객체
var student = {
    /* 속성 프로퍼티 */
    name2 : '유관순',
    age : 16,
    
    /* 기능 프로퍼티 */
    /* 속성의 값이 함수인 프로퍼티는 '메소드'이다.(객체 안에서 쓰이는 함수) */
    /* 메소드 안에서는 this.을 반드시 쓰자(안 쓰면 전역 변수가 나올 수 있음) */
    getInfo : function() {
        return `${this.name2}은(는) ${this.age}세 입니다.`; // this는 메소드가 포함된 객체
    },
    
    getInfo2 : function() {
        return `${name2}은(는) ${age}세 입니다.`;
    }
};

console.log('student:',student);
console.log('이름:',student.name2);
console.log('나이:',student.age);
console.log('정보:',student.getInfo);   // 메소드는 접근하면 소괄호(())를 통해 실행 가능
// 이름이 없는(익명) 함수가 객체의 프로퍼티가 되면 프로퍼티의 키를 이름으로 갖는 메소드가 된다.

this.name2 = '박씨'; // 글로벌 객체에 프로퍼티 추가
console.log(this);
console.log(student.getInfo2());    // this.을 안 적으면 객체 밖에서 전역 변수 탐색,(없으면 글로벌 객체 탐색(?)) 없으면 에러 발생
