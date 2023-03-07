const shape = require("./shape");

class Square extends Shape {
  constructor(numebrOfSides, color, length) {
    super(numebrOfSides, color);
    this.length = length;
  }

  render() {
    return "This is a sqaure";
  }
}
module.exports = Square;
