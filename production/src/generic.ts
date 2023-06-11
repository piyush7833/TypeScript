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
    return val;
}

interface Bottle{
    company:string,
    type:number,
}
identity4<Bottle>({company:"coc",type:4})
identity3(3)