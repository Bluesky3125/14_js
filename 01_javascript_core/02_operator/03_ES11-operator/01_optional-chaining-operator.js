/* 
    ECMA Script 11(2020)에 도입된 연산자로, 연산자의 좌항이 null 또는 undefined일 경우,
    에러 대신 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
*/
var obj = null;
obj = {
    // 'value' : 'abc'
}

var val = obj?.value;   // NPE(NullPointerException) 방지 코드
console.log(val);

// null이나 undefined가 아니라면 .으로 접근한다.
var str = '';
var len = str?.length;  // 0
console.log(len);