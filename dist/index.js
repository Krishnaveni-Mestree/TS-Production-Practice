"use strict";
class Person {
    constructor(email, name) {
        //if we dont want it to be accessible to anyone
        this.city = "delhi"; // Initialized
        //defaultly it is reffered as public in Typescript
        this._courseCount = 1;
        this._courses = 1;
        this.email = email;
        this.name = name;
        this.city; //its accessible here ,only with in the class
    }
}
//extended class (Inheritence)
class SubPerson extends Person {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        //this._courseCount = 4; // ❌ Error: private property access not allowed
        this._courses = 4; //we can use protected within class and as well as inherited class
    }
}
const krish = new Person('k@v.com', 'krishna');
//console.log(krish.city); // ''
//krish.city;
