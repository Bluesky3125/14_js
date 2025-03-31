/*
    var 키워드로 선언한 변수는 암묵적으로 undefined로 초기화 되어 있다.
    변수를 선언한 이후 값을 할당하지 않은 변수는 undefined인데
    개발자가 의도적으로 변수에 할당하는 것은
    본래 취지와 어긋나고 혼란을 줄 수 있으므로 지양한다
    (대신 null 대입)
*/

var undef;
console.log(undef);
console.log(typeof undef);

var nullVal = '';
nullVal = null;
console.log(nullVal);
console.log(typeof nullVal);