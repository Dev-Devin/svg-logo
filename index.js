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
        message: "choose color",
        name: "color",
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
    });
}
