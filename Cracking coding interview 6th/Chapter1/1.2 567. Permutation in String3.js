// Given two strings s1 and s2, return true if s2 contains a
// permutation
//  of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

// Constraints:

// 1 <= s1.length, s2.length <= 104
// s1 and s2 consist of lowercase English letters.

var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) {
    return false;
  }

  let s1Count = new Array(26).fill(0);
  let s2Count = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    s1Count[s1.charCodeAt(i) - 97]++;
    s2Count[s2.charCodeAt(i) - 97]++;
  }

  let matches = 0;
  for (let i = 0; i < 26; i++) {
    if (s1Count[i] === s2Count[i]) {
      matches++;
    }
  }

  // console.log(structuredClone(s1Count), structuredClone(s2Count));

  let l = 0;
  for (let r = s1.length; r < s2.length; r++) {
    if (matches === 26) {
      return true;
    }

    let index = s2.charCodeAt(r) - 97;
    s2Count[index]++;

    console.log(s1Count[index], s2Count[index]);
    if (s1Count[index] === s2Count[index]) {
      matches++;
    } else if (s1Count[index] + 1 === s2Count[index]) {
      matches--;
    }

    index = s2.charCodeAt(l) - 97;
    s2Count[index]--;
    if (s1Count[index] === s2Count[index]) {
      matches++;
    } else if (s1Count[index] - 1 === s2Count[index]) {
      matches--;
    }
    l++;
  }
  return matches === 26;
};

// const string1 = ["ab", "eidbaooo"];
// const string2 = ["ab", "eidboaoo"];
const string3 = ["abc", "abbbca"];
// const string4 = ["adc", "dcda"];
// const string5 = ["hello", "ooolleoooleh"];

// console.log(checkInclusion(string1[0], string1[1]));
// console.log(checkInclusion(string2[0], string2[1]));
console.log(checkInclusion(string3[0], string3[1]));
// console.log(checkInclusion(string4[0], string4[1]));
// console.log(checkInclusion(string5[0], string5[1]));
