"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//With arrays
function getSearchProducts(products) {
    let myIndex = 3;
    return products[myIndex];
}
//same function in arrow vesion
const getMoreSearchProducts = (products) => {
    let myIndex = 2;
    return products[myIndex];
};
const numbers = [10, 20, 30, 40, 50];
const result = getSearchProducts(numbers); // result will be: 40
const names = ["Krishna", "Radha", "Ravi"];
const nameResult = getMoreSearchProducts(names); // result will be: "Ravi" (if index expect 0,1,2 undefined will come)  
//mistake
function getSearch(prods) {
    //return 3; // ❌ Error: 3 is number, but expected T
    return prods[2]; //alloable way
}
//.length property of array
function logLength(input) {
    console.log(input.length); // ✅ Valid because it's an array
}
