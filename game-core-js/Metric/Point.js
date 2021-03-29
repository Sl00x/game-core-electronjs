class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    moveLeft = (value) => {
        this.x -=  value;
    }
    moveRight = (value) => {
        this.x +=  value;
    }
    moveUp = (value) => {
        this.y -= value;
    } 
    moveDown = (value) => {
        this.y += value;
    }   
}

export default Point;