function findDistinctSum(set1, set2) {
    // Create an empty array to store distinct elements
    let distinctElements = [];

    // Iterate through the first set
    for (let element of set1) {
        if (!distinctElements.includes(element)) {
            distinctElements.push(element);
        }
    }

    // Iterate through the second set
    for (let element of set2) {
        if (!distinctElements.includes(element)) {
            distinctElements.push(element);
        }
    }

    // Calculate the sum of distinct elements
    let sum = distinctElements.reduce((acc, current) => acc + current, 0);

    return sum;
}

const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];

const result = findDistinctSum(set1, set2);
console.log("Output:", result);
// Function to calculate the dot product of two vectors
function dotProduct(v1, v2) {
    if (v1.length !== v2.length) {
        throw new Error("Vectors must have the same length for dot product calculation.");
    }

    let result = 0;
    for (let i = 0; i < v1.length; i++) {
        result += v1[i] * v2[i];
    }

    return result;
}

// Function to check if two vectors are orthogonal
function areVectorsOrthogonal(v1, v2) {
    const product = dotProduct(v1, v2);
    return product === 0;
}

// Example usage
const vector1 = [1, 0, 0];
const vector2 = [0, 1, 0];

if (areVectorsOrthogonal(vector1, vector2)) {
    console.log("Vectors are orthogonal.");
} else {
    console.log("Vectors are not orthogonal.");
}
function insertionSort(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        // Pick the current element to be inserted into the sorted subarray
        const currentElement = arr[i];
        
        // Start from the last element of the sorted subarray
        let j = i - 1;

        // Move elements of the sorted subarray that are greater than the currentElement
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the currentElement into its correct position in the sorted subarray
        arr[j + 1] = currentElement;
    }
}

// Example usage:
const arrayToSort = [12, 11, 13, 5, 6];
insertionSort(arrayToSort);
console.log("Sorted array:", arrayToSort);
function insertionSort(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        const currentElement = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = currentElement;
    }
}

// Example usage:
const arrayToSort = [12, 11, 13, 5, 6];
insertionSort(arrayToSort);
console.log("Sorted array:", arrayToSort);
