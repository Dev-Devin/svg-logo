const Shape = require("./Shape");

class Triangle extends Shape {
  constructor(color, charLength) {
    super(color, charLength);
    this.length = length;
  }

  render() {
    return "This is a Triangle";
  }
}
module.exports = Triangle;
