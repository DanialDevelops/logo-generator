const inquirer = require("inquirer");
const fs = require("fs");
const Logo= require("./lib/logo.js");
const { 
  Square,
  Circle,
  Triangle}= require("./lib/shapes.js");

const questions = [
    {
      type: "input",
      name: "text",
      message: "What are the 3 letters you would like to enter for your logo",
    },
    {
      type: "input",
      name: "textColor",
      message: "What color would you like the text to be?",
    },
    {
      type: "list",
      choices: ["circle", "triangle", "square"],
      name: "shape",
      message: "What shape would you like your logo to be",
    },
    {
      type: "input",
      name: "color",
      message: "What color would you like the logo to be?",
    },
  ];

  function init() {
    inquirer
      .prompt(questions)
  
      .then((answers) => {
        let shape;
        switch (answers.shape) {
          case "circle":
            shape = new Circle();
            break;
          case "triangle":
            shape = new Triangle();
            break;
          case "square":
            shape = new Square();
            break;
          default:
            console.log("Invalid shape selected");
            return;
        }

        shape.setColor(answers.color);
        
        const logo = new Logo(answers.text, answers.textColor, shape);
        logo.setText(answers.textColor, answers.text);
        logo.setShape(shape);

        const svgContent = logo.render();
        
  
        fs.writeFile("logo.svg",svgContent , (err) =>
          err
            ? console.log(err)
            : console.log("Successfully created SVG.html file!")
        );
      });
  }
  
  init();