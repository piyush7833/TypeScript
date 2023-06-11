//it sounds quiet similar to typeAliases
interface User{
    readonly _id:number,
    name:string,
    userId:number,
    email:string,
    // startTrial:()=>boolean //less clear
    startTrial():boolean //it also means that it is method,
    getCoupon(couponCode:string,off:number):number // we can use method in interface not in types //we can only declare but not define it
}
interface User{
    googleAuth:boolean  //we can add values in interface after declaring it ones which is not possible in types
}
const newUser:User={name:"ps",userId:7833,email:"ps@ps",_id:7833,startTrial:()=>{return true},getCoupon:(name:"NEW")=>{return 7833},googleAuth:true}

// interface also posses inheritance
interface Admin extends User{
    role:"admin"|"ta"|"learner"
}


interface takePhoto{
    cameraMode:string,
    filter:string,
    burstMode:boolean,
    camNum:number
}
interface cReels{
    createReels():void
}
class Instagram implements takePhoto, cReels {  //it is basically like instagram is using takephoto as protocol and it must have properties which are in takephoto
constructor(
    public cameraMode:string,
    public filter:string,
    public burstMode:boolean,
    public camNum:number,
    public reels:boolean
){}
    createReels(): void {
        return
    }
}

export{}