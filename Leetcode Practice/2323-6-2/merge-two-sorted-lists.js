/*~~~~~~~~~~~~~~~~~~~~~Question~~~~~~~~~~~~~~~~~~~~~~~
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

~~~~~~~~~~~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~~~~~~~~~

I'll work with the obvious method for now, since I don't know any weird black magic for linked lists (yet?)

1. Make a new empty list to hold the output
2. Make a while loop 
    2a. Conditional is while list1.head || list2.head. So it will keep running until both lists are run through
    2b. Start with an if check to see if either of them are null, if not...
    2c. Compare current1.head and current2.head. Whichever is smaller gets added to the new list, and their current gets updated to
    next node of their list.
    2d. If one of them comes out null, then add the non-null node to the list, and keep doing so until it's completely iterated through.
3. Return output 

*/

var mergeTwoLists = function(list1, list2) {

    output = ()=>{return list1.val < list2.val ? list1 : list2}
    curout = output

    while(list1 && list2){
        if(list1.val < list2.val){
            curout.next = list1
            list1 = list1.next
        } else {
            curout.next = list2
            list2 = list2.next
        }
        curout=curout.next
    }
    curout.next = list1 || list2

   return output.next
};