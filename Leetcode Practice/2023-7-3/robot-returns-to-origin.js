/* ~~~~~~~~~~~~~~~Question~~~~~~~~~~~~~~~
There is a robot starting at the position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this 
robot ends up at (0, 0) after it completes its moves.

You are given a string moves that represents the move sequence of the robot where moves[i] represents its ith move. Valid moves are 'R' (right),
'L' (left), 'U' (up), and 'D' (down).

Return true if the robot returns to the origin after it finishes all of its moves, or false otherwise.

Note: The way that the robot is "facing" is irrelevant. 'R' will always make the robot move to the right once, 'L' will always make it 
move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.

~~~~~~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~~~~~

1. So the only goal is to make check if the robot is where it started. First thing to do would be a boundary condition.
    1a. If the string is empty, return true.
    1b. If the Robot only moves an odd number of spaces, return false.
2. Following this, the most straightforward way is just to check if the number of ups equals the number of downs and if the number of lefts
    equals the number of rights. I'll do this by having two vars that go up or down based on a switch statement that reads the string.

*/

var judgeCircle = function(moves) {

    if(!moves){
        return true
    }
    
    if(moves.length % 2 != 0){
        return false
    }

    let x = 0
    let y = 0

    for(let i = 0; i < moves.length; i++){
        switch (moves[i]){
            case 'U':
                y++;
                break;
            case 'D':
                y--;
                break;
            case 'L':
                x--;
                break;
            case 'R':
                x++;
                break;
        }

    }


        return     x === 0 && y === 0;
    

};