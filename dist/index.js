"use strict";
class Person {
    constructor(email, name) {
        this.city = "delhi";
        this._courseCount = 1; //we can get setters and getters for this property
        this.email = email;
        this.name = name;
        this.city;
    }
    //private method
    deleteToken() {
        console.log('Token deleted');
    }
    //getters:-because of get keyword, without calling thse methods, we can use them as properties
    //getter should have to return
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    //getter
    get courseCount() {
        return this._courseCount;
    }
    //setter //it simply will not return anything even void also
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('course count should be more than 1');
        }
        this._courseCount = courseNum;
    }
}
const krish = new Person('k@v.com', 'krishna');
// krish.deleteToken()   //we cant access private method
//we can get public properties and methods
krish.courseCount;
