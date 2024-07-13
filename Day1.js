// Day 1: Variables and Data Types
    //Activity 1: Variable Declaration

        //Task 1: Declare a variable using var, assign it a number, and log the value to the console

        var num = 8;
        console.log(num);

        //Task 2: Declare a variable using let, assign it a string, and log the value to the console.
        let Name = 'Rakesh';
        console.log(Name);


    //Activity 2: Constant Declaration

        //Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
        const loggedInUser = true;
        console.log(loggedInUser);
    
    //Activity 3: Data Types

        //Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.

        let Num = 8; //number
        let Name1 = 'Dhiwar'; // string
        let access = true; //Boolean
        let arr = [1, 2, 3, 4, 5];//Array
        let obj = {             //Object
            Name: 'Rakesh',
            Roll: 45,
        }

        console.log(typeof(num));
        console.log(typeof(Name1));
        console.log(typeof(access));
        console.log(typeof(arr));
        console.log(typeof(obj));
    

    //Activity 4: Reassigning Variables 
        //Task 5: Declare a variable using let, assign it as an initial value, reassign a new value, and log both values to the console

        let newnum = 18;
        console.log(newnum);
        newnum = 15;
        console.log(newnum);
    

    //Activity 5: Understanding const
        //Task 6: Try reassigning a variable declared with const and observe the error.

        const value = 100;
        // value = 105;

        // Error -- TypeError: Assignment to constant variable.

    //Variables Types Console log: Write an script that declares variables of different data types and logs both the value and type of each to console
         
        function VarTypes(vars) {
            console.log("Value of variable: "+vars+ " || Type: "+ typeof(vars));
        }
        
        console.log(VarTypes(value));

    //Reassignment Demo: Create a script that demonstrate the difference in behaviour between let and consts when it comes to reassignment.
        
        function letvsConst() {
             console.log("let");
             let val = 10;
             console.log("Initial Value : "+ val);
             val = 100;
             console.log("after reassignment : "+ val );

             console.log("const");
             const constVal = 100;
             console.log("Initial value : "+ constVal);

             try {
                constVal = 200;
                console.log("Initial Value : "+ constVal);
             } catch (error) {
                console.log("after reassignment : "+ error);
             }

        }
        letvsConst();



