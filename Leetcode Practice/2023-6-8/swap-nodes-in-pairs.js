/*~~~~~~~~~~~~~~Question~~~~~~~~~~~~~~~~~~~~~
Given a linked list, swap every two adjacent nodes and return its head. 
You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

    ex. 1 -> 2 -> 3-> 4
    becomes
        2-> 1-> 4-> 3->

~~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~~~~~~~~~~~~~~
    1. First do basic boundary condition checks
        1a. If list is null, return null (empty list)
        1b. If list.next is null, return list (single element list)
    2. This seems like a 2 pointer problem. Originally I was thinking fast and slow but it's got more of a zipper-ish logical flow
        2a. helter = head(1->2->3->4), skelter = head (1->2->3->4)
    3. Set an output variable, in this case it will be equal to skelter so it uses the updated references
    4. And I traverse the list by doing the following
        skelter= helter.next (skelter then equals 2->3->4)
        skelter.next = helter (skelter now equals 2->1->2->3->4)
        helter = helter.next.next (helter now equals 3->4)
        skelter = skelter.next (1->2->3->4)


~~~~~~~~~~~~~~~~Thoughts~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Again, I'm struggling to do anything strange with a linked list. This one uses so many extra pointers that I genuinely don't understand
how there's not an accidental cycle happening somewhere (since it kept happening with my original implementation)
        
*/

var swapPairs = function(head) {

    if (head == null || head.next == null) {
        return head;
    }
    let ans = new ListNode(0);
    ans.next = head; // 1, 2, 3, 4
    let curr = ans; // 0, 1, 2, 3, 4
    while (curr.next != null && curr.next.next != null) //Loop only runs while there are at least 2 nodes to swap
     {
        //The following two lines are meant to hold the values in memory so they don't get garbage collected
        let t1 = curr.next; //1, 2, 3, 4 
        let t2 = curr.next.next; // 2, 3, 4

        //Current points to answer, so every time we update a part of current, we are setting our answer
        //t1 is the "temp storage". It make sure things don't get garbage collected
        //t2 is the "handler". It lets its values be updated every loop so that current can copy its homework

        //  This sets the first "real" value of current to the second element of the list
        curr.next = t2; 
        //curr = 0, 2, 3, 4
        //t1 = 1,2,3,4
        //t2 = 2, 3, 4

        //2 has been handled, so it can be safely removed from the "temp storage"
        t1.next = t2.next;
        //curr = 0,2,3,4
        //t1 = 1,3,4
        //t2 = 2,3,4

        //1 is now put in its proper place inside of the "handler", letting current copy it
        t2.next = t1;
        //curr = 0,2,1,3,4
        //t1 = 1,3,4
        //t2 = 2,1,3,4


        curr = curr.next.next; // curr = 1, 3, 4
        //The reason that
    }
    return ans.next;

};