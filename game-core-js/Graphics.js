var MAX_SHAPE_SIZE_OF_POINT = 3;

class Graphics{
    constructor(graphic){
        this.graphic = graphic;
    }

    drawRectangle = (point, size, color) => {

        this.graphic.fillStyle = color;
        var rect = new Path2D();
        rect.rect(point.x, point.y, size.width, size.height);
        this.graphic.fill(rect);
        return rect;
    }

    drawShape = (arrayPoint, color) => {
        this.graphic.fillStyle = color;

        var shape = new Path2D();

        this.graphic.beginPath();

        for(let i = 0; i < arrayPoint.length; i++){
            if(i == 0){
                shape.moveTo(arrayPoint[i].x, arrayPoint[i].y);
            } else {
                shape.lineTo(arrayPoint[i].x, arrayPoint[i].y);
            }
        }

        this.graphic.closePath();
        this.graphic.fill(shape);

        return shape;
    }

    



}

export default Graphics;