//Day 5: Function
    //Activity 1: Function Declaration
        //Task 1: 
        function CheckEvenOdd(num) {
            if(num%2==0) console.log("Even");
            if(num%2!=0) console.log("Odd");
        }
        CheckEvenOdd(28);

        //Task 2:
        function square(params) {
            console.log(params**2);
        }
        square(10)
    

    //Activity 2: Function expression
        //Task 3:
        function Max(params,params2) {
            console.log(Math.max(params,params2)+ " is max");
        }
        Max(23,13);

        //Task 4:
        function string(str1,str2) {
            console.log(str1+str2);
        }
        string("Good","bye");


    //Activity 3: Arrow Functions
        //Task 5:
        const sum = (num1,num2) => {
            return (num1+num2)
        }
        console.log(sum(2,3));

        //Task 6:
        const check = (str) => {
            for (let i = 0; i < str.length; i++) {
                if (str.charAt(i) == '@') {
                    return true
                }
                
            }
            return false
        }
        console.log(check("string@string"));
    

    //Activity 4: Function Parameter and default Values
        //Task 7:
        function defaultparam(params,param2=2) {
            return params * param2;
        }
        console.log(defaultparam(3));
        console.log(defaultparam(3,4));

        //Task 8:
        function greet(name,age=20) {
            console.log("Have a good Day " + name);
            console.log("your age : " + age);
        }
        greet("Rk",21)
        greet("Rk")

    //Activity 5: Higher-Order Functions
        //Task 9: 
        function func() {
            console.log("Hello ji");
        }
        function HOfunction(func,num) {
            for (let i = 1; i <= num; i++) {
                func();
            }
        }
        HOfunction(func,3)

        //Task 10:
        function func1(num) {           
            return num * 10
        }
        function func2(num) {
            return num * 10
        }
        function HOfunction2(func1,func2,num) {
            func1(num);
            return func2(func1(num));
        }
        console.log(HOfunction2(func1,func2,2));


