class Core{
    constructor(title){
        this.title = title;
        document.title = this.title;

    }
    
    createScene = () => {
        var scene = document.createElement("canvas");

        document.body.style.margin = 0;
        document.body.style.padding = 0;
        document.body.style.overflow = "hidden";

        document.body.appendChild(scene);

        return scene;
    }
}

export default Core;