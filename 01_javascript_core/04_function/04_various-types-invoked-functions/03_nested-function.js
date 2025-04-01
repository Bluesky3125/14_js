var val = '전역변수'

function outer() {
    var outerVal = '외부함수';
    var innerVal = '외부함수의 innerVal'

    function inner() {
        var innerVal = '내부함수';
        console.log(outerVal, innerVal, val);    // 스코프 체인: 탐색 후 없으면 한 단계 위에서 탐색
    }

    inner();

}

// inner();    // 내부 함수는 외부에서 접근 불가(일종의 캡슐화)
outer();