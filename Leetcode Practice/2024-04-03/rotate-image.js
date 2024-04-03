/*

~~~~~~~~~~~~QUESTION~~~~~~~~~~~~~~
You are given an n x n 2D matrix representing an image, 
rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify 
the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

~~~~~~~~~~~~~EXAMPLES~~~~~~~~~~~~~~
Example 1: 
    Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
    Output: [[7,4,1],[8,5,2],[9,6,3]]

Example 2:
    Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
    Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

~~~~~~~~~~~~LOGICAL BREAKDOWN~~~~~~~~

Remember, the goal is to reach the output, not necessarily "rotate" the array like they ask. Be open-minded!

1. The matrices will always be squares, which seems vital here.
2. The output arrays are actually just arrays of the [i] of each original array.
3. The prompt doesn't say it has to be done with no additional space, just that I can't make another 2d array. So
    I can unshift my answer arrays onto the input and trim the length to get my answer instead of messing with every
    single 1d array in the matrix
4. In order to do this in one loop and reduce time complexity, I think I'll do a counter variable outside of [i]
    4a. Loop through and grab element[i] of each array and push them to a new array
    4b. At the end of the loop, push the new array to the matrix
5. After the loop runs, set the length of the matrix to its original length and return

I feel like there has to be a way to do this that isn't 0(n^2). Let me think... 
Couldn't come up with anything. Let's just see what other people did

I LOOKED IT UP AND THERE IS NO SOLUTION THAT ISN'T 0(n^2) TIME COMPLEXITY AAAAAAAAAH



Example 1: 
    Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
    Output: [[7,4,1],[8,5,2],[9,6,3]]

*/

var rotate = function(matrix) {
    const n = matrix.length;
	
	function transpose() {
		for(let i = 0; i < n; i++) {
			for(let j = i + 1; j < n; j++) {
				const temp = matrix[j][i];
				matrix[j][i] = matrix[i][j];
				matrix[i][j] = temp;
			}
		}
	}
	
	function rotate() {
		for(let i = 0; i < n; i++) {
			for(let j = 0; j < n / 2; j++) {
				const temp = matrix[i][j];
				matrix[i][j] = matrix[i][n - 1 - j];
				matrix[i][n - 1 - j] = temp;
			}
		}
	}
	
	transpose(matrix);
	rotate(matrix);
};