abstract class TakePhoto {

    constructor (
        public cameraMode : string,
        public filter : string,
    ){}
    abstract getSepia():void
    
    getReelTime(): number{
        //calucation
        return 5;
    }
    
}

class Instagram extends TakePhoto{
    constructor(
        public cameraMode :string,
        public filter :string,
        public story :string

    ){
        super(cameraMode, filter);
    }

    getSepia():void{
        console.log('Getting sepia filter');
        
    }
}
