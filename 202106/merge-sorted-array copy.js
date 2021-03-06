// # You are given two integer arrays nums1 and nums2, sorted in non-decreasing
// # order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// # Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// # The final sorted array should not be returned by the function, but instead be stored
// # inside the array nums1. To accommodate this, nums1 has a length of m + n,
// # where the first m elements denote the elements that should be merged, and the last n elements
// #  are set to 0 and should be ignored. nums2 has a length of n.


// # Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// # Output: [1,2,2,3,5,6]
// # Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// # The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// # Input: nums1 = [1], m = 1, nums2 = [], n = 0
// # Output: [1]
// # Explanation: The arrays we are merging are [1] and [].
// # The result of the merge is [1].

// # Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// # Output: [1]
// # Explanation: The arrays we are merging are [] and [1].
// # The result of the merge is [1].
// # Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */
//  var merge = function(nums1, m, nums2, n) {
//     if(m === 0) {
//         nums1[m] = nums2[n - 1];
//         return nums1
//     }
//     let a = m + n - 1;
//     m--;
//     n--;

//     while (m > -1 && n > -1) {
//         if (nums2[n] > nums1[m]) {
//             nums1[a] = nums2[n];
//             n--;
//         } else if (nums2[n] < nums1[m]) {
//             nums1[a] = nums1[m];
//             nums1[a - 1] = nums2[n];
//             m--;
//             n--;
//         } else {
//             break;
//         }
//         a--;
//     }
// };


let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3;
//          2,5,6
// let nums1 = [4, 5, 6, 0, 0, 0], m = 3, nums2 = [1, 2, 3], n = 3;
//          1, 2, 3

function test(nums1, m, nums2, n) {
    if (m === 0) {
        nums1[m] = nums2[n - 1];
        return nums1;
    }
    let a = m + n - 1;
    m--;
    n--;
    console.log("a, m,n", a, m, n);

    while (a > -1) {
        if (nums2[n] > nums1[m]) {
            nums1[a] = nums2[n];
            console.log(nums1);
            n--;
        } else if (nums2[n] < nums1[m]) {
            nums1[a] = nums1[m];
            nums1[a - 1] = nums2[n];
            console.log(nums1);
            m--;
            n--;
        } else {
            break;
        }
        a--;
    }
    console.log(nums1);
}






console.log(test(nums1, m, nums2, n), typeof test(nums1, m, nums2, n));
