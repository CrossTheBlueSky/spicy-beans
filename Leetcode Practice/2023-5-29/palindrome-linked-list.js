/* ~~~~~~~~~~~~~~~~~~~~~Summary~~~~~~~~~~~~~~~
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Attempt to do it in 0(n) time and 0(1) space


~~~~~~~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~~~~~~~
So it's a linked list instead of an array, so I can't just copy and reverse. 
1. I don't know of a way to reverse a linked list and keep it as a linked list, so I'm gonna take the values to populate new vars to compare.
2. One will just be the values of the list in the order they're already in. So += for that every step.
3. Second one will be reversed. I think doing current element + current value should work. It should add the elements I already have at the
end of it. So like:
    For ABCDE
    var = ''
    Round 1 adds A (Current element) + '' (no current calue of var), so var is now A
    Round 2 adds B (current element) + A (current value of var), so var is now BA
    etc. etc.
4. If that works, I can just return if the forward var is equal to the reversed var

*/

var isPalindrome = function(head) {
    
    let forward = ''
    let reverse = ''

    while (head){
        forward += head.val
        reverse = head.val+reverse
        head = head.next
    }
    return forward === reverse

};