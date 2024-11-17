function determineFizzBuzz(num: number): string {
    if (num % 3 === 0 && num % 5 === 0) {
        return "fizzbuzz";
    } else if (num % 3 === 0) {
        return "fizz";
    } else if (num % 5 === 0) {
        return "buzz";
    } else {
        return num.toString();
    }
}

function printFizzBuzz(): void {
    for (let i = 1; i <= 100; i++) {
        console.log(determineFizzBuzz(i));
    }
}

// Run the program
printFizzBuzz();
