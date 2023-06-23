class Shape{
    constructor (text,textcolour,shape,shapecolour){
        this.text = text;
        this.textcolour = textcolour;
        this.shape = shape;
        this.shapecolour = shapecolour;
        }
    };

class Triangle extends Shape{
    constructor(text,textcolour,shape,shapecolour){
        super(text,textcolour,shapecolour),
        const shape = 'polygon'
        this.shape = shape
    }
}

function generateLogo({text,textcolour,shape,shapecolour}){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <${shape} cx="150" cy="100" r="80" fill="${shapecolour}" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textcolour}">${text}</text>
  
  </svg>`
}


module.exports = generateLogo