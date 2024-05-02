/* ~~~~~~~~~~~QUESTION~~~~~~~~~~

Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Bonus: O(n) time and 0(1) space

~~~~~~~~~~~~~~~~~~LOGICAL BREAKDOWN~~~~~~~~~~~~~~

Intuitive, but dirty answer: Copy all the values to an array, then check the array with its reversed self

1. The bonus actually helps give me a hint here. 0(1) space means that the only thing I should be adding to memory is pointers
2. Let's start by finding the middle of the list with two pointer
3. Then I can reverse the second half of the list starting from slow.next
4. Then I can loop again to check each node of the second half with the first half
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
    if(!head.next){
        return true
    }
    

    let slow = head
    let fast = head
    while(fast.next && fast.next.next){
        slow = slow.next
        fast = fast.next.next

    }
    

    let prev = null
    let curr = slow.next
    while(curr !== null){
        let next = curr.next

        curr.next = prev
        prev = curr
        curr = next

    }

    let forward = head
    let reverse = prev
    while(reverse !== null){
        if(forward.val !== reverse.val){
            return false
        }else{
            forward = forward.next
            reverse = reverse.next
        }
    }
    return true
};