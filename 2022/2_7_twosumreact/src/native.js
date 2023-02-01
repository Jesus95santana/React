<<<<<<< HEAD
// export function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target) {
//         console.log(`[${i}, ${j}]`);
//       }
//       break;
//     }
//     break;
//   }
// }

export function add(x,y) {
  return x + y;
=======
const twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        console.log(`[${i}, ${j}]`);
      }
      break;
    }
    break;
  }
>>>>>>> develop
}
