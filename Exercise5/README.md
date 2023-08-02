# exercise5

The provided code is written in TypeScript and it aims to display a famous quote along with the name of its author. Let's break down the code step by step:

Declaring the variables:
typescript
Copy code
let famous_person: string = "Quid e Azam";
In this line, a variable named famous_person is declared and assigned the value "Quid e Azam". This variable will store the name of the famous person who said the quote.

Composing the message:
typescript
Copy code
let message: string = famous_person + ' once said, “Expect the best, prepare for the worst.”';
Here, a new variable named message is declared and assigned a value by combining the content of the famous_person variable with the quote text. The + operator is used for string concatenation.

Printing the message:
typescript
Copy code
console.log(message);
Finally, the console.log() function is used to print the message variable to the console, which will display the famous quote and the name of its author.

The output of this code will be:

arduino
Copy code
Quid e Azam once said, “Expect the best, prepare for the worst.”
