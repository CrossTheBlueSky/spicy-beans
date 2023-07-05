/*~~~~~~~~~~~~~~~~~~~~Question~~~~~~~~~~~~~~~~~~~
On an infinite plane, a robot initially stands at (0, 0) and faces north. Note that:

    The north direction is the positive direction of the y-axis.
    The south direction is the negative direction of the y-axis.
    The east direction is the positive direction of the x-axis.
    The west direction is the negative direction of the x-axis.

The robot can receive one of three instructions:

    "G": go straight 1 unit.
    "L": turn 90 degrees to the left (i.e., anti-clockwise direction).
    "R": turn 90 degrees to the right (i.e., clockwise direction).

The robot performs the instructions given in order, and repeats them forever.

Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.


~~~~~~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~~~~~~~~~~~~

1. It's not "Does it go in a circle." It's "Does its path stay within the confines of a circle" (title makes more sense now)
2. This still means the robot has to finish at 0, 0. Anything else will have it gradually move outside of whatever confines you put it in.
    so we'll track the x, y as the main logic
3. So a quick loop that keeps track of where the robot is at.
    3a. It'll be 3 if checks with if checks inside them (nesting bruh)
    3b. First check is if we're turning. If so, we have some logic inside to see where we're currently facing, and update our facing
    3c. Otherwise, we'll move forward in the direction we're facing. The "facing" logic will just be to tell us how we're modifying
        our tracked x,y
4. Boundary contidions
    4a. If there is no G, return true
    4b. If there are an odd number of G, return false ( I think. We'll see)

*/

var isRobotBounded = function(instructions) {

    inst = instructions.split("");
    
    if(instructions.includes("G") === false){
        return true
    };
    if(instructions.includes("G") && !instructions.includes("R") && !instructions.includes("L")){
        return false
    }
    
    let loc = [0, 0];
    let dir = "n";
    for(let i = 0; i < inst.length; i++){
        if(inst[i] === "L"){
            if( dir === "n"){
                dir = "w";
            }
            else if( dir === "s"){
                dir = "e";
            }
            else if( dir === "e"){
                dir = "n";
            }
            else if( dir === "w"){
                dir = "s";
            }
        }
        else if(inst[i] === "R"){
            if( dir === "n"){
                dir = "e";
            }
            else if( dir === "s"){
                dir = "w";
            }
            else if( dir === "e"){
                dir = "s";
            }
            else if( dir === "w"){
                dir = "n";
            }
        }
        else if(inst[i] === "G"){
            if( dir === "n"){
                loc[0]++
            }
            else if( dir === "s"){
                loc[0]--
            }
            else if( dir === "e"){
                loc[1]++
            }
            else if( dir === "w"){
                loc[1]--
            }
        }
    
    }
    
    if(loc[0] === 0 && loc[1] === 0){
        return true;
    }
    if(dir !== "n")
    {return true}
    
    return false
    
    };