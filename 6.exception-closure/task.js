//Задание 1

function parseCount(value) {
    let parseValue = Number.parseFloat(value);

    if (isNaN(parseValue)) {
        throw new Error("Невалидное значение");
    }

    return parseValue;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch(err) {
        return err;
    }   
}

//Задание 2

class Triangle {
    constructor(firstSide, secondSide, thirdSide) {

        try {
            if ((firstSide + secondSide) < thirdSide) {
                throw new Error("Треугольник c такими сторонами не существует");
            } else {
                this.firstSide = firstSide;
                this.secondSide = secondSide;
                this.thirdSide = thirdSide;
                this.perimeter = 0;
                this.area = 0;
            }   
        } catch(err) {
            return err;
        }        
    }

    set perimeter(perimeter) {
        this._perimeter = this.firstSide + this.secondSide + this.thirdSide;
    }
    get perimeter() {
        return this._perimeter;
    }

    set area(area) {
        let halfPerimeter = this._perimeter / 2;
        let fullArea = Math.sqrt(halfPerimeter * (halfPerimeter - this.firstSide) * (halfPerimeter - this.secondSide) * (halfPerimeter - this.thirdSide));
        this._area = Number.parseFloat(fullArea.toFixed(3));
    }
    get area() {
        return this._area;
    }

}

function getTriangle (firstSide, secondSide, thirdSide) {
    return new Trinagle (firstSide, secondSide, thirdSide);
}

let a = new Triangle(1, 1, 1);
console.log(a);