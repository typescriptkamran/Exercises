"use strict";
// Exercise 1:  Write a program that calculates the area of a rectangle.
// Area of Rectangle = length * width
Object.defineProperty(exports, "__esModule", { value: true });
let rectangleArea = (width, length) => {
    return console.log(`Area of rectangle: ${length * width}`);
};
let len = 5;
let width = 10;
rectangleArea(len, width);
rectangleArea(10, 20);
