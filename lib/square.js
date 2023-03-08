const Shape = require("./Shape");

class Square extends Shape {
  constructor(color, charLength) {
    super(color, charLength);
    this.length = length;
  }

  render() {
    return "This is a square";
  }
}
module.exports = Square;
