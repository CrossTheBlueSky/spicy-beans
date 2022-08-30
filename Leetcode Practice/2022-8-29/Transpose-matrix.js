/* Related Topics - Array, Matrix, Simulation

~~~~~~~~~~~~~~~~~~~~~SETUP~~~~~~~~~~~~~~~~
Given a 2d integer array "matrix", return the transpose of "matrix"

The transpose of a matrix is the matrix flipped over its main diagonal,
switching the matrix's row and column indices.

2,   4, -1              2, -10, 18

-10, 5,  11   =====>    4,   5,  -7

18, -7,  6              -1,  11,  6
~~~~~~~~~~~~LOGIC~~~~~~~~~~~~~~~~

1. So the final result is that the new arrays that make up the array go
from describing the rows of the dataset to the columbs of the dataset.
2. So I would need to make an array that's [[0][0], [1][0], [2][0]] and
repeat, incrementing the 0 by 1.
    2a. So I can loop this with the limit being matrix[i].length, I believe
    2b. Each pass adds the current value to a new array, which itself gets
    added to an array after the loop ends.
3. I think I need to nest the above loop so that I can make sure that
i get every array for the new 2d solution array properly populated, since 
the above loop only fills one slot of the solution array
4. Once the loops run I should be able to return the solution

*/

var transpose = function(matrix) {

    transposedMatrix = []
    row = matrix.length
    column = matrix[0].length

    for(i = 0; i < row; i++)
    {

        for(j = 0; j < column; j++)
        {
            
            if(!transposedMatrix[j])
                {
                    transposedMatrix[j] = [];
                }
            
            transposedMatrix[j][i] = matrix[i][j]

        }
        
    }

    return transposedMatrix
    
};