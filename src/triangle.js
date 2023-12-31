export default function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

Triangle.prototype.checkType = function () {
  if (this.side1 <= 0 || this.side2 <= 0 || this.side3 <= 0) {
    return "not a triangle";
  } else if (
    this.side1 + this.side2 <= this.side3 ||
    this.side1 + this.side3 <= this.side2 ||
    this.side2 + this.side3 <= this.side1
  ) {
    return "not a triangle";
  } else if (this.side1 === this.side2 && this.side1 === this.side3) {
    return "equilateral triangle";
  } else if (this.side1 === this.side2 || this.side1 === this.side3 || this.side2 === this.side3) {
    return "isosceles triangle";
  } else {
    return "scalene triangle";
  }
};
