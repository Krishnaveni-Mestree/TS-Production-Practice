"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
//generic version
//its locking the type
function identityThree(val) {
    return val;
}
//identityThree("3")
function identityFour(val) {
    return val;
}
identityFour({
    brand: "Milton",
    type: 750
});
