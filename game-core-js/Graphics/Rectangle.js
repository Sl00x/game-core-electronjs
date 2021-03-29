class Rectangle{
    constructor(point, size, color, graphic){
        this.point = point;
        this.size = size;
        this.color = color;
        this.graphic = graphic;
        this.rectangle = null;
    }

    draw = () => {
        this.rectangle = this.graphic.drawRectangle(this.point, this.size, this.color);
    }


}

export default Rectangle