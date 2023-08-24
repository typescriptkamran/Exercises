# exercise9
This TypeScript code is a simple program that stores a favorite number in a variable and then creates a message using that variable to reveal the favorite number. Finally, it prints the message to the console.

Here's a breakdown of the code:

1. `let favoriteNumber: number = 7`: This line declares a variable named `favoriteNumber` of type `number` and assigns it the value `7`. In TypeScript, you can explicitly specify the data type of a variable using the colon (`:`) syntax.

2. `let message: string = `My favorite number is ${favoriteNumber}`;`: This line declares another variable named `message` of type `string`. The value of the `message` variable is created using a template literal (backticks: \`), which allows us to embed expressions inside the string using `${...}`. In this case, the template literal includes the `favoriteNumber` variable using `${favoriteNumber}`, resulting in the message being formed with the favorite number.

3. `console.log(message)`: This line uses the `console.log()` function to print the `message` variable to the console. The message will be displayed as "My favorite number is 7" in this case, as the `favoriteNumber` variable was set to `7` earlier.

So, when you run this TypeScript code, it will print the message "My favorite number is 7" to the console. If you change the value of the `favoriteNumber` variable, the message will be updated accordingly when the program is executed.
