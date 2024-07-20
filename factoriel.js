function factorial(n) {
    // base case : if n is 0 or 1, return 1
    if (n === 0 || n === 1) {
        return 1;
    }

    // Recursive case : n * factorial(n-1)
    else {
        return n*factorial(n-1);
    }
}


// Test the factorial function

const num = 5
console.log(`Factorial of ${num} is : ${factorial(num)}`)