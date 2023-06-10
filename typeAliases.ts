type User={  //it is user defined data type in ts //it is type alias
    name:string,
    age:number,
    email:string,
    isActive:boolean
}

let createUser=(user:User):User=>{
    return user
}
createUser({name:"ps",age:21,email:"p@p",isActive:true})
type Id=number |string;  //using this we have the id of type number or string
export{}