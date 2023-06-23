const questions = [{
    type:'input',
    name: 'text',
    message: 'What are the three characters in your logo?'
},{
    type:'input',
    name: 'textcolour',
    message: 'What is the colour of your text?'
},{
    type:'list',
    name: 'shape',
    message: 'What is the shape of your logo?',
    choices: ['circle','triangel','square']
},{
    type:'input',
    name: 'shapecolour',
    message: 'What is the colour of the shape?'
}]

module.exports = questions