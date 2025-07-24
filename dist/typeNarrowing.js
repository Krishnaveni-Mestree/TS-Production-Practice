"use strict";
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase(); // ✅ string-specific method
    }
    return val + 3; // ✅ number-specific operation
}
//🛠️ Narrowing with typeof
function printValue(val) {
    if (typeof val === "string") {
        console.log(val.toUpperCase());
    }
    else if (typeof val === "number") {
        console.log(val + 10);
    }
    else {
        console.log("Value is null");
    }
}
//⚠️ Cautionary Tales
//typeof [] === "object"
console.log(typeof []); // "object"
console.log(typeof null); // "object"
//if we want to check array 
//Array.isArray(val); // ✅ Accurate check
//Falsy/Truthy Values
//Falsy values: false, 0, "", null, undefined, NaN
function provideId(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    console.log(id.toLowerCase()); // Safe
}
//🏁 Type Guards – Another Name for Narrowing
//Common Type Guards:
//typeof
//instanceof
//in keyword
//custom type predicates
