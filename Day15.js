//Day 15: Closures
    //Activity 1: Understanding Closures
        //Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
        function outerFunction() {
            let outerVariable = 'I am from outer function';
          
            function innerFunction() {
              console.log(outerVariable);
            }
          
            return innerFunction;
          }
          
          const myFunction = outerFunction();
          myFunction(); // Logs: I am from outer function

          //Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
          function createCounter() {
            let counter = 0;
          
            return {
              increment: function() {
                counter++;
              },
              getValue: function() {
                return counter;
              }
            };
          }
          
          const counter = createCounter();
          counter.increment();
          counter.increment();
          console.log(counter.getValue()); // Logs: 2
          
    
    //Activity 2: Practical Closures
        //Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call
        function idGenerator() {
            let lastId = 0;
          
            return function() {
              lastId++;
              return lastId;
            };
          }
          
          const generateId = idGenerator();
          console.log(generateId()); // Logs: 1
          console.log(generateId()); // Logs: 2
          console.log(generateId()); // Logs: 3
    
        //Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
        function createGreeter(name) {
            return function () {
                console.log(`Hello, ${name}`);
            }
        }
        const greetRk = createGreeter('RK');
        greetRk();

    //Activity 3: Closures in Loops
        //Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
        function createFunctions() {
            let functions = [];
          
            for (let i = 0; i < 5; i++) {
              functions.push((function(index) {
                return function() {
                  console.log(index);
                };
              })(i));
            }
          
            return functions;
          }
          
          const funcs = createFunctions();
          funcs[0](); // Logs: 0
          funcs[1](); // Logs: 1
          funcs[2](); // Logs: 2
          funcs[3](); // Logs: 3
          funcs[4](); // Logs: 4
    

    //Activity 4: Module Pattern 
          //Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
          const itemManager = (function() {
            let items = [];
          
            return {
              addItem: function(item) {
                items.push(item);
              },
              removeItem: function(item) {
                items = items.filter(i => i !== item);
              },
              listItems: function() {
                return items;
              }
            };
          })();
          
          itemManager.addItem('Apple');
          itemManager.addItem('Banana');
          console.log(itemManager.listItems()); // Logs: ['Apple', 'Banana']
          itemManager.removeItem('Apple');
          console.log(itemManager.listItems()); // Logs: ['Banana']

    
    //Activity 5: Memoization
        // Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
        function memoize(fn) {
            let cache = {};
            return function(...args) {
              let key = JSON.stringify(args);
              if (cache[key]) {
                return cache[key];
              }
              let result = fn(...args);
              cache[key] = result;
              return result;
            };
          }
          
          const slowFunction = (num) => {
            console.log('Calculating...');
            return num * 2;
          };
          
          const fastFunction = memoize(slowFunction);
          
          console.log(fastFunction(5)); // Logs: Calculating... 10
          console.log(fastFunction(5)); // Logs: 10 (from cache)


        //Task 8: Create a memoized version of a function that calculates the factorial of a number.
        function memoize(fn) {
            let cache = {};
            return function(...args) {
              let key = args.join(',');
              if (cache[key]) {
                return cache[key];
              }
              let result = fn(...args);
              cache[key] = result;
              return result;
            };
          }
          
          const factorial = memoize(function(n) {
            if (n === 0 || n === 1) {
              return 1;
            }
            return n * factorial(n - 1);
          });
          
          console.log(factorial(5)); // Logs: 120
          console.log(factorial(6)); // Logs: 720
          
          
          