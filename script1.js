function findMissingNumber(nums) {
    const n = nums.length;
    
    const expectedSum = (n * (n + 1)) / 2;

    const actualSum = nums.reduce((sum, num) => sum + num, 0);

    return expectedSum - actualSum;
}

const nums1 = [3, 0, 1];
console.log(findMissingNumber(nums1)); // 2

const nums2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(findMissingNumber(nums2)); // 8

const nums3 = [0, 1];
console.log(findMissingNumber(nums3)); // 2
