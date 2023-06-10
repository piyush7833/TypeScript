// union means a data type can be any of the provided data type //it is better than any key word

let score:number | string;
score=34;
score="34";

type User={
    name:string,
    id:number
}
type Admin={
    userName:string,
    id:number
}
type superAdmin={
    superName:string,
    id:number
}
let person:User | Admin | superAdmin ={name:"ps",id:21};
person={userName:"ps",id:21}; //no wrror occured as person can be admin as well as user so he can have name or username

function getDbId(id:number|string){
    // id.toLowerCase(); //it gives error because typescript is considering argument type as new data type which can be string or number so we can not use such functions here
    // id.setPrecision()

    //so to do such things we need to do extra check
    if(typeof id==="string"){ //union narrowing
        id.toLowerCase();
    }
    else{
        id+2;
    }
        console.log(`DB id is ${id}`)
}
getDbId(3)
getDbId("3")

const data: number[] | string[]=[1,2,3]; //we still can not be mixed match it should be either all string or all number
const data2: (number| string)[]=[1,"2",3]; //now we can mixed match it 
const data3: any[]=[1,"2",3]; //now we can mixed match it 
data.push(3)

//we can also strict a value
let pie:3.14=3.14;
let p:"ps" |"rishu"|"me"="ps";
export {}