

export class Recipe{
    public name:string;
    public description: string;
    public imagePath: string;
    public clothingbrand: string;

    constructor(name:string,   clothingbrand:string , description:string,  imagePath:string,){
        this.name = name
        this.description = description
        this.imagePath = imagePath
        this.clothingbrand = clothingbrand
    } 
}