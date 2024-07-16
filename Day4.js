//Day 4: Loops
    //Activity 1: For Loop
        //Task 1:
        for (let index = 0; index < 10; index++) {
            console.log(index);
        }

        //Task 2:
        for (let index = 0; index <= 10; index++) {
            console.log(index * 5);
        }

    //Activity 2: While Loop
        //Task 3:
        let num = 1;
        let sum = 0;
        while (num<=10) {
            sum += num;
            num++;
        }
        console.log(sum);

        //Task 4:
        let num1 = 10;
        while(num1>0){
            console.log(num1);
            num1--;
        }


    //Activity 3:
        //Task 5:
        let num2 = 1;
        do {
            console.log(num2);
            num2 ++;
        } while (num2 <= 5);

        //Task 6:
        let num3 = 5;

        function fact(num) {
            let fact = 1;
            do{
                fact = fact*num;
                num--;
            } while(num>1)
            
            return fact;
        }
        console.log(fact(num3));
    
    
    //Activity 4: Nested Loops
        //Task 7:
        for (let index = 1; index < 5; index++) {
            let output = ''
            for (let i = 1; i <= index; i++) {
               output += '*'
            }
            console.log(output);
        }
    

    //Activity 5: Loop Control Statement
        //Task 8: continue statement
        for(let i=1; i<10; i++){
            if (i==5) {
                continue;
            }
            console.log(i);
        }
        //Task 9: break 
        for(let i=1; i<10; i++){
            if (i==7) {
                break;
            }
            console.log(i);
        }