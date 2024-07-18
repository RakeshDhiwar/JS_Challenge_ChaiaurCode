// Day 6: Arrays
    //Activity 1: Array creation and Access
        //Task 1:
        let num = [1,2,3,4,5]
        console.log(num);
        let num1 = []
        let num3 = new Array(1,2,3,4,5)
        let num4 = new Array(10)
        let numbers = Array.of(1, 2, 3, 4, 5);
        let str = "hello";
        let chars = Array.from(str);
        
        console.log(num);
        //Task 2:
        console.log(num[0]); //first element
        console.log(num[num.length-1]); //last element


    //Activity 2:
        //Task 3:
        num.push(6);

        //Task 4:
        num.pop()

        //Task 5:
        num.shift()
        console.log(num.shift());

        //Task 6:
        num.unshift(2)
        console.log(num.unshift(1));


    //Activity 3: Array Methods(Intermediate)
        //Task 7:
        let newarr =  [];
        // let newarr =  new Array(10); 
        num.map((element) => {
            newarr.push(element*2);
        })
        console.log(newarr);

        //Task 8:
        let evenNumbers = numbers.filter(number => number % 2 === 0);
        console.log(evenNumbers);

        //Task 9:
        let sumOfAllNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        console.log(sumOfAllNumbers);
    
    //Activity 4: Array Iteration
        //Task 10: 
        for (let i = 0; i < num.length; i++) {
            console.log(num[i]);
        }
        
        //Task 11:
        num.forEach(element => {
            console.log(element);
        });


    //Activity 5: Multi-Dimensional Arrays
        //Task 12:
        let mat = [[2,3],[4,5]]
        console.log(mat);

        //Task 13:
        console.log(mat[1][0]);