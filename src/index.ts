class Person{
    public email:string // accessible out side of the class also
    private name:string   
    //if we dont want it to be accessible to anyone
    readonly city: string = "delhi"; // Initialized
    //defaultly it is reffered as public in Typescript

    constructor(email:string,name:string){
        this.email=email;
        this.name=name;
        this.city;//its accessible here ,only with in the class
        
    }
}
const krish=new Person('k@v.com','krishna');

//console.log(krish.city); // ''
//krish.city;


