const Shape = require("./Shape");

class Triangle extends Shape {
  constructor(color, text) {
    super(color, text);
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">${this.text}</text> </svg> `;
  }
}
module.exports = Triangle;
