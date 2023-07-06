/*~~~~~~Question~~~~~~~~~
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.


~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~~

1. Since it must be done in place I need to be careful about not having the logic hiccup and make the whole matrix 0
2. So step 1 is to first find where all the 0's are
    2a. Nested for loops. Outer one cycles between which row of the matrix we're traversing
    2b. Second loop checks each index for a 0 value. If it finds one, it adds the index (not the value) to a new array
3. Iterate over the array of indices made above.
    3a. For each index found, set all x values at the y coord to 0
    3b. Do the same for they values at the x coord
    3c. Do this for each index in the array
4. The original array should be ready to return now


*/

var setZeroes = function(mat) {

    let zeroes = []

    for(i = 0; i < mat.length; i++){

        for(j=0; j < mat[i].length; j++){
            if(mat[i][j] === 0){
                zeroes.push([i, j])

            }
        }
    }
    
    zeroes.forEach((e)=>{
        mat[e[0]].fill(0)
        for(let i = 0; i < mat.length; i++){
            mat[i][e[1]] = 0;
        }
    })

    return mat
};