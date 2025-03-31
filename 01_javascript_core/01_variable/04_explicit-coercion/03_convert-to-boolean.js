console.log(Boolean('JavaScript')); // truthy
console.log(Boolean(''));           // falsy
console.log(Boolean(1));            // truthy
console.log(Boolean(0));            // falsy
console.log(Boolean(NaN));          // falsy
console.log(Boolean(Infinity));     // truthy
console.log(Boolean(null));         // falsy
console.log(Boolean(undefined));    // falsy
console.log(Boolean({}));           // truthy
console.log(Boolean([]));           // truthy

console.log();

console.log(!!'JavaScript');
console.log(!!'');
console.log(!!1);
console.log(!!0);
console.log(!!NaN);
console.log(!!Infinity);
console.log(!!null);
console.log(!!undefined);
console.log(!!{});
console.log(!![]);