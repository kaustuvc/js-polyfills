import "./src/arrayfills/myForEach.js"
import "./src/arrayfills/myMap.js"
import "./src/arrayfills/myFilter.js"
import "./src/arrayfills/myReduce.js"
import "./src/arrayfills/myFlat.js"

const arr = [1, 2, "Hello", 4, 5];

//implementing myForEach()
arr.myForEach((e) => console.log(e));
// arr.myForEach("hello world"); //will throw error

console.log("\n")

//implementing myMap()
console.log(arr.myMap((e) => e * 2));

console.log("\n")

//implementing myFilter()
console.log(arr.myFilter((e) => typeof e === "number"))
console.log(arr.myFilter((e) => typeof e === "string"));

console.log("\n")

//implementing myReduce()
console.log(arr.myFilter((e) => typeof e === "number").myReduce((acc, e) => acc + e, 0)) //sum of number elements

console.log("\n")

//implementing myFlat()
console.log(arr.myFlat())

const arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.myFlat()); // [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(arr3.myFlat(2));  // [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr4.myFlat(Infinity)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
