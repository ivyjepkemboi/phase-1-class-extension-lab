// Define the Polygon class
class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    // Getter method to count the number of sides
    get countSides() {
      return this.sides.length;
    }
  
    // Getter method to calculate the perimeter
    get perimeter() {
      return this.sides.reduce((sum, side) => sum + side, 0);
    }
  }
  
  // Define the Triangle class inheriting from Polygon
  class Triangle extends Polygon {
    // Use constructor to inherit sides from Polygon
    constructor(sides) {
      super(sides);
    }
  
    // Getter method to check if the triangle is valid
    get isValid() {
      const [a, b, c] = this.sides;
      return (a + b > c) && (a + c > b) && (b + c > a);
    }
  }
  
  // Define the Square class inheriting from Polygon
  class Square extends Polygon {
    // Use constructor to inherit sides from Polygon
    constructor(sides) {
      super(sides);
    }
  
    // Getter method to check if the square is valid
    get isValid() {
      return this.sides.every(side => side === this.sides[0]);
    }
  
    // Getter method to calculate the area of the square
    get area() {
      return this.sides[0] ** 2;
    }
  }
  
  
  

  