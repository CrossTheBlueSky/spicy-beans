/*~~~~~~~~~~~~~~~~~~~~~~~~Question~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.
Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. 
Note that pos is not passed as a parameter.

Do not modify the linked list.

~~~~~~~~~~~~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~~~~~~~~~~~~~

1. First let's check for boundary conditions
    1a. If head === null || head.next === null, return null
2. So I'll use the fast and slow pointer algorithm again.
3. While(fast != slow), we'll check some things
    3a. is fast equal to null? If so, return null
    3b. Otherwise, keep looping until they're equal. This confirms we have a cycle
4. Make a map to hold the values of fast(or slow, since they're equal)
5. Populate the map in a while loop, with a conditional
    5a. The conditional is if the map already has a value with the key we're about to add, return it
*/

//~~~~~~~~~~~~~~~~~~~~~First Attempt (failed)~~~~~~~~~~~~~~~~~~~~~~~~~

// var detectCycle = function(head) {
  
//     if(head === null || head.next === null){return null}
//     if(head.next == head){return head}

//     while(fast !=slow){
//         let slow = head
//         let fast = head.next
//         if(fast === null){return null}
//         if(fast === slow){return slow}
//         slow = slow.next
//         fast = fast.next.next
//     }

//     let map = new Map()
//     while(fast){
//         if(map.has(fast)){return fast}
//         else{map.set(fast, fast.val)}
//     }

    
// };

/*~~~~~~~~~~~~~~~~~~~~~~~Next Idea~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    1. Can I just run the map on the whole list instead of the subsection?
    (From the future) Yes, yes I can lol
*/

var detectCycle = function(head) {
  
    if(head === null || head.next === null){return null}
    if(head.next == head){return head}

   
    let map = new Map()
    let current = head
    while(current){
        if(map.has(current)){return current}
        else{map.set(current, current.val)}
        current = current.next
    }
    return current

    
};