const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')

const questions = require('./lib/questions')
const {Triangle,Circle,Square} = require('./lib/shapes')

async function init() {
    const response = await inquirer.prompt(questions)
    let shape
    switch (response.shape) {
        case "triangle":
            shape = new Triangle(response.text, response.textColour, response.shapeColour)
            break;
        case "circle":
            shape = new Circle(response.text, response.textColour, response.shapeColour)
            break;
        default:
            shape = new Square(response.text, response.textColour, response.shapeColour)
            break;
    }
    const fileName = `${response.text}.svg`;
    const filePath = path.join('examples',fileName)
    fs.writeFileSync(filePath, shape.renderSVG())

}

init()