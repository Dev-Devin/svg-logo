class Shape {
  constructor(color) {
    this.color = color;
    this.charLength = character;
  }
  setColor(color) {
    this.color = color;
  }

  // class Circle extends Shape {
  //   render() {
  //     return '<circle cx="150" cy="100" r="80" fill="${this.color}" />';
  //   }
  // }

  // class Square extends Shape {
  //   render() {
  //     return '<rect x="10" y="10" width="30" height="30" <polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180" fill="${this.color}" />';
  //   }
  // }

  // class Triangle extends Shape {
  //   render() {
  //     return '<polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180" fill="${this.color}"/>';
  //   }
  // }
  getColor() {
    return this.color;
  }
  getcharLength() {
    return this.charLength;
  }
}
module.exports = Shape;
