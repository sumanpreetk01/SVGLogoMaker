class Shape {
    constructor(text, textcolour, shapecolour) {
        this.text = text;
        this.textColour = textcolour;
        this.shapeColour = shapecolour;
    }
    renderSVG() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        ${this.render()}
  
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColour}">${this.text}</text>
      
      </svg>`
    }
};

class Triangle extends Shape {
    constructor(text, textcolour, shapecolour) {
        super(text, textcolour, shapecolour)
    }
    render() {
        return `<polygon points="150,10 300,190 20,190" style="fill:${this.shapeColour}" />`
    }
}

class Circle extends Shape {
    constructor(text, textcolour, shapecolour) {
        super(text, textcolour, shapecolour)
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColour}" />`
    }
}

class Square extends Shape {
    constructor(text, textcolour, shapecolour) {
        super(text, textcolour, shapecolour)
    }
    render() {
        return `<rect x="60" y="20" width="180" height="180"
        style="fill:${this.shapeColour}" />`
    }
}


module.exports = {Triangle,Circle, Square}