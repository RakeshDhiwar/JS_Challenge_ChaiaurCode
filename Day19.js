//Day 19: Regular Expressions
    //Activity 1: Basic Regular Expressions
    let text = "JavaScript is a versatile language. JavaScript is used in web development.";
    let matches = text.match(/JavaScript/g);
    console.log(matches);

    let stringWithDigits = "My phone number is 123-456-7890.";
    let digits = stringWithDigits.match(/\d+/g);
    console.log(digits);

    //Activity 2: Character Classes and Quantifiers
    let sentence = "Hello World! This is a JavaScript Regex example.";
    let capitalWords = sentence.match(/\b[A-Z][a-z]*\b/g);
    console.log(capitalWords);

    let mixedString = "The year 2024 marks the 50th anniversary.";
    let digitSequences = mixedString.match(/\d+/g);
    console.log(digitSequences);

    //Activity 3: Grouping and Capturing
    let phoneNumber = "(123) 456-7890";
    let phoneParts = phoneNumber.match(/\((\d{3})\)\s(\d{3})-(\d{4})/);
    console.log(phoneParts.slice(1)); // Captures: ['123', '456', '7890']

    let email = "user@example.com";
    let emailParts = email.match(/([^@]+)@(.+)/);
    console.log(emailParts.slice(1)); // Captures: ['user', 'example.com']


    //Activity 4: Assertions and Boundaries
    let text1 = "Hello world, welcome to JavaScript.";
    let beginningWord = text1.match(/^\w+/);
    console.log(beginningWord);

    let text2 = "JavaScript is versatile.";
    let endingWord = text2.match(/\w+$/);
    console.log(endingWord);


    //Activity 5: Practical Applications
    let password = "Passw0rd!";
    let isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);
    console.log(isValidPassword);

    let url = "https://www.example.com";
    let isValidUrl = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(url);
    console.log(isValidUrl);





