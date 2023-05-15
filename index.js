const inquirer = require("inquirer");
const fs = require("fs");

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
        // depending on user answer, circle, triagle, or square
        // if user select circle
        if(shape === circle)
        const circle = new Circle();
        // pass variable into setColor  
        circle.setColor()
        // set ins of logo
        // pass circle ins into logo
        
  
        fs.writeFile("logo.svg", , (err) =>
          err
            ? console.log(err)
            : console.log("Successfully created SVG.html file!")
        );
      });
  }
  
  init();