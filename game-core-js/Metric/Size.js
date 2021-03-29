class Size {
    constructor(width=50, height=50){
        this.width = width;
        this.height = height;
    }

    SquareSize = (factorSize) => {
        this.width = factorSize;
        this.height = factorSize;
    }

    Radius = (radius) => {
        this.raidus = radius;
    }
}

export default Size;