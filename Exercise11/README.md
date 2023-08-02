# exercise11
## TypeScript - Printing Friends' Names

This TypeScript code demonstrates how to store the names of friends in an array called `names` and then print each person's name by accessing each element in the list one at a time.

```typescript

// Names: Store the names of a few of your friends in an array called names.
let names: string[] = ['Muhammad', 'Ali', 'Javaid', 'Ahmed'];

// Print each person’s name by accessing each element in the list, one at a time.
console.log(`1st name from the list: ${names[0]}`);
console.log(`2nd name from the list: ${names[1]}`);
console.log(`3rd name from the list: ${names[2]}`);
console.log(`4th name from the list: ${names[3]}`);
```

### Explanation

In this TypeScript code, we perform the following tasks:

1. **Array Declaration**: We declare an array called `names` using TypeScript's array syntax. The `string[]` type annotation ensures that the array can only contain elements of type string. We initialize the array with the names of a few friends.

2. **Printing Friends' Names**: We then print each person's name from the `names` array. To do this, we access each element in the array one at a time using their index. The indices start from 0, so the first name is accessed using `names[0]`, the second name with `names[1]`, and so on.

3. **Console Output**: The `console.log()` function is used to display the output in the console. We use string interpolation (`${...}`) to insert the names retrieved from the `names` array into the output string.

