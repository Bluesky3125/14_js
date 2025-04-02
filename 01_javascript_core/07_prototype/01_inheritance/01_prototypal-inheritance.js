// 객체 리터럴 기반 상속 또는 프로토타입 직접 연결 상속

const user = {
    activate : true,
    login : function() {
        console.log('로그인 되었습니다.');
    }
};

console.log('user', user);
console.log(typeof user);

// Object : Object.prototype

console.log(user.constructor == Object);
console.log(user.__proto__ == Object.prototype);    // 다른 웹 브라우저에서 잘 동작하지 않음
console.log(user.constructor == Object.prototype.constructor);

// __proto__는 권장되지 않고, Object의 getPrototypeOf() 사용을 권장하고 있다.
// (일부 js 엔진이나 웹 브라우저 이슈)
console.log(Object.getPrototypeOf(user) == Object.prototype);

// 상속
const user2 = {
    activate : '활성화 상태',
    login : function() {
        console.log('로그인 실패되었습니다.');
    }
};

console.log(user2.__proto__ == Object.prototype);

const student = {
    passion : true
};

// 프로토타입 체인(스코프 체인과 비슷함)
// student.__proto__ = user2;
Object.setPrototypeOf(student, user2);
console.log(student.activate);

const greedyStudent = {
    class : 1
};

// greedyStudent.__proto__ = student;
Object.setPrototypeOf(greedyStudent, student);
console.log(greedyStudent.passion);
greedyStudent.login();