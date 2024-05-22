/*
Given an m x n integer matrix, if an element is 0, set its entire row and column to 0's.
Solve it in-place without using extra space.

~~~~~~~~~~~~LOGICAL BREAKDOWN~~~~~~~~~~

 I STRUGGLED ON THIS FOR SO LONG BECAUSE THE QUESTION IS AMBIGUOUS. 

 "without using extra space" means specifically not using another array to hold the output. That means my intuition the
 first time round actually made sense!!!!!

 1. Traverse the matrix and store each zeros location in another array
 2. loop through the stored zeroes array, setting every element from the original array that shares an x or y with it to 0



*/


function setMatrixZeroes(matrix){

    let zeroes = []

    for(let i=0; i < matrix.length; i++){

        for(let j=0; j< matrix[0].length; j++){
            if(matrix[i][j] === 0){
                zeroes.push([i,j])
            }
        }
    }

    for(let k=0; k < zeroes.length; k++){
        x = zeroes[k][0]
        y = zeroes[k][1]
        for(let l = 0; l < matrix.length; l++){
            if(l === x){
                matrix[l].fill(0)
            }
            matrix[l][y] = 0
            
        }
    }


}


module.exports = setMatrixZeroes