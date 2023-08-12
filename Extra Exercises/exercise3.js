"use strict";
/*
Exercise 3:  Write a program that checks if a given number is positive, negative, or zero.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const checkNumber = (num) => {
    if (num > 0) {
        console.log(`Number ${num} is Positive`);
    }
    else if (num < 0) {
        console.log(`Number ${num} is Negative`);
    }
    else
        return console.log(`Number is Zero`);
};
checkNumber(1);
checkNumber(-6);
checkNumber(0);
