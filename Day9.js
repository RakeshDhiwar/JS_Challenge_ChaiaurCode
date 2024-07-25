//Day 9: DOM Manipulation

    //Activity 1: Selecting and manipulating Elements
        //Task 1:
        // document.querySelector(#id).innerText = 'This is the new text.';

        //Task 2:
        const elements = document.querySelectorAll('.myClass');
        elements.forEach(element => {
            element.style.backgroundColor = 'lightblue';
        });


    //Activity 2: Creating and appending Elements
        //Task 3:
        const div = document.createElement('div')
        div.innerHTML = 'new div'
        div.className = 'ndiv'
        div.id = 'ndiv'
        const container = document.getElementById('container');
        container.appendChild(div);


        //Task 4:
        const li = document.createElement('li')
        li.innerHTML = 'new item'

        const ul = document.getElementById('list');
        ul.appendChild(ul)
    


    //Activity 3: Removing elements
        //Task 5:
        ul.removeChild(li)
        //or
        li.remove()

        //Task 6:
        const nthchild = ul.children[2]

        ul.removeChild(nthchild)

    

    //Activity 4: Modifying Attributes and classes
        //Task 7:
        const img  = document.getElementById('img')
        img.src = 'http.expimage'

        img.setAttribute('src','http.expimage');

        //Task 8:
        img.classList.remove('active')

    

    //Activity 5:
        //Task 9:
        document.getElementById('#button').addEventListener('click',func)
        function func() {
            const para  = document.getElementById('para')
            para.innerText = 'Changed text'
        }

        //Task 10:
        const element = document.getElementById('element');
        element.addEventListener('mouseover', () => {
                element.style.borderColor = 'grey'
        });
        
        