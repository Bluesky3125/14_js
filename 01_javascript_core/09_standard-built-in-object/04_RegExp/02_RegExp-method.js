/*
    flag option의 종류
    i(case Insensitive): 대소문자 구별하지 않고 패턴 적용
    g(Global): 대상 문자열 텍스트 내에서 패턴과 일치하는 모든 문자열을 전역 검색
                (없으면, 일치하는 하나의 결과만 나옴)
    m(Multi line): ^와 $가 문자열 전체의 시작과 끝이 아닌, 각 줄의 시작과 끝을 기준으로 작동되게 하는 옵션
                    (없으면, ^와 $는 전체 문자열의 시작과 끝만 매칭)
*/

const target = "Java JavaScript";
const reg = /va/g;

// exec: 정규 표현식에서 제공하는 메소드로, 인수로 문자열을 주면 패턴을 찾아 배열을 반환
console.log(reg.exec(target));          // 왼쪽에서부터 찾아 해당 인덱스 정보 등을 배열로 반환
console.log(/hello/g.exec(target));     // 해당 패턴이 없으면 null을 반환

// test: 정규 표현식에서 제공하는 메소드로, 매칭 결과를 boolean으로 반환
console.log(reg.test(target));

// match: 문자열이 제공하는 메소드로, 인수로 정규 표현식을 주면 패턴을 찾아 배열을 반환
//        (플래그 옵션을 사용하려면 match를 사용)
console.log(target.match(reg));