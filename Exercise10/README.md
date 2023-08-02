# exercise10
In the provided code, comments are used to explain and document the different parts of the program. Comments are used to provide information to other developers (and to yourself in the future) about the purpose and functionality of the code. Here's how comments are used in this code:

1. The block comment at the beginning provides an overview of the program, including the author's name and the date. It also describes the purpose of the program, which is to change the name cases into lower, upper, and title case.

2. Line comments are used throughout the code to describe each step or action being taken:

   - `// Taking name in a variable`: This comment indicates that a variable named `personName` is being used to store the input name.

   - `// this will change name to lower case`: This comment explains that the `toLowerCase()` function is used to convert the name to lowercase, and the result is stored in the `lowercaseName` variable.

   - `// this will change it to upper case`: This comment indicates that the `toUpperCase()` function is used to convert the name to uppercase, and the result is stored in the `uppercaseName` variable.

   - `// this will split the name from spaces into an array of words`: This comment describes that the `split()` function is used to break the name into an array of words using spaces as separators, and the result is stored in the `words` array.

   - The subsequent comments inside the `for` loop explain the steps involved in converting the name to title case using a loop.

3. The final part of the code contains three `console.log()` statements. Although not explicitly commented, these are used to display the results of the program to the console.

By adding comments, the code becomes more understandable to others who might read it later or for the original author who might revisit the code after a long time. It helps in providing context and clarifying the purpose of different sections of the code.
