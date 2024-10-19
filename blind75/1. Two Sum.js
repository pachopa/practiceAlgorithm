console.clear()
// https://leetcode.com/problems/two-sum/
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]


// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.


// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum3 = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }
    return [];

};


var twoSum2 = function(nums, target) {
    indexByNum = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let diff = target - num;
        if (diff in indexByNum) {
            return [ indexByNum[diff], i ];
        }
        indexByNum[num] = i;
    }
    throw new Error("No summing pair was found!");
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let ai = 0; ai < nums.length - 1; ai++) {
        for (let bi = ai + 1; bi < nums.length; bi++) {
            if(nums[ai] + nums[bi] === target) return [ai, bi]
        }
    }
};

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

const result = twoSum([2, 7, 11, 15], 9)
const result2 = twoSum([3,2,4], 6)
const result3 = twoSum([3,3], 6)

console.log(result, 'result')
console.log(result2, 'result')
console.log(result3, 'result')


