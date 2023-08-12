"use strict";
/*
Exercise 2: Writ(e a program that takes input and calculates the volume of a cube.
side length = x
volume of cube = x*x*x
*/
Object.defineProperty(exports, "__esModule", { value: true });
const cubeVolume = (sideLength) => {
    return console.log(`Volume of Cube is: ${sideLength ** 3}`);
};
cubeVolume(9);
