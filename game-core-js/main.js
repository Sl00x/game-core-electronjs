import Scene from './Scene.js';
import Graphics from './Graphics.js';
import Point from './Metric/Point.js';
import Size from './Metric/Size.js';
import Rectangle from './Graphics/Rectangle.js';
import Color from './Color.js';

const scene = new Scene();
const graphic = new Graphics(scene.graphics);

var box = new Rectangle(new Point(0, 0), new Size(50, 50), new Color().fromRGBA(100, 0, 0 ,1), graphic);
box.draw();

scene.background(35);

scene.draw(() => {
    box.point.moveRight(5);
    box.draw();
});
