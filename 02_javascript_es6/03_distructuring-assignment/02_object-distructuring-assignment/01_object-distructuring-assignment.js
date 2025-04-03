// 객체 구조 분해 할당 기본 문법
let pants = {
    productName : '배기팬츠',
    color : '검정색',
    price : 30000,
    getInfo() {
        console.log(this.color, this.productName, '좋아!');
    }
};

// let productName = pants.productName;
// let color = pants.color;

// 객체는 프로퍼티 순서가 저장되어 있지 않으므로,
// 프로퍼티 명을 변수 명으로 사용해야 한다.(순서 상관)

// 배열 구조 분해 할당과 달리 프로퍼티 순서는 중요하지 않지만,
// 프로퍼티 명과 일치하는 변수명을 써 주어야 한다.
// let {productName, color, price} = pants;
let {price, color, productName} = pants;
let {getInfo} = pants;
console.log(productName, color, price);

// 메소드에서의 this와 따로 뽑아낸 독립적인 함수의 this(전역 객체)는 다르다.
pants.getInfo();
getInfo();

// 프로퍼티에 접근해서 다른 변수에 담는 객체 구조 분해 할당을 원할 시
let {color:co, price:pr, productName:pn} = pants;
console.log(co, pr, pn);
