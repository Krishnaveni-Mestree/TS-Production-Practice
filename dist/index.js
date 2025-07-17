"use strict";
class Person {
    //defaultly it is reffered as public in Typescript
    constructor(email, name) {
        //if we dont want it to be accessible to anyone
        this.city = "delhi"; // Initialized
        this.email = email;
        this.name = name;
        this.city; //its accessible here ,only with in the class
    }
}
const krish = new Person('k@v.com', 'krishna');
//console.log(krish.city); // ''
//krish.city;
