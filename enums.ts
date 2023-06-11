const ps=0;
const ns=1;
const nn=2;
let person:string="ps"
if(person==="ps"){  //without enums we can't evaluate ps as 0 but with enums we can do the same

}

const enum OrderStatus{  //use const with enums so that it can not genrate too much of code
    wishList,
    ordered=3,  //it is similar to enums of c/c++
    delivered
}
const orderStat=OrderStatus.wishList  //it gives an option to user //here it gives only three options

if(orderStat===0){
    console.log("order")
}







export{}