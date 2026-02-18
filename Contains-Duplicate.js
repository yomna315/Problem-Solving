1/**
2 * @param {number[]} nums
3 * @return {boolean}
4 */
5var containsDuplicate = function (nums) {
6const myHashSet = new Set(nums)
7
8  return nums.length!==myHashSet.size;
9}
10
11