const Shape = require("./Shape");

class Circle extends Shape {
  constructor(color, charLength) {
    super(color, charLength);
    // this.length = length;
  }

  // render() {
  //   return "This is a Circle";
  // }

  render() {
    return '<circle cx="150" cy="100" r="80" fill="${this.color}" />';
  }
}

module.exports = Circle;
