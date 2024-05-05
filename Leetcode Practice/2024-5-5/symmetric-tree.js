/*~~~~~~~~~QUESTION~~~~~~~~~~~

Given the root of a binary tree, check whether it is a mirror of itself 
(i.e., symmetric around its center).

~~~~~~~LOGICAL BREAKDOWN~~~~~~~~~~~

1. I'm a simple man. I see a tree, I recurse
2. So the recursion will follow this route:
    2a. Dig down to the bottom leftmost child and the bottom rightmost child
    2b. Check for equality and return up
    2c. Continue process
3. The main thing is that the recursions need to unwind at the same time for
    checks to actually work, so I think I need a second helper function
4. This one will take the results of the first helper function as inputs
    4a. And I think this is actually where the equivalence check should happen


~~~~~THOUGHTS~~~~~~~~~~~

I feel like I got this one a lot easier than I normally do with trees,
so I'm gonna comment this up just to try and force this understanding to
stick long-term
*/

var isSymmetric = function(root) {
    
    //helper function
    // needed so that whatever values being compared are accessed 
    // at the same time by passing the recursive calls as arguments
    // (if one finishes first, the function won't try to continue until
    //    the other finishes)

    function isEqual(left, right){
        
        //If they're both null, return true
        // Since i need to check their .vals later
        // I can't have this logic fit into the later if check
        //(check .val on null will error out)
        if(!left && !right){
            return true
        }

        //If one is null and the other isn't, return false.
        //Same as above, the val check can't handle this because
        // runtime errors on accessing a val that doesn't exist
        if((!left && right) || (left && !right)){
            return false
        }

        //the actual check. Will end recursion and cause the function
        //to start unwinding
        if(left.val !== right.val){
            return false
        }

        //This just makes recursion happen on both children of the
        // current nodes. 
        return isEqual(left.left, right.right) && isEqual(left.right, right.left)
        
    }

        return isEqual(root.left, root.right)
    
};