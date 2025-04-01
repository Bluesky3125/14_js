// 상수는 수정이 안 됨
const x = 1;
// x = 2;          // Assignment to constant variable.

// 상수는 선언과 동시에 초기화해야 함
// const y;        // Missing initializer in const declaration

const DISCOUNT_RATE = 0.15;

/*
    ES6 이후라면 var 키워드를 사용하지 않는다.
    재할당이 필요한 경우라면 한정해서 let 키워드를 사용하며
    변경이 발생하지 않는 읽기 전용으로 사용하는 원시 값 또는 객체는 const 키워드를 사용한다.
    (const 키워드가 상대적으로 더 안전하기 때문)
    스코프 체인으로 인해 다른 스코프에서 let 전역 변수가 갱신될 수 있음

    가능한 전역 변수보다는 지역 변수 사용을 권장
    (전역 변수는 생명 주기가 길고 계속 존재하며 공유해서 쓰기 때문에 리소스 낭비 및 오염 가능성 존재)

    결론, 가급적 지역 변수 + const 사용 권장
*/