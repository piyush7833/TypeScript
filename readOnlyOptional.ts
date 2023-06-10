type User= {  //it is user defined data type in ts //it is type alias
    readonly _id:string | number,  //readOnly is key word which is used so that anyone can not modify that data at any time
    name:string,
    age:number,
    email:string,
    isActive:boolean,
    college?:string //it is optional is that it can be passed or not
}
type collegeName={
    collegeName:string
}
type collegeAdd={
    collegeAdd:string
}

type collegePin={
    collegePin:number
}

type college= collegeName & collegeAdd & collegePin &{
        collegeExist:boolean
}

let myUser : User={
    _id:7833,
    name:"ps",
    age:21,
    email:"p@ps",
    isActive:true
}

let createUser=(u:User):User=>{
    return u;
}
// myUser._id=1234 //can not be changed as it is in read only form
createUser(myUser);
export {}