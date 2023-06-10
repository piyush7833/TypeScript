let greet:string="Namaskar";  //we can not redeclare block scoped variables
console.log(greet);

//number
let userId:number=6;  //JavaScript does not have a special runtime value for integers, so there’s no equivalent to int or float - everything is simply number  //benefit of typescript is here that whenever we use this variable anywhere functions which are used in number will be shown and if use functiojn of any other datatype the error will be shown in editor

//it is not always necessary to put type of variable like in above cses where we are assigning values just after assigning types as in such cases typescript is smart enough to detect the type  //it is known as type inference

//boolean
let isActive:boolean=true;


//using 'any' keyword is not a good practice
//'any' type is used when we are not sure that the variable is going to of which type //it basically turn off the typechecking //i.e. it will turn to js

// let hero;  //here hero is of any type as typescript can not detect which type of values will be in this
let hero:string;
function getHero(){
    // return true; //it will not genrate error if hero is of any type but it will generate error if it have certain types
    return "thor";
}
hero=getHero();
export {} //this will remove error of redeclare block scoped variables //temporary