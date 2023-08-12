// Exercise 1:  Write a program that calculates the area of a rectangle.
// Area of Rectangle = length * width

let rectangleArea = (width: number, length: number) =>
{

    return console.log(`Area of rectangle: ${length*width}`)

}
let len: number = 5
let width: number = 10

rectangleArea(len, width)
rectangleArea(10, 20)

export{};