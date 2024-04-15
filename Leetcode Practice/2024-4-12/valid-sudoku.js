/*~~~~~~~~QUESTION~~~~~~~~~~~~~~~
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

    Each row must contain the digits 1-9 without repetition.
    Each column must contain the digits 1-9 without repetition.
    Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

Note:

    A Sudoku board (partially filled) could be valid but is not necessarily solvable.
    Only the filled cells need to be validated according to the mentioned rules.

Ex:
Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

~~~~~~~~~~~~LOGICAL BREAKDOWN~~~~~~~~~~~~~

1. So the order doesn't necessarily matter, it's about finding duplicates and comparing them
2. So I need to populate some arrays that match the conditions (columns, rows, sub-boxes) to start.
3. Then I'll copy those arrays into sets and compare their sizes. If they're not equal, return false
4. If all the logic runs the function ends with a true return
5. I can make my algo as nasty as I want since it will ALWAYS be 9x9

~~~~~~~ANSWER~~~~~~~~~~~~~~~

I couldn't actually think of how to write it well since I don't work with sets that often, so I looked at the solution.
It was a lot more intuitive than I thought to be honest.

*/

var isValidSudoku = function (board) {
    const hashset = new Set();

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const subBox = Math.floor(i / 3) * 3 + Math.floor(j / 3); //formula to calculate 3X3 matrix
            const subBoxString = `${subBox}-${board[i][j]}`; // to store unique value in 3x3 matrix
            const rowString = `row-${i}-${board[i][j]}`; // to store unique value in row
            const columnString = `column-${j}-${board[i][j]}`; // to store unique value in column

            if (hashset.has(subBoxString) || hashset.has(rowString) || hashset.has(columnString)) {
                return false; //if already present in hashset then return false
            }
            if(board[i][j]==="."){ // don't store "." in hashset
                continue;
            }
            // store value in the set
            hashset.add(subBoxString);
            hashset.add(rowString);
            hashset.add(columnString);
        }
    }
    return true;

    
        


    

};