abstract class takePhoto{
    constructor(public cameraMode:string,public filter:string){}
    abstract getSepia():void //it will return error if it is not started with keyword abstract as it is not defined //but now it shoud must be defined in class which is inherited and expected to have an object
    getReelTime():number{  //in interface we can only declare methods but in  abstract class we can define it
        //some complex calc
        return 8;
    }
}

// const p=new takePhoto("rear","paris") //abstract class don't have objects they are used for inheritance purpose only  //but we can create object of class which inherited it

class Instagram extends takePhoto{  //inheritance
    constructor(
        public cameraMode:string,
        public filter :string,
        public burst :string //it will create error if we not use super as it is inherited from abstract class
    ){
        super(cameraMode,filter)
    }
    getSepia(): void {
        
    }
}
const p=new Instagram("test","test","test");
p.getReelTime();
export{}