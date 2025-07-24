//With arrays
function getSearchProducts<T>(products: T[]): T {
  let myIndex = 3;
  return products[myIndex];
}

//same function in arrow vesion
const getMoreSearchProducts = <T>(products: T[]): T => {
  let myIndex = 2;
  return products[myIndex];
};

const numbers = [10, 20, 30, 40, 50];
const result = getSearchProducts<number>(numbers);// result will be: 40

const names = ["Krishna", "Radha", "Ravi"];
const nameResult = getMoreSearchProducts<string>(names);// result will be: "Ravi" (if index expect 0,1,2 undefined will come)  



//mistake
function getSearch<T>(prods: T[]): T {
  //return 3; // ❌ Error: 3 is number, but expected T
  return prods[2] //alloable way
}

//.length property of array
function logLength<T,>(input: T[]): void {    // , is for should not confuse our generics wih jsx tags
  console.log(input.length); // ✅ Valid because it's an array
}

//------------------------------------------------------------------------------------------------------------------------------------------------


//special cases in generics
function anotherFunction<T,U extends number>(valOne:T,valTwo:U):object{
    return{
        valOne,
        valTwo
    }
}
//anotherFunction(3,'4') //string not assignable to number


//
interface Database{
    connection:string,
    username:string,
    password:string
}

function anotherFunction1<T,U extends Database>(valOne:T,valTwo:U):object{
    return{
        valOne,
        valTwo
    }
}
//anotherFunction1(3,{})



export {}