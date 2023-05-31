/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Question~~~~~~~~~~~~~~~~~~~~~~~~~~
You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). 
The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of 
all the 0's in each row.

A row i is weaker than a row j if one of the following is true:

    The number of soldiers in row i is less than the number of soldiers in row j.
    Both rows have the same number of soldiers and i < j.

Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.

~~~~~~~~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. So first things first, I need to find the strength of each row.
2. Each sub array is a row, so I'll need to work on those first.
3. So the first part of the process is determining the strength of each row, and adding it to a new array
    3a. iterate over the matrix until I hit the length of the primary array. 
    3b. At each pass, add them to the arry with values being
            their index in the primary array
            the number of 1's in the row
            the length of the row
4. Sort the array
    4a. Arguments would be first by the number of ones, and then by length
5. Make a loop that runs k times, to read arr[k].value and add it to the output array

*/

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */

var kWeakestRows = function(mat, k) {
   
    let arr = []
    let output = []


    for (i = 0; i < mat.length; i++){
        let row = mat[i]
        let strength = row.lastIndexOf(1)+1
        length = mat[i].length
        arr.push({row: i, strength: strength, length: length})
    }

    arr.sort((a,b) => {
        
        return a.strength - b.strength || a.length - b.length})

    for(i = 0; i < k; i++){
        output.push(arr[i].row)
    }

    return output
}