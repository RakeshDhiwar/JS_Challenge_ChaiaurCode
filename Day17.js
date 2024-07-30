//Day 17: Data Structures
    //Activity 1: Linked List

        class Node {
            constructor(value) {
                this.value = value;
                this.next = null;
            }
        }

        class LinkedList {
            constructor() {
                this.head = null;
            }

            addnode(value){
                const newnode = new Node(value);
                if (!this.head)  {
                    this.head = newnode;
                } else {
                    let curr = this.head;
                    while (curr.next) {
                        curr = curr.next;
                    }
                    curr.next = newnode;
                }
            }

            removenode() {
                if (!this.head)  {
                    return null;
                } 

                if (!this.head.next)  {
                    const value = this.head;
                    this.head = null;
                    return value;
                } 

                let curr = this.head;
                while(curr.next && curr.next.next){
                    curr = curr.next;
                }
            }
        }


    //Activity 2: Stack
        class Stack {
            constructor() {
                this.items = [];
            }

            push(element) {
                this.items.push(element)
            }

            pop() {
                if(this.items.length === 0) return null;
                return this.items.pop();
            }
            peek() {
                if(this.items.length === 0) return null;
                return this.items[this.items.length - 1];
            }
        }

        //Reversing string using stack
        function reverseString(str) {
            const stack = new Stack();
            for (let char of str) {
              stack.push(char);
            }
            let reversedStr = '';
            while (stack.items.length) {
              reversedStr += stack.pop();
            }
            return reversedStr;
          }
          
          console.log(reverseString("hello")); // Outputs: "olleh"

          
    // Activity 3: Queue
          
        class Queue {
            constructor() {
            this.items = [];
            }
        
            enqueue(element) {
            this.items.push(element);
            }
        
            dequeue() {
            if (this.items.length === 0) return null;
            return this.items.shift();
            }
        
            front() {
            if (this.items.length === 0) return null;
            return this.items[0];
            }
        }

        function simulatePrinterQueue() {
            const printerQueue = new Queue();
            printerQueue.enqueue("Print job 1");
            printerQueue.enqueue("Print job 2");
            printerQueue.enqueue("Print job 3");
        
            while (printerQueue.items.length) {
            console.log(`Processing: ${printerQueue.dequeue()}`);
            }
        }
        
        simulatePrinterQueue();
        
    
    //Activity 4: Binary Tree
        class TreeNode {
            constructor(value) {
            this.value = value;
            this.left = null;
            this.right = null;
            }
        }
        class BinaryTree {
            constructor() {
            this.root = null;
            }
        
            insert(value) {
            const newNode = new TreeNode(value);
            if (!this.root) {
                this.root = newNode;
            } else {
                this.insertNode(this.root, newNode);
            }
            }
        
            insertNode(node, newNode) {
            if (newNode.value < node.value) {
                if (!node.left) {
                node.left = newNode;
                } else {
                this.insertNode(node.left, newNode);
                }
            } else {
                if (!node.right) {
                node.right = newNode;
                } else {
                this.insertNode(node.right, newNode);
                }
            }
            }
        
            inorderTraversal(node = this.root) {
            if (node) {
                this.inorderTraversal(node.left);
                console.log(node.value);
                this.inorderTraversal(node.right);
            }
            }
        }
        
    

    //Activity 5: Graph
    class Graph {
        constructor() {
          this.adjacencyList = {};
        }
      
        addVertex(vertex) {
          if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
          }
        }
      
        addEdge(vertex1, vertex2) {
          if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1); // For undirected graph
          }
        }
      
        bfs(start) {
          const queue = [start];
          const result = [];
          const visited = {};
          visited[start] = true;
      
          while (queue.length) {
            const vertex = queue.shift();
            result.push(vertex);
      
            this.adjacencyList[vertex].forEach(neighbor => {
              if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
              }
            });
          }
      
          return result;
        }
      }
      function findShortestPath(graph, start, end) {
        const queue = [start];
        const visited = {};
        visited[start] = true;
        const parent = {};
      
        while (queue.length) {
          const vertex = queue.shift();
          if (vertex === end) {
            const path = [];
            let current = end;
            while (current !== null) {
              path.push(current);
              current = parent[current];
            }
            return path.reverse();
          }
      
          graph.adjacencyList[vertex].forEach(neighbor => {
            if (!visited[neighbor]) {
              visited[neighbor] = true;
              parent[neighbor] = vertex;
              queue.push(neighbor);
            }
          });
        }
      
        return null; // No path found
      }
      
      // Example usage:
      const graph = new Graph();
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addVertex('C');
      graph.addVertex('D');
      graph.addEdge('A', 'B');
      graph.addEdge('A', 'C');
      graph.addEdge('B', 'D');
      graph.addEdge('C', 'D');
      
      console.log(findShortestPath(graph, 'A', 'D')); // Outputs: ['A', 'B', 'D'] or ['A', 'C', 'D']
      