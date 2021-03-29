import Core from './core.js';
import Color from './Color.js';

const core = new Core("Game Core JS");

class Scene {
    constructor(width=window.innerWidth, height=window.innerHeight){
        this.scene = core.createScene();
        this.scene.width = width;
        this.scene.height = height;
        this.graphics = this.scene.getContext("2d");
    }

    background = (color) => {
        this.scene.style.background = new Color().fromRGBA(color, color, color, 1);
    }

    draw = (callback) => {

        this.graphics.clearRect(0,0, this.scene.width, this.scene.height);

        requestAnimationFrame(this.draw.bind(this, callback));
        callback();
    }

    
}


export default Scene;