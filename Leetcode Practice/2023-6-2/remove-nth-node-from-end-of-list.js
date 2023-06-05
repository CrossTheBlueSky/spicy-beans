/*~~~~~~~~~~~~~~~~~~Question~~~~~~~~~~~~~
Given the head of a linked list, remove the nth node from the end of the list and return its head.

~~~~~~~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~~~~
1. It's a singly linked list, so I can't just go n steps backward at first.
2. So - count how many nodes are in the list
3. Subtract n from count
4. Traverse the list to the new value of count-1
5. Update the pointer at that node to next.next
6. Return the list


~~~~~~~~~~~~~~~~~~~~NOTES~~~~~~~~~~~~~~~~~~~
Had a few hiccups. Gonna comment up the code to explain them
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {


// This checks to see if there is only one node in the list (if !head.next means that the next pointer is null)
// If it is the only node, and the space to remove is 1 (meaning it's removing the only element), then it returns null since all elements 
// are removed. 
    if(n === 1 && !head.next){
        return null
    }

    let output = head
    current = output
    let count = 0
    while(current){
        current = current.next
        count++
    }

    count = count-n
    current = output
    
//This caused me a lot of problems. Basically, if count and n were equal (meaning we're skipping the first element) we need to catch it
// In this case, instead of adding it to an iterator, I felt like it would be faster to just check this right away and directly update the 
// output

    if(count === 0){
        output = current.next
    }

//The key here is that after the previous segment, if count was 0, then current is sitting on a node with a null pointer, so this loop
// doesn't even run. And since I updated output directly, current can sit on this node without it having an effect on the result
  
    let i = 0
    while(current){
        if(i === count-1){
            current.next = current.next.next
            i++
        } else{
            current = current.next
            i++
        }
    }





    return output
};