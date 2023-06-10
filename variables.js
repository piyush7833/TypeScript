"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greet = "Namaskar"; //we can not redeclare block scoped variables
console.log(greet);
//number
var userId = 6; //JavaScript does not have a special runtime value for integers, so there’s no equivalent to int or float - everything is simply number  //benefit of typescript is here that whenever we use this variable anywhere functions which are used in number will be shown and if use functiojn of any other datatype the error will be shown in editor
//it is not always necessary to put type of variable like in above cses where we are assigning values just after assigning types as in such cases typescript is smart enough to detect the type  //it is known as type inference
//boolean
var isActive = true;
