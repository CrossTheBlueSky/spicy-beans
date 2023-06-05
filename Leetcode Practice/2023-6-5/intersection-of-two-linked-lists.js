/*~~~~~~~~~~~~~~~~~~~~~~Question~~~~~~~~~~~~~~~~~~~~~
Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. 
If the two linked lists have no intersection at all, return null.


The test cases are generated such that there are no cycles anywhere in the entire linked structure.
Note that the linked lists must retain their original structure after the function returns.


~~~~~~~~~~~~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~~~~~~~~~~

1. The obvious thing, and it would have a nightmarishly slow complexity would be to check each node individually against 
the entire other list. But I know that's bad, so I need to crunch the brain here a bit.
2. Okay, I've got something. a pointer for both heads that goes to the end of the list and counts how many steps it took to get there.
3. Then traverse both arrays again (OOOOOOOOF) to the difference between the two counts.
4. If those two nodes are equal, return true
5. That's the best idea I have right now, so I'll have to do some reading afterwards.

~~~~~~~~~~~~~~~~~~~Challenges~~~~~~~~~~~~~~~~~~~~~~
Write a solution that runs in 0(m+n)time and (0)1 memory.
*/

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * 
 * ~~~~~~~~~~~~~~~~~~~~~Notes~~~~~~~~~~~~~~~~~~~~~~
 * My initial idea didn't work, and I had to do some research. I'll keep my code here commented out before I paste the solution and explanation
 * 

var getIntersectionNode = function(headA, headB) {

    let a = headA
    let b = headB
    let c = null
    let count = 0
    
    while (a.next && b.next){
            a = a.next
            b = b.next
            count++
        if(!a.next){
            c = headA
            console.log(c)
            console.log(b)
        } else if (!b.next){
            c = headB
            console.log(c)
            console.log(a)
        }
    }
    
    
    for(i = 0; i < count; i++){
        c = c.next
    }

    if(c === b || c === a){
        return c
    }

    return null
    

};
*/

var getIntersectionNode = function(headA, headB) {
    let a = headA, b = headB
    while (a !== b) {
        a = !a ? headB : a.next
        b = !b ? headA : b.next
    }
    return a
};

/*~~~~~~~~~~~Explanation~~~~~~~~~~~~~~~~
    1. Set your temp variables to the given heads.
    2. Enter a while loop that iterates as long as a and b are not equal
    3. The while loop has 2 ternary operators:
        3a. is a null? If so, set a equal to HeadB. If not, a = a.next
        3b. same as above, but for b
    4. This basically concatenates the lists together, so both lists become the same length.
        4a. So you get two lists
            1, 2, 3, 4, 5, 6, 7 , 8
            1, 2, 7, 8

            that then become
            1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 7, 8
            1, 2, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8

        4b. As you traverse and check both lists at the same time, you'll eventually hit the point where they match without needing to 
        check each value individually.
    5. If they don't have any match, the loop will terminate when they both hit the end (since they'll both be equal to null)
    6. When the loop exits, return either temp variable because they will be equivalent at that point

*/