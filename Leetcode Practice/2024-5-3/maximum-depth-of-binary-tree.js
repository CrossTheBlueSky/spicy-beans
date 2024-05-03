/*~~~~~~~~~~QUESTION~~~~~~~~~~~~~~~

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest 
path from the root node down to the farthest leaf node.


~~~~~~~~~~LOGICAL BREAKDOWN~~~~~~~~~~~~~~~

1. A recursive approach will work best here.
2. Start by declaring an output variable
3. Write a simple function that checks if there is a node at the
    left or right branches and returns them if so.
    3a. Function will take a node and the current depth count as arguments
    3b. If it returns a node, it will also increment the depth counter
4. Write a second function that calls the first one
    4a. This one will receive a node and depth counter as arguments.
    4b. If the depth counter it has is higher than the current output,
        it will increment the output and its own count before calling
        the first function with the given node
5. Both functions should have logic to break in case of null
6. Once they run, return out+1 (to represent the first node)

~~~~~~~~~~BETTER IMPLEMENTATION~~~~~~~~~~~~~~

1. Looks like there's a way more elegant version that I'll paste and 
    explain here:

    var maxDepth = function(root) {
    if (!root) return 0;
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
};

    I use 3 functions and this one only calls the main function.
    The main function works like this now:
    1. Check if root exists
    2. Cal
*/

var maxDepth = function(root) {
    if(!root){
        return 0
    }
    
    let out = 1
    function checkAndCount(node, depth){
        
        let left = node?.left ? node.left : null
        let right = node?.right ? node.right : null

        if(left){
            let curr = depth+1
            incrementAndRecurse(left, curr)
        }
        if(right){
            let curr = depth+1
            incrementAndRecurse(right, curr)

        }
    }

    function incrementAndRecurse(node, depth){
        console.log(node)
        if(depth > out){
            out = depth
        }
        checkAndCount(node, depth)

    }
    
    checkAndCount(root, out)

    return out

};