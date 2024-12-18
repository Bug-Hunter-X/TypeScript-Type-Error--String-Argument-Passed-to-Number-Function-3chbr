function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // Works fine
printNumbers("5"); // Type error: Argument of type 'string' is not assignable to parameter of type 'number'.