"use strict";
/*
Exercise 5:  Write a program that determines if a person is eligible to vote based on their age.

*/
const votingEligibility = (age) => {
    if (age >= 21) {
        return console.log(`Age is ${age}, which is eligible to vote.`);
    }
    else {
        return console.log(`Age is ${age}, Which is not eligible to vote.`);
    }
};
votingEligibility(20);
votingEligibility(23);
votingEligibility(18);
