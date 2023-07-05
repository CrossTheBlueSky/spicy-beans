/*~~~~~~~~~~~~~~Question~~~~~~~~~~~~~~
Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and 
all the elements on the secondary diagonal that are not part of the primary diagonal.

~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~~~~~

1. Set a sum variable to hold the answer. Set a var the length of mat -1
2. Loop through the array.
    2a. mat[i][i] will give the positive diagonal 
    2b. mat[i][mat[len-i]] will give the negative diagonal
    2c. Double check that the above values aren't the same spot in the array
    2d. If they aren't add them to the sum.

*/

var diagonalSum = function(mat) {
    
    let sum = 0
    let len = mat.length-1
    
    for(let i = 0; i < mat.length; i++){

        if(i !== len-i){
            sum += (mat[i][i]+mat[i][len-i])
        } else{
            sum += mat[i][i]
        }
    }

    return sum
};
