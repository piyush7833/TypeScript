// In languages like C# and Java, one of the main tools in the toolbox for creating reusable components is generics, that is, being able to create a component that can work over a variety of types rather than a single one. This allows users to consume these components and use their own types.

const sports:Array <number>=[]

function identity1(val:boolean|number):boolean|number|string{
    return val;
}
function identity2(val:any):any{  //just escaping the ts //val may be bool and return type may be string
    return val;
}

//generics
function identity3<Type>(val:Type):Type{   //val may be any but return type is always the type of val
    return val;
}

function identity4<T>(val:T):T{  //shortcut of using generics
    return val;  //val.length will give error as it is not always the case that it is an array
}

interface Bottle{
    company:string,
    type:number,
}
identity4<Bottle>({company:"coc",type:4})
identity3(3)



//generics in array and arrow functions

function loggingIdentity1<Type>(arg: Type[]): Type[] {
    console.log(arg.length);
    return arg;
  }


function loggingIdentity2<Type>(arg: Array<Type>): Array<Type> { //return type is array also
    console.log(arg.length); // Array has a .length, so no more error
    return arg;  //need to return product itself 
  }



  //getting an index using generics
  function getSearchProducts<T>(products: T[]): T {
    // do some database operations
    const myIndex = 3
    return products[myIndex]
}

//above function using arrow functions
const getMoreSearchProducts = <T,>(products: T[]): T => { //<T> mans it is going to be generic  //<T,> is used so that it can be differentiate with h1 or p tag while using jsx or tsx
    //do some database operations
    const myIndex = 4
    return products[myIndex]
}


//generic type parameter
interface database{
    connection:string,
    username:string,
    password:string
}



function anotherFunctio<T extends database,U extends number>(valOne:T,valTwo:U):object{  //extends number means u must have number or properties of a number
    return {
        valOne,
        valTwo
    }
}


// anotherFunctio(3,"4") // this will cause an error as valTwo is string which extends to number
// anotherFunctio(3,4.5)  //now val 1 should be database as it extends to it 
anotherFunctio({connection:"p",username:"p",password:"p"},4.5)

//generic classes

//lets we have two sellable items

interface quiz{
    name:string,
    type:string
    price:number
}
interface course{
    name:string,
    author:string,
    subject:string,
    price:number
}

class Sellable <T>{  //try to use it in iiitu canteen
    public cart:T[]=[]  //we have a class sellable which is of type t have array of type t

    addToCart(product:T){  //this method push product in cart
        this.cart.push(product);
    }
}








export{}