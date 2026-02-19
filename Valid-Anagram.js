1/**
2 * @param {string} s
3 * @param {string} t
4 * @return {boolean}
5 */
6var isAnagram = function (s, t) {
7 
8  return s.split("").sort().join("") === t.split("").sort().join("");
9
10
11};