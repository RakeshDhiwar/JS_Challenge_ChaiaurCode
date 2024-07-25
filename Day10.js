//Day 10:
    //Activity 1: Basic Event Handling
        //Task 1 :
        const element = document.getElementById('box')
        element.addEventListener('click',()=>{
            element.innerText = "new text"
        })

        //Task 2:
        const image = document.getElementById('img')
        image.addEventListener('dblclick',()=>{
            if (image.style.display == 'block') {
                image.style.display = 'none'
            } else {
                image.style.display = 'block'
            }
        })

    //Activity 2: Mouse Events
        //Task 3:
        const el = document.getElementById('el')
        el.addEventListener('mouseover',()=>{
            el.style.backgroundColor = 'blue'
        })
        //Task 4:
        el.addEventListener('mouseover',()=>{
            el.style.backgroundColor = 'green' //original color
        })


    //Activity 3: Keyboard Events
        //Task 5:
        const input = document.getElementById('input')
        input.addEventListener('keydown',(e)=>{
            console.log(e.key);
        })

        //Task 6:
        const displayText = document.getElementById('displayText');
        input.addEventListener('keyup',()=>{
            displayText.textContent = 'Current value: ' + input.value;
        })

    

    //Activity 4: Form Events
        //Task 7:
        const form = document.getElementById('form')
        form.addEventListener('submit',(e)=>{
            e.preventDefault;
        })

        //Task 8:
        const dropdown = document.getElementById('dropdown');
        const selectedValue = document.getElementById('selectedValue');
        dropdown.addEventListener('change', function(event) {
            alue.textContent = 'Selected value: ' + dropdown.value;
        });
    

    //Activity 5: Event delegation
        //Task 9:
        // Get reference to the list (ul) element
        const itemList = document.getElementById('itemList');

        // Add click event listener to the ul element
        itemList.addEventListener('click', function(event) {
            // Check if the clicked element is an li
            if (event.target && event.target.nodeName === 'LI') {
                // Log the text content of the clicked li
                console.log('Clicked item:', event.target.textContent);
            }
        });


        //Task 10:
        const parentElement = document.getElementById('parentElement');
        // Reference to the button for adding new buttons
        const addButton = document.getElementById('addButton');

        // Event listener for clicks on parent element
        parentElement.addEventListener('click', (event) => {
            if (event.target.classList.contains('childElement')) {
                console.log('Clicked button:', event.target.textContent);
            }
        });

        // Function to add a new button
        addButton.addEventListener('click', () => {
            const newButton = document.createElement('button');
            newButton.className = 'childElement';
            newButton.textContent = `Button ${parentElement.children.length + 1}`;
            parentElement.appendChild(newButton);
        });