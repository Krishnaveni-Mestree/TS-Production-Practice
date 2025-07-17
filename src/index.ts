class Person{
    email:string
    name:string
    //city: string; // Error: Property 'city' has no initializer
    readonly city: string = "delhi"; // Initialized

    constructor(email:string,name:string){
        this.email=email;
        this.name=name;
        
    }
}
const krish=new Person('k@v.com','krishna');

console.log(krish.city); // ''
//hitesh.city = "Jaipur";   // Set new value   //if we not give readonly, we can set new values


//by using classes
//✅ Structure
//✅ Type Safety
//✅ Readability
//✅ Mistake Prevention
