/* ~~~~~~~~~~~~Question~~~~~~~~~~~~~~~
Given a 2D integer array moves where moves[i] = [rowi, coli] indicates that the ith move will be played on grid[rowi][coli].
 return the winner of the game if it exists (A or B). In case the game ends in a draw return "Draw". 
 If there are still movements to play return "Pending".

You can assume that moves is valid (i.e., it follows the rules of Tic-Tac-Toe), the grid is initially empty, and A will play first.

~~~~~~~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~

1. First thing is to boundary check. In this case, a game can't be over if it's less than 5 moves. If it's at 9, there must be a winner or it's
    a draw. So do a check for 9 moves at the very end if all else fails.
2. Next, make a grid to hold the moves. Instead of confusing myself with a 3x3 array, I'll make it a flat array with 9 indexes
    In an abstract sense, it'll be like
        0 1 2
        3 4 5
        6 7 8
3. First find out who the winner would be if there is one and take their moves
    3a. Check the length of moves. If it's Odd, then A is the player to track (since A always goes first). Otherwise it's b
    3b. Filter moves so just include the moves of the tracked player
4. Add the moves of the tracked player to the grid.
    4a. move[0] is the row, but since my array is flat, I'll have to multiply it by 3 to get to the same spot (0, 3, or 6)
    4b. move[1] is the column, so I can just add it to whatever I'm at to get to the proper index (since it'll be between 0-2)
5. Now I have a grid of 0's and 1's. I need something to check them against, so make an array of win conditions.
    5a. Horizontals would be [0,1,2], [3,4,5],[6,7,8]
    5b. Verticals would be [0,3,6], [1,4,7], [2,5,8]
    5c. Diagonals would be [0,4,8], [2,4,6]
6. Loop through the win conditions and check to see if there's a match
    6a. if win[i][0] win[i][1] win[i][2] all equal 1, return the tracked player
7. If the loop finishes and we've played 9 moves, return a draw.
8. Otherwise return pending
*/

var tictactoe = function(moves) {
    

    if(moves.length < 5){
        return "Pending"
    }

    let currentPlayer = null
    let playerMoves = [];
    let grid = new Array(9)
        grid.fill(0);
    const winCons = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
        ]


        if(moves.length % 2 === 0){
        currentPlayer = "B"
        playerMoves = moves.filter((val, i)=>{return i % 2 != 0})
    } else{
        currentPlayer = "A"
        playerMoves = moves.filter((val, i)=>{return i % 2 === 0})
    }

    playerMoves.forEach((e)=>{
        grid[(e[0]*3)+e[1]] = 1
    })
 
    for(i = 0; i < winCons.length; i++){
        if(grid[winCons[i][0]] === 1 && grid[winCons[i][1]] === 1 && grid[winCons [i][2]] === 1){
            return currentPlayer;
        }
    }

        if(moves.length === 9){
        return "Draw"
    }

    return "Pending"


};