//Day 7: Objects
    //Activity 1:
        //Task 1:
        let Book = {
            title:"The Pursuit of happiness",
            author:"Chris Gardner",
            year:2006,
        }
        console.log(Book);

        //Task 2:
        console.log(Book.title);
        console.log(Book.author);

    //Activity 2: Object Methods
        //Task 3:
        Book = {
            ...Book,  //Because reassigning make this object empty
            NameAuth : function fun() {
                return `Title: ${this.title}, Author: ${this.author}`;
            }
        }
        console.log(Book.NameAuth());
        //Task 4:
        Book = {
            ...Book,
            updateyear :function year(y) {
                Book.year = y;
            }
        }
        Book.updateyear(2007);
        console.log(Book.year);


    //Activity 3: Nested Objects
        //Task 5:
        Book = {
            ...Book,
            library : [
                book1 = {
                    name:"Book1",
                    author:"rk"
                },
                book2 = {
                    name:"Book2",
                    author:"rk"
                },
            ]
        }
        console.log(Book.library);

        //Task 6:
        const lib = Book.library;
        for (let i = 0; i < lib.length; i++) {
           console.log(lib[i].name);
           console.log(lib[i].author);
            
        }
    

    //Activity 4: The this Keyword
        //Task 7:
        Book = {
            ...Book,  //Because reassigning make this object empty
            NameAuth : function fun() {
                return `Title: ${this.title}, Author: ${this.author}`;
            }
        }
        console.log(Book.NameAuth());

        

    //Activity 5: Object Iteration
        //Task 8:
        for (const key in Book) {
            console.log(key);
        }


        //Task 9:
        console.log(Object.keys(Book));
        console.log(Object.values(Book));
         