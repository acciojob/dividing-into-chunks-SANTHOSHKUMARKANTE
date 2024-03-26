const divide = (arr, n) => {
  let result = [];
  let temp = [];
  let sum = 0;
  
  // Iterate over the input array
  for (let i = 0; i < arr.length; i++) {
    // If adding the current element exceeds the maximum sum,
    // push the current subarray to the result and start a new subarray
    if (sum + arr[i] > n) {
      result.push(temp);
      temp = [];
      sum = 0;
    }
    
    // Add the current element to the current subarray
    temp.push(arr[i]);
    sum += arr[i];
  }
  
  // Push the last subarray to the result
  result.push(temp);
  
  return result;
};

const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const n = 5;
console.log(divide(arr, n)); // Output: [[1, 2], [3], [4, 1, 0], [2, 2]]


const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
