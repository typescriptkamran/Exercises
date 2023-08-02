# exercise6
This TypeScript code demonstrates the concept of stripping whitespace characters from a person's name using the `trim()` method. Here's a step-by-step explanation of the code:

1. The code starts by declaring a variable `personName` of type `string` and assigns it a value that includes whitespace characters at the beginning and end of the name. The whitespace characters include tabs (`\t`) and newlines (`\n`) to create whitespace around the name. The name itself is "Muhammad Kamran".

2. The code then uses `console.log()` to print the original name (`personName`) with the surrounding whitespace. The template literal syntax (using backticks) is used to embed the value of `personName` in the output string.

3. Next, a new variable `strippedName` is declared and assigned the value of `personName.trim()`. The `trim()` method is a built-in method available for strings in TypeScript (and JavaScript). It removes leading and trailing whitespace characters (spaces, tabs, newlines, etc.) from the original string and returns a new string with the whitespace stripped.

4. Finally, another `console.log()` statement is used to print the `strippedName`, which contains the person's name without the surrounding whitespace.

Let's see the output of this code:

```
Name with whitespace: 	 

 Muhammad Kamran 	 

Stripped name: Muhammad Kamran
```

As you can see, the first output displays the original name with the whitespace around it (tabs and newlines), while the second output displays the name after stripping the whitespace using the `trim()` method.
