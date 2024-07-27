//Day 13: Modules
    //Activity 1: Creating and Exporting Modules
        //Task 1: Create a module that exports a function to add two numbers.
        // add.js
            function add(a, b) {
                return a + b;
            }

            export { add };

        // main.js
            import { add } from './add.js';

            const sum = add(5, 3);
            console.log(`Sum: ${sum}`);

        
        //Task 2: Create a module that exports an object representing a person with properties and methods.
        // person.js
            const person = {
                name: 'John Doe',
                age: 30,
                greet() {
                    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
                }
            };

            export { person };


    //Activity 2: Named and Default Exports
            //Task 3: Create a module that exports multiple functions using named exports.
            // mathUtils.js
            function multiply(a, b) {
                return a * b;
            }

            function divide(a, b) {
                if (b === 0) {
                    throw new Error("Division by zero!");
                }
                return a / b;
            }

            export { multiply, divide };


            //Task 4: Create a module that exports a single function using default export.
            // subtract.js
            function subtract(a, b) {
                return a - b;
            }

            export default subtract;


    //Activity 3: Importing Entire Modules
        //Task 5: Create a module that exports multiple constants and functions.
        // constants.js
        export const PI = 3.14;
        export const E = 2.71;

        export function circleArea(radius) {
            return PI * radius * radius;
        }

        export function naturalLog(base) {
            return Math.log(base) / Math.log(E);
        }

    
    //Activity 4: Using Third-Party Modules
        //Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.

        // lodashExample.js
        import _ from 'lodash';

        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const evens = _.filter(numbers, num => num % 2 === 0);

        console.log('Even numbers:', evens);


        //Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
        // axiosExample.js
        import axios from 'axios';

        async function fetchData() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                console.log('Data fetched:', response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();

    



