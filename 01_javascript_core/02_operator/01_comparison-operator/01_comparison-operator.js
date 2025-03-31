// 1. 숫자 1, 문자 1, true 비교
console.log(`1 == 1 :       ${1 == 1}`);
console.log(`1 == true :    ${1 == true}`);
console.log(`1 == '1' :     ${1 == '1'}`);
console.log(`1 === '1' :    ${1 === '1'}`);    // 암묵적 형변환 x ('동일 비교'같은 느낌)

// 2. NaN는 자신과 일치하지 않는 유일한 값이다.
console.log(`NaN == NaN :   ${NaN == NaN}`);
console.log(`NaN === NaN :  ${NaN === NaN}`);

// 3. 일치하지 않는 값 비교
console.log(`1 != '1' :     ${1 != '1'}`);
console.log(`1 !== '1' :    ${1 !== '1'}`);