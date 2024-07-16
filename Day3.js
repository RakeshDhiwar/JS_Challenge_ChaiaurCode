//Day 3: Control Structures
    //Activity 1: If-Else Statements
        //Task 1:
        let num = 0;
        if (num > 0) {
            console.log("Positive");
        }
        else if(num<0){
            console.log("negative");
        }
        else {
            console.log("zero");
        }

        //Task 2:
        let age = 21;
        if (age>=18) {
            console.log("eligible to vote");
        } else {
            console.log("Not Eligible");
        }

    //Activity 2: Nested If-Else Statements
        //Task 3:
        let a = 17;
        let b = 18;
        let c = 9;

        if(a>b){
            if(a>c){
                console.log("a is largest");
            }
        }
        if (b>a) {
            if(b>c){
                console.log("b is largest");
            }
        }
        if (c>a) {
            if (c>b) {
                console.log("c is largest");
            }
        }


    //Activity 3: Switch Case
        //Task 4:
        let day = 1;
        switch (day) {
            case 1:
                console.log("Monday");
                break;
            case 2:
                console.log("Tuesday");
                break;
            case 3:
                console.log("Wednesday");
                break;
            case 4:
                console.log("Thrusday");
                break;
            case 5:
                console.log("Friday");
                break;
            case 6:
                console.log("Saturday");
                break;
            case 7:
                console.log("Sunday");
                break;
        
            default:
                break;
        }


        //Task 5:
        let Marks = 95;
        switch (Math.floor(95 / 10)) {
            case 9:
                console.log("A");
                break;
            case 8:
                console.log("B");
                break;
            case 7:
                console.log("C");
                break;
            case 6:
                console.log("D");
                break;
            case 5:
                console.log("E");
                break;
            case 4:
                console.log("F");
                break;
            default:
                break;
        }
    

    //Activity 4: Conditional (Ternary) Operator
        //Task 6:
        let num1 = 81;
        (num1>0)?console.log("Positive") : console.log("negative");;

    
    //Activity 5: Combining Conditions
        //Task 7:
        let year = 2024;
        if(year%4 == 0) {
                if(year%400 == 0){
                    console.log("leap year");
                }
        }
        
        
