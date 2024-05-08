/*~~~~~~~~~~QUESTION~~~~~~~~

Given an integer array nums where the elements are sorted in ascending 
order, convert it to a height-balanced binary search tree.

~~~~~~~~~~LOGICAL BREAKDOWN~~~~~~~~~~~

1. Find the midpoint of the array, set that as the root
2. If the array is odd:
    2a. Create nodes in the .left of the root for the elements
        in the lower indexes
    2b. Create nodes in the .right of the root for the elemeents 
        in the higher indexes.
3. If the array is even:
    3a. I'll choose to have the .right be the bigger side of the tree
    3b. So then we'll follow the same logic as above, but in the
    length-2 index of the array of filling the right side,
    we'll set the val to the length-1, place the length-2 in the .left,
    and place the last element in the .right

~~~~~~~~~~SOLUTION~~~~~~~~~~~~~

My logical breakdown was flawed. The proper solution uses recursion

1. Finding the midpoint and setting that to root was correct
2. Setting left and right to the numbers to the left and right of 
    mid was correct
3. But I didn't realize that those 2 operations just needed to be 
    repeated by slicing the array on either side.

*/

var sortedArrayToBST = function(nums) {
    if (nums.length === 0) {
        return null;
    }
    
    const mid = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[mid]);
    
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));
    
    return root;
};

// var sortedArrayToBST = function(nums) {

//     let mid = Math.floor(nums.length/2)
//     let root = TreeNode(nums[mid])
//     let leftBranch = root
//     let rightBranch = root
//     for(let i = mid; i >-1; i--){

//         if(i % 2 === 0 && i === 2){
//             leftBranch.left = TreeNode(nums[1], null, nuull)
//             leftBranch = leftBranch.left
//             leftBranch.left = TreeNode(nums[0])
//             leftBranch.right = (nums[2])
//             break
//         }
        
//         leftBranch.left = TreeNode(nums[i], null, null)
//         leftBranch = leftBranch.left
//     }
//     for(let j = mid; j < nums.length; j++){
//         rightBranch.right = TreeNode(nums[j], null, null)
//         rightBranch = rightBranch.right
//     }

//     return root
    
// };

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */