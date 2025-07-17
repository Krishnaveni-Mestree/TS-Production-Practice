"use strict";
class Person {
    constructor(email, name) {
        //city: string; // Error: Property 'city' has no initializer
        this.city = "delhi"; // Initialized
        this.email = email;
        this.name = name;
    }
}
const krish = new Person('k@v.com', 'krishna');
console.log(krish.city); // ''
//hitesh.city = "Jaipur";   // Set new value   //if we not give readonly, we can set new values
//by using classes
//✅ Structure
//✅ Type Safety
//✅ Readability
//✅ Mistake Prevention
