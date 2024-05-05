/*~~~~~~~~QUESTION~~~~~~~~~~

Given the root of a binary tree, return the level order traversal of 
its nodes' values. (i.e., from left to right, level by level).

~~~~~~~LOGICAL BREAKDOWN~~~~~~~~~~~~~~~

1. So the main concept behind level order traversal is a queue system.
    I think the logic works like
2. Initialize the queue with root as the only element
3. Initialize an output to hold nodes 
4. Write a function that takes the queue as an input
    4a. While the queue isn't empty:
    4b. Take the first node of the queue, add its children to the queue,
        add the node to the output, and then remove it from the queue
5. Return the output

~~~~~~~~~SECOND THOUGHTS~~~~~~~~~~

1. I didn't realize that the results needed to be grouped level by level
2. With that in mind, I think I need to structure the queue as an array
    of objects, with keys of "level" and "node"
3. Then in the while loop I push the values into an array at 
    an index equal to "level"
*/

var levelOrder = function(root) {

    if(!root){
        return []
    }
    const queue = [{level: 0, node: root}]
    const out = []
    let depth = 0


    while(queue[0]){
        
   

            let node = queue[0].node
            let currentLevel = queue[0].level
            if(node.left){
                queue.push({level: currentLevel+1, node: node.left})
            }
            if(node.right){
                queue.push({level: currentLevel+1, node: node.right})
            }
            queue.shift()
            if(!out[currentLevel]){
                out[currentLevel] = []
            }
            out[currentLevel].push(node.val)
            
            
        }
    
    return out

};