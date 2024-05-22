/*

Given an m x n matrix, return all elements of the matrix in spiral order.

Start from the top-left corner and end in the center

[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

~~~~~~~~~~~~~~~~LOGICAL BREAKDOWN~~~~~~~~~~~~~~

I actually hate this question every time I encounter it

1. Declare an output array to hold the answer
2. The requirement is to return [1,2,3,6,9,8,7,4,5], so lets sort that out
3. Maybe break down the order that things happen and look for logical commonalities:
    [0][0], [0][1], [0][2], [1][2], [2][2], [2][1], [2][0], [1][0], [1][1]
4. Maybe loop in a way that keeps the values of i and j changing until every element has been visited?
    4a. The constraints should be the length of the columns and the length of the rows.
    4b. First act is traverse the row until it hits the constraint.
    4c. Second act is traverse the columns until it hits the constraint.
    4d. Then traverse the row in reverse until it hits [0]
    4e. After every step the constraint variables should be reduced to keep the logic in bounds
    4f. Maybe the check to end the spiraling would be if the output has the same length as a flattened version of matrix


*/

function spiralMatrix(matrix){

    if(matrix.length < 1){
        return matrix
    }
    const out = []
    const flat = matrix.flat()
    let top = 0
    let left = 0
    let bottom = matrix.length
    let right = matrix[0].length
    let row = 0
    let column = 0

    while(out.length < flat.length){
        if(row === top && column === left){
            while(column < right){
                out.push(matrix[row][column])
                column++
            }

        }else if(column === right && row === top){
            column--
            row++
            while(row < bottom){

                out.push(matrix[row][column])
                row++
            }

            right--
            top++
        }else if(column === right && row === bottom){
            row--
            column--
            while(column >= left){
                out.push(matrix[row][column])
                column--
            }
            bottom--
            column++

        }else if(column === left && row === bottom){
            row--
            while(row >= top){
                out.push(matrix[row][column])
                row--
            }

            bottom--
            left++
            column++
            row++

        }
    }

    return out
}

module.exports = spiralMatrix