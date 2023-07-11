/*~~~~~~~~~~~~~~~Question~~~~~~~~~~~~~~~~~~~
You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. 
Check if these points make a straight line in the XY plane.

~~~~~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~~~~

1. So a straight line is characterized by having the same slope
2. I can't think of an immediate boundary condition to shortcut obvious results, so I'll just have to check for slope directly


*/

var checkStraightLine = function(coordinates) {
    let a = -(coordinates[1][1] - coordinates[0][1]);
    let b = coordinates[1][0] - coordinates[0][0];
    return coordinates.every(
        item =>
            a * (item[0] - coordinates[0][0]) +
                b * (item[1] - coordinates[0][1]) ===
            0
    );
};