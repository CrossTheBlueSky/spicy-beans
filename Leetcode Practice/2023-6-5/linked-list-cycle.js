/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Question~~~~~~~~~~~~~~~~~~~~~~~~
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
Internally, pos is used to denote the index of the node that tail's next pointer is connected to. 
Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

~~~~~~~~~~~~~~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~~~~~~~~~~~~~

1. As the List is traversed, we'll add the next pointers to a new array.
2. Check each node first to make sure the next pointer isn't null. If it is, return false, right away.
3. Then we'll see if it's next pointer is contained in the new array.
4. If so, return true.
5. This is definitely not 0(1) complexity, but from where I am I can't think of the better way.

~~~~~~~~~~~~~~~~~~~~Challenge~~~~~~~~~~~~~~~~~~~~~~
Can you solve this with 0(1) time complexity

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {

 let current = head
 let known = []

 if(!current){return false}


while(current){

    if(!current.next){return false}
    else if(current === current.next){
        return true
    }
    
    if(known.includes(current.next))
    {return true}

    known.push(current)
    current = current.next;


}
    
};

/*~~~~~~~~~~~~~~Thoughts~~~~~~~~~~~~~~
My algorithm is SOOOOOOOOOOOOO slow, apparently. It's in the bottom 5%. I need to think more on this

So I found a thing called the Fast and Slow Pointer Algorithm. Also known as Floyd's Cycle Detection Algorithm.

1. You take two pointers that move at different speeds. One fast and one slow. It doesn't matter how much faster the fast one goes than the other.
2. The condition to check in the loop is while they exist (so you haven't reach the end of the list), check if fast and slow are equal
3. If you hit the end of the list, it returns false.
4. But the black magic part is that they are guaranteed to meet at some point, based on how much faster you made the Fast pointer.
5. If you made it twice as fast, it will run the cycle twice as fast. But when the slow pointer finishes the cycle once, they will both be at the same spot.
6. This proves that it's a cycle.
7. It looks like this
8. Honestly, still kinda slow overall (just breaks into the top 66%), but still significantly faster than my implementation.
9. Looking at it again, I guess it's an environment issue. Cause I ran it 2 more times and it hit bottom 17% and then top 13% speeds.
*/

var hasCycle = function(head) {
    let slow = head
    let fast = head
    
    while (slow && slow.next) {
        slow = slow.next
        fast = fast.next.next
        
        if (slow === fast) {
            return true
        }
    }
    
    return false
}