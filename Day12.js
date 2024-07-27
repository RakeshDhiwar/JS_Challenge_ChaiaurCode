//Day 12: Error Handling
    //Activity 1: Basic Error handling with Try-Catch
        
        function divideNumbers(a, b) {
            let result;
            try {
                // Attempt to divide the numbers
                result = a / b;
                if (b === 0) {
                    throw new Error("Division by zero is not allowed.");
                }
            } catch (error) {
                // Handle errors
                console.log(`Error: ${error.message}`);
                result = null;
            } finally {
                // Always execute this block
                console.log("Execution complete.");
            }
        
            return result;
        }
        
        // Example usage
        divideNumbers(10, 0);


    //Custom Error Objects
                // Custom error class extending the built-in Error class
        class CustomError extends Error {
            constructor(message) {
                super(message);
                this.name = "CustomError";
            }
        }
        // Function that throws an instance of CustomError

        function riskyOperation() {
            try {
                // Intentionally throw a custom error
                throw new CustomError("Something went wrong in the risky operation.");
            } catch (error) {
                if (error instanceof CustomError) {
                    // Handle the custom error
                    console.log(`Custom error caught: ${error.message}`);
                } else {
                    // Handle any other types of errors
                    console.log(`An unexpected error occurred: ${error.message}`);
                }
            } finally {
                // Always execute this block
                console.log("Execution of riskyOperation complete.");
            }
        }

        // Example usage
        riskyOperation();

                
            



        // Custom error class for validation errors
                class ValidationError extends Error {
                    constructor(message) {
                        super(message);
                        this.name = "ValidationError";
                    }
                }

                // Function to validate user input
                function validateInput(name, age) {
                    try {
                        // Check if the name is a non-empty string
                        if (typeof name !== 'string' || name.trim() === '') {
                            throw new ValidationError("Name must be a non-empty string.");
                        }

                        // Check if the age is a number and greater than zero
                        if (typeof age !== 'number' || age <= 0) {
                            throw new ValidationError("Age must be a positive number.");
                        }

                        // If all validations pass
                        console.log("Input is valid:", { name, age });
                    } catch (error) {
                        if (error instanceof ValidationError) {
                            // Handle validation errors
                            console.log(`Validation error: ${error.message}`);
                        } else {
                            // Handle any other types of errors
                            console.log(`An unexpected error occurred: ${error.message}`);
                        }
                    } finally {
                        // Always execute this block
                        console.log("Validation complete.");
                    }
                }

    
    //Activity 4: Error Handling in Promises
        // Simulating an asynchronous operation to fetch user data
                function fetchUserData(userId) {
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            // Simulate a network failure or an invalid user ID
                            const isNetworkError = Math.random() > 0.7;
                            const isInvalidUser = userId < 0;

                            if (isNetworkError) {
                                reject(new Error("Network error occurred!"));
                            } else if (isInvalidUser) {
                                reject(new Error("Invalid user ID!"));
                            } else {
                                // Simulate successful fetch
                                resolve({ id: userId, name: "John Doe" });
                            }
                        }, 1000);
                    });
                }

                // Using .then() and .catch() for error handling
                fetchUserData(1)
                    .then(user => {
                        console.log("User data:", user);
                    })
                    .catch(error => {
                        console.error("Error using .then()/.catch():", error.message);
                    });

                // Using async/await with try-catch for error handling
                async function getUserData(userId) {
                    try {
                        const user = await fetchUserData(userId);
                        console.log("User data using async/await:", user);
                    } catch (error) {
                        console.error("Error using async/await:", error.message);
                    }
                }

                // Example usage
                getUserData(-1); // Using an invalid user ID to trigger an error

    

    //Activity 5: Graceful Error Handling in Fetch
            async function fetchData(url) {
                try {
                    // Start the fetch request
                    const response = await fetch(url);
            
                    // Check if the response status indicates an error
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
            
                    // Parse the response data
                    const data = await response.json();
            
                    // Use the fetched data
                    console.log("Fetched data:", data);
                } catch (error) {
                    // Handle network errors or any other errors
                    console.error("An error occurred:", error.message);
            
                    // Optionally, you can show a user-friendly message or perform some fallback action
                    alert("Sorry, something went wrong. Please try again later.");
                } finally {
                    // Clean-up tasks or final actions
                    console.log("Fetch operation complete.");
                }
            }
            
            // Example usage
            const apiUrl = "https://jsonplaceholder.typicode.com/posts";
            fetchData(apiUrl);
            



                                        