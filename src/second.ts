interface video {

    videos : string;
    shorts:string;
    trending: number;

}
interface story{
    createStory (): void;
}


class  youtube implements video , story {

    constructor(   public videos : string,
        public shorts :string,
        public trending : number){
this.videos = videos;
this.shorts = shorts;
this.trending = trending;

        }

        createStory (): void{


            console.log('Creating story');
            
        }

}


