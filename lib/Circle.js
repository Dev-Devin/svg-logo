const Shape = require("./Shape");

class Circle extends Shape {
  constructor(color, text) {
    super(color, text);
    // this.length = length;
  }

  // render() {
  //   return "This is a Circle";
  // }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="80" fill="${this.color}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">${this.text}</text> </svg> `;
  }
}

module.exports = Circle;
