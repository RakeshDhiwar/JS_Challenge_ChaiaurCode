//Day 20: LocalStorage and Sessionstorage

//Activity 1: Understanding LocalStorage
// Task 1: Save a string value to localStorage and retrieve it.
localStorage.setItem('greeting', 'Hello, LocalStorage!');
console.log(localStorage.getItem('greeting'));  // Output: Hello, LocalStorage!

// Task 2: Save an object to localStorage by converting it to a JSON string.
const user = { name: 'John Doe', email: 'john.doe@example.com' };
localStorage.setItem('user', JSON.stringify(user));

// Retrieve and parse the object, then log it.
const retrievedUser = JSON.parse(localStorage.getItem('user'));
console.log(retrievedUser);  // Output: { name: 'John Doe', email: 'john.doe@example.com' }


//Activity 2: Using LocalStorage

// <!-- Task 3: HTML Form -->
// <form id="localStorageForm">
//     <input type="text" id="name" placeholder="Name" required />
//     <input type="email" id="email" placeholder="Email" required />
//     <button type="submit">Save</button>
// </form>
// <div id="localStorageData"></div>



document.getElementById('localStorageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const user = { name, email };
    localStorage.setItem('userData', JSON.stringify(user));
    displayLocalStorageData();
});

function displayLocalStorageData() {
    const data = JSON.parse(localStorage.getItem('userData'));
    document.getElementById('localStorageData').textContent = data
        ? `Name: ${data.name}, Email: ${data.email}`
        : 'No data found in localStorage';
}

// Display data on page load
displayLocalStorageData();


// Task 4: Remove an item from localStorage and log content before and after removal.
console.log('Before removal:', localStorage.getItem('userData'));
localStorage.removeItem('userData');
console.log('After removal:', localStorage.getItem('userData'));  // Output: null



//Activity 3: Understanding SessionStorage
// Task 5: Save a string value to sessionStorage and retrieve it.
sessionStorage.setItem('sessionGreeting', 'Hello, SessionStorage!');
console.log(sessionStorage.getItem('sessionGreeting'));  // Output: Hello, SessionStorage!


// Task 6: Save an object to sessionStorage by converting it to a JSON string.
const sessionUser = { name: 'Jane Doe', email: 'jane.doe@example.com' };
sessionStorage.setItem('sessionUser', JSON.stringify(sessionUser));

// Retrieve and parse the object, then log it.
const retrievedSessionUser = JSON.parse(sessionStorage.getItem('sessionUser'));
console.log(retrievedSessionUser);  // Output: { name: 'Jane Doe', email: 'jane.doe@example.com' }


//Activity 4: Using SessionStorage
// <!-- Task 7: HTML Form -->
// <form id="sessionStorageForm">
//     <input type="text" id="sessionName" placeholder="Name" required />
//     <input type="email" id="sessionEmail" placeholder="Email" required />
//     <button type="submit">Save</button>
// </form>
// <div id="sessionStorageData"></div>


// JavaScript for Task 7
document.getElementById('sessionStorageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('sessionName').value;
    const email = document.getElementById('sessionEmail').value;
    const user = { name, email };
    sessionStorage.setItem('sessionUserData', JSON.stringify(user));
    displaySessionStorageData();
});

function displaySessionStorageData() {
    const data = JSON.parse(sessionStorage.getItem('sessionUserData'));
    document.getElementById('sessionStorageData').textContent = data
        ? `Name: ${data.name}, Email: ${data.email}`
        : 'No data found in sessionStorage';
}

// Display data on page load
displaySessionStorageData();


// Task 8: Remove an item from sessionStorage and log content before and after removal.
console.log('Before removal:', sessionStorage.getItem('sessionUserData'));
sessionStorage.removeItem('sessionUserData');
console.log('After removal:', sessionStorage.getItem('sessionUserData'));  // Output: null


//Activity 5: Comparing LocalStorage and SessionStorage
// Task 9: Function to save a value to both localStorage and sessionStorage.
function saveToBothStorages(key, value) {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
    console.log(`Saved ${key}: ${value} to both storages.`);
}

// Example usage
saveToBothStorages('dualKey', 'DualValue');

// Task 10: Function that clears all data from both localStorage and sessionStorage.
function clearBothStorages() {
    localStorage.clear();
    sessionStorage.clear();
    console.log('Both storages cleared.');
}

// Example usage
clearBothStorages();

// Verify that both storages are empty
console.log('localStorage:', localStorage.length);  // Output: 0
console.log('sessionStorage:', sessionStorage.length);  // Output: 0



