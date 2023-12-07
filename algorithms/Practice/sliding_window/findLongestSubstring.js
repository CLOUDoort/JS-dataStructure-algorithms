/*
Sliding Window - findLongestSubstring
문자열을 받아 모든 고유 문자가 포함된 가장 긴 하위 문자열의 길이를 반환하는 findLongestSubstring이라는 함수를 작성하세요.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
Time Complexity - O(n)
*/

function findLongestSubstring(str) {
  let start = 0;
  let end = 0;
  const count = {};
  let maxLen = 0;

  while (start < str.length) {
    if (!count[str[end]] && end < str.length) {
      count[str[end]] = 1;
      end++;
    } else if (count[str[end]]) {
      maxLen = Math.max(maxLen, end - start);
      count[str[start]] -= 1;
      start++;
    } else break;
  }

  return Math.max(maxLen, end - start);
}

function findLongestSubstring(str) {
  let seen = {};
  let longest = 0;
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }
  return longest;
}
