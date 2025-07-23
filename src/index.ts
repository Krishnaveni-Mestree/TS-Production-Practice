class Person{
    public email:string // accessible out side of the class also
    private name:string   
    //if we dont want it to be accessible to anyone
    readonly city: string = "delhi"; // Initialized
    //defaultly it is reffered as public in Typescript

    private _courseCount=1 
    protected _courses=1

    constructor(email:string,name:string){
        this.email=email;
        this.name=name;
        this.city;//its accessible here ,only with in the class
        
    }
}

//extended class (Inheritence)
class SubPerson extends  Person{
  isFamily: boolean = true;
   changeCourseCount() {
    //this._courseCount = 4; // ❌ Error: private property access not allowed
    this._courses = 4;  //we can use protected within class and as well as inherited class
  }
}



const krish=new Person('k@v.com','krishna');

//console.log(krish.city); // ''
//krish.city;


