const questions = [{
    type:'input',
    name: 'text',
    message: 'What are the three characters in your logo?'
},{
    type:'input',
    name: 'textColour',
    message: 'What is the colour of your text?'
},{
    type:'list',
    name: 'shape',
    message: 'What is the shape of your logo?',
    choices: ['circle','triangle','square']
},{
    type:'input',
    name: 'shapeColour',
    message: 'What is the colour of the shape?'
}]

module.exports = questions