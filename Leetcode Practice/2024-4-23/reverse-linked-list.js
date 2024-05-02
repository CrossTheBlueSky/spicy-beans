/*~~~~~~~~QUESTION~~~~~~~~~~~

Given the head of a singly linked list, reverse the list, and return the reversed list.

~~~~~~~~~~~~LOGICAL BREAKDOWN~~~~~~~~~

1. It doesn't need to be reversed in place, so I can loop through it and make a new linked list.
    1a. reverse.val = head.val
        reverse.next = null
    1b. head.val = head.val.next
        new.val = head.val
        new.next = reverse
    1c. And when head.next is null we add it and then return the new list

~~~~~~~~~~~BETTER WAY~~~~~~~~~~~~~~~~

I found out there's a standard for reversing a singly linked list. It looks like this:

function reverseList(head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}


*/

var reverseList = function(head) {
    
    let out = null;
    let copy = head

    while(copy !== null){
        let node = new ListNode(copy.val, out)
        out = node
        copy = copy.next
    }
    
    return out 
};