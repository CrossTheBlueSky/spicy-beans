/*~~~~~~~~~~~~QUESTION~~~~~~~~~~~~~~~~
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

~~~~~~~~LOGICAL BREAKDOWN~~~~~~~~~~~~~~~~

1. Declare an output variable, set it equal to the head of whichever list has the lower starting value
2. Whichever list got copied gets updated to its .next value
3. Declare a curr value set to out
4. Loop
    4a. Set curr.next to whichever list has a lower val
    4b. Increment that list
    4c. curr = curr.next

*/

var mergeTwoLists = function(list1, list2) {
    
    if(!list1 && !list2){
        return null
    }
    if(!list1){
        return list2
    }
    if(!list2){
        return list1
    }
  
    let out = list1.val >= list2.val ? list2 : list1
    out === list1 ? list1 = list1.next : list2 = list2.next
    let curr = out
    while(list1 && list2){
        curr.next = list1.val >= list2.val ? list2 : list1
        curr.next === list1 ? list1 = list1.next : list2 = list2.next
        curr = curr.next
    } 
    
    curr.next = list1 || list2

    return out

};