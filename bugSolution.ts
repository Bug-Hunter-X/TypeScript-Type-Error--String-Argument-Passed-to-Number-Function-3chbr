function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

function printNumbersSafe(n: number | string): void {
  const num = typeof n === 'string' ? parseInt(n, 10) : n;
  if (isNaN(num)) {
    console.error('Invalid input: Not a number');
    return;
  }
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
}

printNumbers(5); // Works fine
printNumbersSafe("5"); // Works fine
printNumbersSafe("abc"); // Prints an error message