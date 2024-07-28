//Day 16: Recursion
    //Activity 1: Basic Recursion
        //Task 1:
        function fact(num) {
            if (num==1  ) {
                return 1;
            }
            return num*fact(num-1);
        }

        console.log(fact(5));

        //Task 2:
        function nthFibb(n) {       
            if (n === 0) {
                return 0;
              }
              if (n === 1) {
                return 1;
              }

            return nthFibb(n-1) + nthFibb(n-2);
        }

        console.log(nthFibb(2))

    //Activity 2: Recursion with Arrays
        //Task 3:
        function sumArr(arr) {
            if (arr.length === 0) {
                return 0;
              }
              return arr[0] + sumArray(arr.slice(1));
        }

        //Task 4: Find the Maximum Element in an Array
        function maxArray(arr) {
        if (arr.length === 1) {
            return arr[0];
        }
        const maxOfRest = maxArray(arr.slice(1));
        return arr[0] > maxOfRest ? arr[0] : maxOfRest;
        }
    

    //Activity 3: String Manipulation with Recursion
        //Task 5: Reverse a String
        function reverseString(str) {
            if (str === "") {
              return "";
            }
            return reverseString(str.substring(1)) + str.charAt(0);
          }
          
          // Test cases
          console.log(reverseString("hello")); // Output: "olleh"
          console.log(reverseString("abcd"));  // Output: "dcba"
        
          
        //Task 6: Check if a String is a Palindrome
        function isPalindrome(str) {
            if (str.length <= 1) {
              return true;
            }
            if (str[0] !== str[str.length - 1]) {
              return false;
            }
            return isPalindrome(str.substring(1, str.length - 1));
          }
          
          // Test cases
          console.log(isPalindrome("racecar")); // Output: true
          console.log(isPalindrome("hello"));   // Output: false
    

    //Activity 4: Recursive Search
          //Task 7: Binary Search
          function binarySearch(arr, target, left = 0, right = arr.length - 1) {
            if (left > right) {
              return -1;
            }
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] === target) {
              return mid;
            }
            if (arr[mid] > target) {
              return binarySearch(arr, target, left, mid - 1);
            }
            return binarySearch(arr, target, mid + 1, right);
          }
          
          // Test cases
          console.log(binarySearch([1, 2, 3, 4, 5], 3));  // Output: 2
          console.log(binarySearch([1, 2, 3, 4, 5], 6));  // Output: -1
        
          
          //Task 8: Count Occurrences of an Element in an Array
          function countOccurrences(arr, target) {
            if (arr.length === 0) {
              return 0;
            }
            return (arr[0] === target ? 1 : 0) + countOccurrences(arr.slice(1), target);
          }
          
          // Test cases
          console.log(countOccurrences([1, 2, 3, 2, 2, 5], 2)); // Output: 3
          console.log(countOccurrences([1, 2, 3, 4, 5], 6));    // Output: 0
          

    //Activity 5: Tree Traversal 
          //Task 9: In-order Traversal of a Binary Tree
          class TreeNode {
            constructor(value) {
              this.value = value;
              this.left = null;
              this.right = null;
            }
          }
          
          function inOrderTraversal(node, result = []) {
            if (node !== null) {
              inOrderTraversal(node.left, result);
              result.push(node.value);
              inOrderTraversal(node.right, result);
            }
            return result;
          }
          
          // Test case
          const root = new TreeNode(1);
          root.left = new TreeNode(2);
          root.right = new TreeNode(3);
          root.left.left = new TreeNode(4);
          root.left.right = new TreeNode(5);
          
          console.log(inOrderTraversal(root)); // Output: [4, 2, 5, 1, 3]
          

        //Task 10: Calculate the Depth of a Binary Tree
        function treeDepth(node) {
            if (node === null) {
              return 0;
            }
            const leftDepth = treeDepth(node.left);
            const rightDepth = treeDepth(node.right);
            return Math.max(leftDepth, rightDepth) + 1;
          }
          
          // Test case
          console.log(treeDepth(root)); // Output: 3
          