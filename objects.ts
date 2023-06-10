//common usecase of objects is pass objects to functions or get objects return from functions
const user={
    name :"Piyush",
    age:21,
    isActive:true
}
let createUser=({name:string,age:number,isActive:bool})=>{

}

// createUser()  //if we not pass any object typescript will genrate error  //i.e. we need to pass objects insetad of values as in argument we are taking it as object
createUser({name:"ps",age:22,isActive:true})  //we can pass object like this 
createUser(user)  //we can pass object like this tooo

// createUser({name:"ps",age:22,isActive:true,email:"p@ps.com"})//this is causing error as in craeateUser their is no member of email type
let newUser={name:"ps",age:22,isActive:true,email:"p@ps.com"};
createUser(newUser);  //bad behaviour of ts as in this case email get passed while in createuser function we are not taking email so this should also return error



let createCourse=(user:{name:string,course:string,price:number,isPaid:boolean}):{name:string,course:string,price:number,isPaid:boolean}=>{  //return type is object
    return (user)
}
createCourse({name:"ps",course:"CSE",price:22,isPaid:true})

type Id=number |string;  //using this we have the id of type number or string
export{}