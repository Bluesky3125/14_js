var obj = {                             // 지양해야 할 프로퍼티명
    normal : 'normal value',            // 프로퍼티명 중복(나중으로 적용)
    '@ s p a c e @' : 'space value',    // 특수 기호($, _ 제외)
    '' : '',                            // 빈 문자열
    0 : 1,                              // 숫자는 내부적으로 문자열로 변환
    var : 'var',                        // 예약어
    normal : 'new value'
};

// 기존에 없는 프로퍼티 추가
obj['test'] = 'test value';
console.log('obj',obj)