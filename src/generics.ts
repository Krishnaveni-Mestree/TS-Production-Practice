const score:Array<number> = []
const names:Array<number> = []

function identityOne(val:boolean|number):boolean|number{
    return val
}

function identityTwo(val:any):any{
    return val
}

//generic version
//its locking the type
function identityThree<Type>(val:Type):Type{
    return val
}
//identityThree("3")

function identityFour<T>(val:T):T{
    return val
}

//example
interface Bottle{
    brand:string,
    type:number,
}
identityFour<Bottle>({
    brand: "Milton",
    type: 750
})


