const {Circle} = require("../lib/shapes")

test('Circle is class with 3 properties', () => {
   const example = new Circle()
   expect(Object.keys(example).length).toBe(3)
});

test('Circle can be assigned property text as first argument', () => {
    const example = new Circle("AAA")
    expect(example.text).toBe("AAA")
 });

 test('Circle can be assigned property shapeColour as last and third argument', () => {
    const example = new Circle("AAA", "Blue", "Green", "WHite")
    expect(example.shapeColour).toBe("Green")
 });