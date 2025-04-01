var student = {
    name : '유관순',
    age : 16,
    test : undefined
};

console.log('name' in student);
console.log('age' in student);
console.log('test' in student);

var sym = Symbol('심볼');
student[sym] = '추가';  // Symbol이 프로퍼티로 추가되지만 for-in문에서는 숨겨진다.
console.log(student);
console.log(student[sym]);
console.log(sym in student);

// for-in문(프로퍼티 순회 용도)
for(var key in student) {
    console.log(`key: ${key}`);
    // console.log(student.key);
    console.log(`student[${key}]: ${student[key]}`);
    console.log(`<td>${student[key]}</td>`)
}