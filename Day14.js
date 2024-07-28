//Day 14: Classes

    //Activity 1: Class Definition
    class Person {

        constructor (Name,age){
            this.Name = Name;
            this.age = age;
        }

        greet() {
            console.log(`Hello ${this.Name} have a nice day`);
        }

        static greet1() {
            console.log(`Hello have a nice day`);
        }

        updateage(age) {
            this.age = age;
            console.log(`New age ${this.age}`);
        }
    }
    let p1 = new Person("Rk",21)
    p1.greet()
    p1.updateage(22)


    //Activity 2: Class inheritance
    class Student extends Person {
        static NoS = 0;
        constructor(StudentId,Name,age) {
            super(Name,age)
            this.StudentId = StudentId;
            Student.NoS++;
        }

        SID(){
            return this.StudentId
        }

        greet() {
            console.log(`Hello ${this.Name} have a nice day
                Student-ID: ${this.StudentId}`);
        }
    }

    let S1 = new Student(1,"Rk",21) 
    console.log(S1.SID());
    S1.greet()


    //Activity 3: Static Methods and Properties
        Person.greet1();

        console.log("NoS: "+Student.NoS);
    

    //Activity 4: Getters and setters
        class p {
            constructor(Name) {
                this.Name = Name;
            }

            get Name() {
                return this._Name;
            }
            set Name(newName) {
                this._Name = newName;
            }
        }
        let p12 = new p("RDx");
        console.log(p12.Name);
        p12.Name = "RDX";
        console.log(p12.Name);


    //Activity 5: Private Fields 
        class Account {
            #balance;
            constructor(initBalance){
                this.#balance = initBalance;
            }

            deposit(amt) {
                this.#balance += amt;
            }
            withdraw(amt) {
                this.#balance -= amt;
            }

            get balance() {
                return this.#balance;
              }
        }
        const myAcc = new Account(10000000000);
        myAcc.deposit(2100000)
        console.log(myAcc);
        console.log(myAcc.balance);


