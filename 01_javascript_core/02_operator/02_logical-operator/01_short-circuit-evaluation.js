// 단축 평가 구문
// 논리 연산을 결정지은 항이 남는다.
// 1. OR의 경우
console.log('apple' || 'banana');   // OR 연산은, 앞부터 연산을 진행하여, true(truthy)가 나오면 그 값을 리턴한다.
console.log('' || 'banana');        // 앞이 falsy하기 때문에 뒤의 truthy한 값을 확인하고 첫번째 truthy한 값을 리턴한다.
console.log('apple' || false);

console.log();
// 2. AND의 경우
console.log('apple' && 'banana');   // AND 연산은 마지막까지 true(truthy)인지 확인하므로 마지막 true(truthy) 값을 리턴한다.
console.log(false && 'banana');
console.log('apple' && false);

console.log();
// 3. 단축 평가 구문
var num = 3;
num % 2 == 0 && console.log('짝수입니다.'); // AND일 때 왼쪽 구문이 true이면 오른쪽 구문 실행
num % 2 == 0 || console.log('홀수입니다.'); // OR일 때 왼쪽 구문이 false이면 오른쪽 구문 실행

// if (num % 2 == 0) console.log('짝수입니다.');
// else console.log('홀수입니다.');