// function addTwo (num){
//     return num+"2"; //it not create error of we not assign return type to function //it will act as js
//     // return num+2;
// }
function addTwo (num:number){
    return num+"2"; //it not create error of we not assign return type to function //it will act as js
    // return num+2;
}
// addTwo("5");  //it can return value of any type so we can add string too which is an error  //"5"not create error of we not assign assignement type to function //it will act as js
addTwo(5);
function getUpper(val:string){
    return val.toUpperCase;
}
getUpper("hello");


function signUp(name:string,email:string,password:string,age:number,isActive:boolean){

}

let loginUser=(name:string,password:string,isActive:boolean=true)=>{ //put default values 

}
signUp("p","p","p",8,true);
loginUser("p","p");


//better way to write functions

function addThree (num:number):number{  //it means take argument as number and return only number
    // return num+"2"; //it not create error of we not assign return type to function //it will act as js
    return num+3;
}

//if we want to return two different types of values throgh a function then we have to use union otherwise it returns error
function compare(val:number){ //if return type wiil be bool then 200 cause error if it is string then true will cause error
    if(val>5){
        return true;
    }
    return "OK";
}

const getHello=(name:string):string=>{
    return "Hello"+name;
}
getHello("piyush")

// const heroes=["hanuman","shaktiman","asur",1];
const heroes=["hanuman","shaktiman","asur"];
heroes.map((hero:string):string=> {  //if hero will not assign to string then any type can be in heroes array
    return `hro is ${hero}`
})
function consoleError(errMsg:string):void{  //this is not returning anything //so give void as return type
    console.log(errMsg)
}
function handleError(errMsg:string):never{  //some function never return a value not even void
    throw new Error(errMsg);   //The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.
}
//so i case of function it is necessary to use types
export{} 