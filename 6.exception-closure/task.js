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

            if (!(firstSide + secondSide > thirdSide
                && firstSide + thirdSide > secondSide
                && secondSide + thirdSide > firstSide))  {
                throw new Error("Треугольник с такими сторонами не существует");
            } 
            
            this.firstSide = firstSide;
            this.secondSide = secondSide;
            this.thirdSide = thirdSide;          
    }

    get perimeter() {
        return this.firstSide + this.secondSide + this.thirdSide;
    }

    get area() {
        const halfPerimeter = this.perimeter / 2;
        return Math.round(Math.sqrt(halfPerimeter * (halfPerimeter - this.firstSide)
        * (halfPerimeter - this.secondSide) * (halfPerimeter - this.thirdSide)) * 1000) / 1000;
    }
}
  

function getTriangle(firstSide, secondSide, thirdSide) {
    try {
        return new Triangle(firstSide, secondSide, thirdSide);
    } catch (error) {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует";
              },
              get area() {
                return "Ошибка! Треугольник не существует";
              },
          };
    }   
}
