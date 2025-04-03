// 다양한 사용법
let shirts = {
    productName : '베이직 셔츠'
};

let {productName:pn = '셔츠', color = '색상', price = 0} = shirts;

console.log('pn',pn);
console.log('color',color);
console.log('price',price);

let pants = {
    productName : '밀리터리팬츠',
    color : '국방색',
    price : 25000
};

// 일단 필요한 것만 꺼내 쓰고 나머지는 rest에 뭉쳐두기
// 객체 구조 분해 할당에서도 rest 문법을 통해 나머지 프로퍼티를 객체로 담아둘 수 있다.
let {productName, ...rest} = pants;
console.log('productName',productName);
console.log('rest',rest);
console.log('color',rest.color);
console.log('price',rest.price);
