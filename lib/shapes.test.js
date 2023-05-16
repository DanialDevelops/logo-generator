const { Square, Circle, Triangle } = require("./shapes.js");

describe("Triangle", () => {
  it("should render a triangle with the specified color", () => {
    const triangle = new Triangle();
    triangle.setColor("blue");
    expect(triangle.render()).toEqual(
      `<polygon points="100,20 180,180 20,180" fill="blue"/>`
    );
  });
});

describe("Circle", () => {
  it("should render a circle with the specified color", () => {
    const circle = new Circle();
    circle.setColor("red");
    expect(circle.render()).toEqual(
      `<circle cx="100" cy="100" r="80" r="50" fill="red"/>`
    );
  });
});

describe("Square", () => {
  it("should render a square with the specified color", () => {
    const square = new Square();
    square.setColor("green");
    expect(square.render()).toEqual(
      `<rect x="20" y="20" width="160" height="160" fill="green"/>`
    );
  });
});






