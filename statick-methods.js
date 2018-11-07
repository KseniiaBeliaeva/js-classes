class Square {
    constructor(_width) {
        this.width = _width;
        this.height = _width;
    }
    //a and b - are 2 different square instances
    static equals(a, b) {
        return a.width * a.height === b.width * b.height;
    }
    static isValidDimensions(width, height) {
        return width == height;
    }
}

let square1 = new Square(9);
let square2 = new Square(9);
// console.log(Square.isValidDimensions(5, 5));