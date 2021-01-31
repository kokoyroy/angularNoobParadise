export class Recipe {
    public name: string;
    public description: string;
    public image: string;

    //constuctor
    constructor(name: string, description: string, imagePath: string) {
        this.name = name;
        this.description = description;
        this.image = imagePath
    }
}
