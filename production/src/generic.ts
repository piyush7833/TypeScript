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

//above function using arro functions
const getMoreSearchProducts = <T,>(products: T[]): T => { //<T> mans it is going to be generic  //<T,> is used so that it can be differentiate with h1 or p tag while using jsx or tsx
    //do some database operations
    const myIndex = 4
    return products[myIndex]
}













export{}