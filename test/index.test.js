const {Triangle,Circle,Square} = require("../lib/shapes")

 test('Triangle shape colour is blue', () => {
    const shape = new Triangle();
    shape.shapeColour = "blue";
    expect(shape.render()).toBe('<polygon points="140,10 300,190 10,190" style="fill:blue" />');
 });

 test('Circle shape colour is green', () => {
    const shape = new Circle();
    shape.shapeColour = "green";
    expect(shape.render()).toBe('<circle cx="150" cy="100" r="80" fill="green" />');
 });

 test('Square shape colour is red', () => {
    const shape = new Square();
    shape.shapeColour = "red";
    expect(shape.render()).toBe('<rect x="60" y="20" width="180" height="180" style="fill:red" />');
 });
 

 
 //Notes *disregard*
 
 // test('Circle is class with 3 properties', () => {
//    const example = new Circle()
//    expect(Object.keys(example).length).toBe(3)
// });

// test('Circle can be assigned property text as first argument', () => {
//     const example = new Circle("AAA")
//     expect(example.text).toBe("AAA")
//  });

//  test('Circle can be assigned property shapeColour as last and third argument', () => {
//     const example = new Circle("AAA", "Blue", "Green", "WHite")
//     expect(example.shapeColour).toBe("Green")
//  });