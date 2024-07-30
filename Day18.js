//Day 18: Algorithm
    //Activity 1: Sorting Algorithms
    function bubbleSort(arr) {
        let n = arr.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
        console.log('Sorted array (Bubble Sort):', arr);
    }
    
    bubbleSort([5, 3, 8, 4, 2]);
    
    function selectionSort(arr) {
        let n = arr.length;
        for (let i = 0; i < n - 1; i++) {
            let minIdx = i;
            for (let j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIdx]) {
                    minIdx = j;
                }
            }
            if (minIdx !== i) {
                [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
            }
        }
        console.log('Sorted array (Selection Sort):', arr);
    }
    
    selectionSort([5, 3, 8, 4, 2]);
    

    function quickSort(arr) {
        if (arr.length <= 1) return arr;
        let pivot = arr[arr.length - 1];
        let left = [], right = [];
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] < pivot) left.push(arr[i]);
            else right.push(arr[i]);
        }
        return [...quickSort(left), pivot, ...quickSort(right)];
    }
    
    let sortedArray = quickSort([5, 3, 8, 4, 2]);
    console.log('Sorted array (Quick Sort):', sortedArray);
    
    
    //Activity 2: Searching Algorithms
    function linearSearch(arr, target) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === target) {
                console.log('Target found at index:', i);
                return i;
            }
        }
        console.log('Target not found');
        return -1;
    }
    
    linearSearch([5, 3, 8, 4, 2], 4);

    function binarySearch(arr, target) {
        let left = 0, right = arr.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid] === target) {
                console.log('Target found at index:', mid);
                return mid;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        console.log('Target not found');
        return -1;
    }
    
    binarySearch([2, 3, 4, 5, 8], 4);
    


    //Activity 3: String Algorithms
    function countCharacterOccurrences(str) {
        let charCount = {};
        for (let char of str) {
            charCount[char] = (charCount[char] || 0) + 1;
        }
        console.log('Character counts:', charCount);
        return charCount;
    }
    
    countCharacterOccurrences("hello world");
    
    function longestUniqueSubstring(s) {
        let seen = new Map();
        let start = 0, maxLength = 0;
    
        for (let i = 0; i < s.length; i++) {
            if (seen.has(s[i])) {
                start = Math.max(start, seen.get(s[i]) + 1);
            }
            seen.set(s[i], i);
            maxLength = Math.max(maxLength, i - start + 1);
        }
    
        console.log('Length of longest substring without repeating characters:', maxLength);
        return maxLength;
    }
    
    longestUniqueSubstring("abcabcbb");
    

    //Activity 4: Array Algorithms
    function rotateArray(arr, k) {
        k = k % arr.length;
        let rotatedArray = arr.slice(-k).concat(arr.slice(0, -k));
        console.log('Rotated array:', rotatedArray);
        return rotatedArray;
    }
    
    rotateArray([1, 2, 3, 4, 5], 2);

    function mergeSortedArrays(arr1, arr2) {
        let mergedArray = [];
        let i = 0, j = 0;
    
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                mergedArray.push(arr1[i]);
                i++;
            } else {
                mergedArray.push(arr2[j]);
                j++;
            }
        }
    
        while (i < arr1.length) {
            mergedArray.push(arr1[i]);
            i++;
        }
    
        while (j < arr2.length) {
            mergedArray.push(arr2[j]);
            j++;
        }
    
        console.log('Merged array:', mergedArray);
        return mergedArray;
    }
    
    mergeSortedArrays([1, 3, 5], [2, 4, 6]);
    

    //Activity 5: Dynamic Programming
    function fibonacci(n) {
        let dp = [0, 1];
        for (let i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        console.log('Fibonacci numbers:', dp);
        return dp;
    }
    
    fibonacci(10);

    function knapsack(values, weights, capacity) {
        let n = values.length;
        let dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));
    
        for (let i = 1; i <= n; i++) {
            for (let w = 0; w <= capacity; w++) {
                if (weights[i - 1] <= w) {
                    dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
                } else {
                    dp[i][w] = dp[i - 1][w];
                }
            }
        }
    
        console.log('Maximum value in knapsack:', dp[n][capacity]);
        return dp[n][capacity];
    }
    
    knapsack([60, 100, 120], [10, 20, 30], 50);
    
    
    
    