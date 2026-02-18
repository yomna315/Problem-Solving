1/**
2 * @param {number[]} nums
3 * @param {number} target
4 * @return {number[]}
5 */
6var twoSum = function (nums, target) {
7  let arrIndexs={}
8  for (var i = 0; i < nums.length; i++) {
9    let S=target - nums[i]
10if(arrIndexs[S]!== undefined) return [arrIndexs[S],i]
11 arrIndexs[nums[i]]=i
12};
13}