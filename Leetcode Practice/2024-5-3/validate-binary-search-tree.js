/*~~~~~~~~~~~~~QUESTION~~~~~~~~~~~~~

Given the root of a binary tree, determine if it is a valid 
binary search tree (BST).

A valid BST is defined as follows:

    The left subtree of a node contains only nodes with keys 
    less than the node's key.

    The right subtree of a node contains only nodes with keys 
    greater than the node's key.

    Both the left and right subtrees must also be 
    binary search trees.

    ~~~~~~~~~~~~~~LOGICAL BREAKDOWN~~~~~~~~~~~

    1. I think recursion is the right answer here. So as far as my understanding currently, that means I need a default output that can be toggled
        at any depth of recursion and passed back upward if it ever flips.
    2. So each recursion needs to answer:
        1. Is this a null node (to start unwinding a valid loop)
        2. Is val > left
        3. is val < right
        4. Both 2 and 3 have to be true at the same time for validation. If they aren't the loop needs to start unwinding
    3. Left and right are nodes so I don't think I can access their val directly

    ~~~~~~~~SOLUTION~~~~~~~~~~~~~~~~
    I couldn't figure it out, so I looked it up. Here's what I found

    The logic here is easier to grasp if you imagine flattening the tree into a straight line with the "root" being a point on the line, and the question
    being asked "is this line in increasing order?"

    1. First you declare a prev variable and declare it null. This will wind up being the secret sauce of the whole operation
    2. Then you write a validating function that takes a node and returns true or false with the following logic:
        2a. If current node is null (signalling the end of a branch), return true. If not, continue
        2b. Recursively call the validator on the left child of the current node. This will cause the logic to move to the far left of our "line"
            -As it checks each node from left to right, it will return false if any of them fails the following logic
        2c. Checks if the prev variable is not null (since prev isn't updated yet, this won't run until we get to the leftmost child)
            -Once prev isn't null, this will check that node.val is less than prev.val, since prev is always going to be the node to the right of the current node.
            - if node.val isn't less than prev.val, it will return false, otherwise it will keep running right until it hits null and 2a causes it to unwind true
        2d. If it gets past all of those checks, it will then update prev to the current node, then call the logic again on the node to the right
            
    */

    var isValidBST = function(root) {

        let prev = null;
        function validator(node){

            if(node === null){
                return true
            }


            if(!validator(node.left)){
                return false
                }


            if(prev !== null && node.val <= prev.val){
                return false      
            }
                prev = node
                return validator(node.right)
        }

        return validator(root)
};