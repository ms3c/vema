// 1. Defining variables with explicit types
let userName: string = "Alice";
let userAge: number = 30;
let isSubscriber: boolean = true;

// 2. Creating a function with typed parameters and a typed return value
function greetUser(name: string, age: number): string {
    return `Hello ${name}! You are ${age} years old.`;
}

// 3. Executing the code
const greetingMessage = greetUser(userName, userAge);
console.log(greetingMessage);