function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(5));

// 재귀함수는 DFS로 많이 활용된다. StackOverflow를 조심하자(끝나는 조건 꼭 걸기)