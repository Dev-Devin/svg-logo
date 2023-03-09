const inquirer = require("inquirer");
const fs = require("fs");
const Circle = require("./lib/Circle");
const Square = require("./lib/Square");
const Triangle = require("./lib/Triangle");

function askShape() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "enter up to three characters",
        name: "character",
      },
      {
        type: "input",
        message: "choose text color",
        name: "textColor",
      },
      {
        type: "list",
        message: "choose from Circle, Triangle, or Square",
        name: "shapes",
        choices: ["circle", "square", "triangle"],
      },
      {
        type: "input",
        message: "shapes color",
        name: "shapeColor",
      },
    ])
    .then((response) => {
      console.log("this is my response", response);
      let shape;
      switch (response.shapes) {
        case "circle":
          shape = new Circle();
          break;

        case "square":
          shape = new Square();
          break;

        case "triangle":
          shape = new Triangle();
          break;
      }
      shape.setColor(response.shapeColor);
      shape.setText(response.character);
      console.log("set color");
      createFile("./logo.svg", shape.render());
    });
}

askShape();

function createFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Successfully created SVG logo!")
  );
}
