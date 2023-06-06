/*~~~~~~~~~~~~~~~~~~~Question~~~~~~~~~~~~~~~~~~~~~~
Given the head of a singly linked list, reverse the list, and return the reversed list.

~~~~~~~~~~~~~~~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~~~~~~

1. This one is simple. make a variable to hold the reversed list and make it equal to null
2. Make the temp var to move through the forward list.
3. while(head)
    3a. set forward equal to head first
    3b. set head to head.next
    set forward.next equal to reverse
4. After the loop runs I should be able to return reverse

*/


var reverseList = function(head) {

    let forward = head
    let reverse = null
    while(head){
        forward = head
        head = head.next
        forward.next = reverse
        reverse = forward
    }
return reverse
    

};