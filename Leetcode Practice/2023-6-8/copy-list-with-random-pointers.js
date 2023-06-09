/* ~~~~~~~~~~~~~~Question~~~~~~~~~~~~~~~~~
A linked list of length n is given such that each node contains an additional random pointer, 
which could point to any node in the list, or null.

Construct a deep copy of the list. The deep copy should consist of exactly 
n brand new nodes, where each new node has its value set to the value of its c
orresponding original node. Both the next and random pointer of the new nodes 
should point to new nodes in the copied list such that the pointers in the original 
list and copied list represent the same list state. None of the pointers in the new list 
should point to nodes in the original list.

For example, if there are two nodes X and Y in the original list, where X.random --> Y, 
then for the corresponding two nodes x and y in the copied list, x.random --> y.

Return the head of the copied linked list.

The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

    val: an integer representing Node.val
    random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.

Your code will only be given the head of the original linked list.

~~~~~~~~~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~~~~~~

1. Loop through the list to make the list into a Map
    1a. The key will be a copy of the list at the current place in the loop (yes, the whole thing is the key)
    1b. The value will be the val field of the current place in the loop (I have now deep copied 1/3 of the list)
2. Loop through the list again. This is a bit abstract so I'll use multiple variables to break up my description
    
    Note:
    The reason I can use current despite it being a reference to the original list is because the key values are NOT referencial
    So instead of checking for it to be the same place in memory when I use get(), it just checks for the values to match.

    2a. Var 1 is map.get(current). Since the map uses entire chunks of the linked list as keys, this will traverse the map every time it updates
    2b. Var 2 is map.get(current.next). This is the value that has the next chunk of the list as its key
    2c. Var 3 is map.get(current.random). Similar to Var 2, but the key is whatever chunk of list is inside the random pointer
    2d. Now that we have our vars, the loop is simple
        var1.next = var2 || null (to account for the list ending)
        var1.random = var3 || null (to account for a pointer randomly pointing at null)
        current = current.next (to iterate through the loop)
3. And now the weirdest part. Return map.get(head)
    3a. This will fetch the value that has a key equal to the entire original linked list. Weird, I know
    3b. And the value in our map that has that key is just a copy of the entire linked list. 
    3c. It's really abstract, because it's essentially like holding up a photo of a building next to an identical building to compare them.

*/

/* // Definition for a Node.
* function Node(val, next, random) {
*    this.val = val;
*    this.next = next;
*    this.random = random;
*   };
*/ 

var copyRandomList = function(head) {


if(!head){
    return null
}

const headMap = new Map();
let current = head;
while(current){
    headMap.set(current, new Node(current.val))
    current = current.next
}

current = head
while(current){
    mapper = headMap.get(current)
    mapper.next = headMap.get(current.next) || null
    mapper.random = headMap.get(current.random) || null
    current = current.next
}

return headMap.get(head)
    
};