// ECMA: 표준 스크립트 언어

var sym1 = Symbol();    // 첫 글자가 대문자면 생성자
var sym2 = Symbol();
console.log(sym1 == sym2);

var sym3 = Symbol('설명');
var sym4 = Symbol('설명');  // Symbol 타입: 같은 이름의 프로퍼티를 두 개 이상 만들고 싶을 때
console.log(sym3 == sym4);
console.log(sym3.description);
console.log(sym4.description);

// json같은 느낌으로 객체 생성
var obj = {};   // 리터럴 객체({})를 생성해서 추후에 동적으로 프로퍼티(속성)를 추가 및 제거할 수 있다.
obj['일반속성'] = '일반';   // 대괄호([])는 객체의 속성에 접근, 없으면 추가하는 개념
obj[sym3] = '값1';
obj[sym4] = '값2';  // js는 객체를 만들고 나서 속성을 추가할 수 있다.
console.log(obj);
console.log(typeof obj);
console.log(obj[sym3]);

// 숨겨진 프로퍼티
var hidden = Symbol('숨겨진 프로퍼티');
obj[hidden] = '비밀 값';
obj['name'] = '홍길동';
console.log(obj);
console.log(obj[hidden]);
console.log(Object.keys(obj));  // Object.keys: 매개변수에 들어온 객체의 프로퍼티를 추출해서 보여주는 함수(symbol은 보여주지 않음)
