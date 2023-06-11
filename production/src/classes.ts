//it is similar to c/c++

// class User{
//     private readonly email:string  //now eamil can.t be accessible outside the class  //everything without marked is public  //in js we use #email to make it private
//     name:string
//     city:string=""//pass the value in constructor //if not then initialise it with default value
//     constructor(email:string,name:string){
//         this.email=email, //acessile inside class
//         this.name=name;
//     }
// }
class User{
    constructor(public email:string,public name:string,public city :string=""){  //we can also do above thing like this
        this.email=email, //acessile inside class
        this.name=name;
    }
}

// const ps=new User(email:"ps@ps", name:"ps"); //this will cause error as we have constructor so we need to pass parameters only
const ps=new User("ps@ps","ps");


// ps.email;  //not accessible

export{}