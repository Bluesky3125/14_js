let target = 'Java JavaScript';

console.log(target.match(/VA/));
console.log(target.match(/VA/i));
console.log(target.match(/VA/ig));

// .: 임의의 문자 한 개
target = 'abcdefg';
console.log(target.match(/../g));

// {m,n}: 최소 m번, 최대 n번 반복되는 문자열(반복 검색)
target = 'a aa aaa b bb bbb bbbb ab aab abb';
console.log(target.match(/a{2,3}/g));   // {} 안에서 띄어쓰기 금지
console.log(target.match(/b{2}/g));
console.log(target.match(/b{3,}/g));

// +: 앞선 패턴이 최소 한 번 이상 반복되는 문자열
console.log(target.match(/b+/g));
console.log(target.match(/b{1,}/g));

// ?: 앞선 패턴이 없거나 하나 있는 문자열
target = 'soul seoul seeoul';
console.log(target.match(/se?oul/g));
console.log(target.match(/se{0,1}oul/g));

// |: or, []: or(주로 문자 한 글자)
target = 'aa bb cc dd 123 456 @';
console.log(target.match(/a|b/g));
console.log(target.match(/[ab]/g));
console.log(target.match(/a+|b+/g));    // 반복되는 단어 단위

// 하이픈(-)은 아스키코드 또는 유니코드의 범위(대괄호에서 사용)
console.log(target.match(/[a-z]/g));
console.log('----------------------------------');

// \d: 숫자
console.log(target.match(/[0-9]+/g));
console.log(target.match(/\d+/g));

// \D: 숫자가 아닌 문자
console.log(target.match(/[^0-9]+/g));
console.log(target.match(/\D+/g));
console.log('----------------------------------');

// \w: 알파벳, 숫자, 언더스코어 <-> \W
console.log(target.match(/\w+/g));
console.log(target.match(/\W+/g));

// 
target = 'https://www.google.com/https';
console.log(target.match(/https+/g));


