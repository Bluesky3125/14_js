// 1. 변수 중복 선언 금지
let msg = '안녕';
msg = '반가워';

// let msg = '잘가';           // Cannot redeclare block-scoped variable 'msg'.

// 2. 블록 레벨 스코프 인정
let i = 0;
for (let i = 0; i < 10; i++) {
    
}
console.log('i:',i);        // 0

// 3. 변수 호이스팅 방지
// 내부적으로는 호이스팅이 일어나지만, 이를 예외처리로 막아 방지함.

// console.log(x);             // Cannot access 'x' before initialization

let x = 1;