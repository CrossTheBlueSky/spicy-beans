/* Related Topics - Array

~~~~~SETUP~~~~~~~~

You are given two integers, x and y, which represent your current location on a Cartesian
grid. You are also given an array "points" where each points[i] = [a^i, b^i] represents a point
that exists at (a^i, b^i)/ 

A point is valid if it shares the same x or y coordinate as your location.

The Manhattan Distance between two points is abs(x^1 - x^2) + abs(y^1 - y^2)

~~~~~~~GOAL~~~~~~~~

Return the index of the valid point with the smallest Manhattan distance from your current
location. 

If there are multiple, return the valid point with the smallest index.

If there are no valid points, return -1.

~~~~~~~~~~LOGIC~~~~~~~~~~

1. Initialize validPoint to [-1, -1]
2. Search through array for every valid index
3. Find manhattan distance of first valid index, save to validPoint as [manhattanDistance, index]
    3a. Continue finding distance for each index, then comparing it to previous index to 
        see which is smaller. If it is smaller overwrite the variable. If it is equal
        or greater, move on.
4. return validPoint[1]

*/

var nearestValidPoint = function(x, y, points)
{
    
validPoint = -1;
distances = [];

for(i = 0; i < points.length; i++)
{
    if(x == points[i][0] || y == points[i][1])
    {
        distances.push([Math.abs(x-points[i][0]) + Math.abs(y-points[i][1]), i])
    }


}

if(distances.length > 0)
{
  distances.sort((a,b) => (a[0] - b[0]) || (a[1] - b[1]))
  validPoint = distances[0][1] 
}

return validPoint

};