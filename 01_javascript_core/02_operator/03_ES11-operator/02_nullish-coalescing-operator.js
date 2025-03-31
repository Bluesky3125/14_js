// null 병합 연산자
/*
    좌항의 피연산자가 null이거나 undefined라면
    우항의 결과가 남고(함수면 실행),
    그렇지 않으면 좌항이 남는다(함수면 실행)
*/

var test = null ?? '기본 값';
// console.log는 매개변수가 두 개 이상일 시 
// 중간에 띄어쓰기를 자동으로 추가해서 문자열을 이어붙임
console.log('test:', test);

var value1 = '' || '기본 값';
var value2 = '' ?? '기본 값';   // 빈 칸이 정의되어 있음
console.log('value1',value1);
console.log('value2',value2);