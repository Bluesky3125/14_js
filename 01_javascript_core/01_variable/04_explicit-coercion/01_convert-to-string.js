// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법(빌트인 함수라 new를 적지 않아도 자동으로 new를 붙여줌)
console.log(String(10));
console.log(String(NaN));
console.log(String(Infinity));
console.log(String(true));
console.log(String(false));

console.log();

// 2. Object.prototype.toString 메소드를 호출해서 하는 방법
console.log((10).toString());
console.log((NaN).toString());
console.log((Infinity).toString());
console.log((true).toString());
console.log((false).toString());