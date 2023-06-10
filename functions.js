"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function addTwo (num){
//     return num+"2"; //it not create error of we not assign return type to function //it will act as js
//     // return num+2;
// }
function addTwo(num) {
    return num + "2"; //it not create error of we not assign return type to function //it will act as js
    // return num+2;
}
// addTwo("5");  //it can return value of any type so we can add string too which is an error  //"5"not create error of we not assign assignement type to function //it will act as js
addTwo(5);
function getUpper(val) {
    return val.toUpperCase;
}
getUpper("hello");
function signUp(name, email, password, age, isActive) {
}
var loginUser = function (name, password, isActive) {
    if (isActive === void 0) { isActive = true; }
};
signUp("p", "p", "p", 8, true);
loginUser("p", "p");
//better way to write functions
function addThree(num) {
    // return num+"2"; //it not create error of we not assign return type to function //it will act as js
    return num + 3;
}
//if we want to return two different types of values throgh a function then we have to use union otherwise it returns error
function compare(val) {
    if (val > 5) {
        return true;
    }
    return "OK";
}
var getHello = function (name) {
    return "Hello" + name;
};
getHello("piyush");
var heroes = ["hanuman", "shaktiman", "asur", 2];
heroes.map(function (hero) {
    return "hro is ".concat(hero);
});
