/*~~~~~~~~~QUESTION~~~~~~~~

Given the head of a linked list, remove the nth node from the end of the list and return its head.


~~~~~~~LOGICAL BREAKDOWN~~~~~~~~~~~~~~
1. Use the two pointer approach with a gap between slow and fast equal to n
2. When the loop stops, update slow.next to slow.next.next
3. return the head

*/

var removeNthFromEnd = function(head, n) {
    
    // Params said there will always be at least one node and n will always be 1 or more, 
    // so this returns null if there's only one node
    if(!head.next){
        return null
    }
    
    //This sets fast n number of nodes ahead of slow
    let slow = head
    let fast = head
    for(let i = 0; i < n; i++){
        fast = fast.next
    }
    
    //If fast hits the end of the list, it means the nth node from the end is head itself
    if(fast === null){
        return head.next
    }

    //This gets slow to the node before the node to be removed
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next
    }

    //Updating the pointer deletes the required node
    slow.next = slow.next.next
    
    
    return head
    
};