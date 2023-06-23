const inquirer = require('inquirer');
const fs = require('fs');

const questions = require('./lib/questions')
const generateLogo = require('./lib/shapes')

function init(){
    inquirer
    .prompt(questions)
    .then((response) >{
        fs.writeFileSync('logo.svg',generateLogo(response))
    })
}

init()