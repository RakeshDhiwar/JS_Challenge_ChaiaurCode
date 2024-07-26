//Day 11: Promises and Async/Await
    //Activity 1: Understanding Promises
        //Task 1:
        const pr = new Promise((resolve) => {
            setTimeout(() => {
                resolve('This is the resolved message after 2 seconds');
            }, 2000); // 2000 milliseconds = 2 seconds
            })
        pr.then((message) => {
            console.log(message);
        });

        //Task 2:
        const pr2 = new Promise((reject) => {
            setTimeout(() => {
                reject('This is the resolved message after 2 seconds');
            }, 2000); // 2000 milliseconds = 2 seconds
            })
        pr2.catch((message) => {
            console.log(message);
        });

    
    //Activity 2: Chaining Promises
        //Task 3:
        function fetchData(step, delay) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(`Data from step ${step}`);
                }, delay);
            });
        }
        
        // Start the chain of promises
        fetchData(1, 1000)  // Simulate fetching data for step 1
            .then((data) => {
                console.log(data);  // Logs: Data from step 1
                return fetchData(2, 1500);  // Simulate fetching data for step 2
            })
            .then((data) => {
                console.log(data);  // Logs: Data from step 2
                return fetchData(3, 2000);  // Simulate fetching data for step 3
            })
            .then((data) => {
                console.log(data);  // Logs: Data from step 3
                return fetchData(4, 500);  // Simulate fetching data for step 4
            })
            .then((data) => {
                console.log(data);  // Logs: Data from step 4
                console.log('All steps completed');
            })
            .catch((error) => {
                console.error('An error occurred:', error);
            });

            
    //Activity 3: Using async/await
        //Task 4:
        async function logResolvedValue(promise) {
            try {
              const value = await promise;
              console.log(value);
            } catch (error) {
              console.error('Error:', error);
            }
          }
        
          
        //Task 5:
        async function logResolvedValue(promise) {
            try {
              const value = await promise;
              console.log(value);
            } catch (error) {
              console.error('Promise rejected:', error);
            }
          }
    
          
    //Activity 4: Fetching Data from an API
          //Task 6:
          // URL of the API endpoint
            const url = 'https://jsonplaceholder.typicode.com/posts/1';

            // Use fetch to get data
            fetch(url)
            .then(response => {
                // Check if the response is OK (status code 200-299)
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                // Parse the JSON data from the response
                return response.json();
            })
            .then(data => {
                // Log the data to the console
                console.log(data);
            })
            .catch(error => {
                // Log any errors that occurred during the fetch
                console.error('Fetch error:', error);
            });


        //Task 7:
        async function fetchDataAndLog() {
            const url = 'https://jsonplaceholder.typicode.com/posts/1';
          
            try {
              // Wait for the fetch request to complete and get the response
              const response = await fetch(url);
          
              // Check if the response is OK (status code 200-299)
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
          
              // Wait for the response to be parsed as JSON
              const data = await response.json();
          
              // Log the data to the console
              console.log(data);
            } catch (error) {
              // Log any errors that occurred during the fetch
              console.error('Fetch error:', error);
            }
          }
          
          // Call the async function
          fetchDataAndLog();
          
    

    //Activity 5: Concurrent Promises
          //Task 8:
          // Example promises
            const promise1 = Promise.resolve('First promise resolved');
            const promise2 = new Promise((resolve) => setTimeout(() => resolve('Second promise resolved after 2 seconds'), 2000));
            const promise3 = Promise.resolve('Third promise resolved');

            // Using Promise.all to wait for all promises to resolve
            Promise.all([promise1, promise2, promise3])
            .then((values) => {
                // Log all the resolved values
                console.log(values);
            })
            .catch((error) => {
                // Handle any error if one of the promises rejects
                console.error('Promise.all rejected with error:', error);
            });

        //Task 9:
        // Example promises
            const promise11 = new Promise((resolve) => setTimeout(() => resolve('First promise resolved after 3 seconds'), 3000));
            const promise21 = new Promise((resolve, reject) => setTimeout(() => reject('Second promise rejected after 2 seconds'), 2000));
            const promise31 = new Promise((resolve) => setTimeout(() => resolve('Third promise resolved after 1 second'), 1000));

            // Using Promise.race to get the first settled promise
            Promise.race([promise11, promise21, promise31])
            .then((value) => {
                // Log the resolved value of the first settled promise
                console.log('Promise.race resolved with:', value);
            })
            .catch((error) => {
                // Handle any error if the first settled promise is rejected
                console.error('Promise.race rejected with:', error);
            });

