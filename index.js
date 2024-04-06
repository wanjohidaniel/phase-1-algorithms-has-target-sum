function hasTargetSum(array, target) {
  // Write your algorithm here
  let numSet = new Set();
  for (let num of array) {
      if (numSet.has(target - num)) {
          return true;
      }
      numSet.add(num);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  The time complexity of the hasTargetSum function is O(n), where n is the number of elements in the input array. This is because we iterate through the array once, and for each element, we perform constant time operations to check for pairs that add up to the target number. Therefore, the time complexity is linear with respect to the size of the input array.
*/

/* 
  Add your pseudocode here
  function hasTargetSum(arr, target):
    numSet = empty Set
    for each num in arr:
        if numSet contains (target - num):
            return true
        add num to numSet
    return false
*/

/*
  Add written explanation of your solution here
   The line let numSet = new Set(); initializes a new empty set called numSet. This set will be used to store the numbers as we iterate through the array and check for pairs that add up to the target number.
   Then, we are iterating through the array of integers. For each number in the array, we check if the set numSet contains the difference between the target number and the current number (target - num). If this condition is true, it means we have found a pair of numbers that add up to the target, so we return true.
   If the condition is not met for the current number, we add the current number to the set numSet. This allows us to keep track of the numbers we have seen so far.
   If no pair is found after iterating through the entire array, the function will return false, indicating that there are no pairs of numbers in the array that add up to the target number.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
