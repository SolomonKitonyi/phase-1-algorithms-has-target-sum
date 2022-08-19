function hasTargetSum(array, target) {
  // Write your algorithm here((
    let map = {};
    for(let i = 0; i < array.length; i ++) {
        if(map[array[i]] !== undefined){
            return true;
        }
        else {
            map[target - array[i]] = i;  
        }
    }
    return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n)
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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
hasTargetSum([1,3,7],10)
module.exports = hasTargetSum;
