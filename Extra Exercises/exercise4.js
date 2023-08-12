"use strict";
/* Exercise 4:   Write a program that checks if a given number is even or odd.
*/
const evenOrOdd = (num) => {
    if (num % 2 === 0) {
        return console.log(`${num} is an even number`);
    }
    else {
        return console.log(`${num} is not an odd number`);
    }
};
evenOrOdd(2);
evenOrOdd(45657);
