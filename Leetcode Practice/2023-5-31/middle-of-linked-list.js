/* ~~~~~~~~~~~~~Question~~~~~~~~~~~~~
 Given the head of a singly linked list, return the middle node of the linked list.

 If there are two middle nodes, return the second middle node.

 ~~~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~~~~~~
    1. So first I need to know how many elements are in the list, so I'll iterate over it with a while loop
        1a. while current != null, update current to the next node in the list and increment a counter var
    2. Find the median of whatever the count currently is, and if it's not a whole number, round up
    3. Traverse the linked list to the node at that position and return its value

~~~~~~~~~~~~~~~Extra Thoughts~~~~~~~~~~~~~~~~~~~~
1. Maybe during the while loop I can populate an array with the values from the linked list.

That way when I find the length of the list I can return the middle value from the new array instead of 
traversing the list again, which would get really freaking slow if the input got big.

THAT DIDN'T WORK THEY WANT ME TO RETURN THE NODE NOT THE VALUE AHHHHHHHHHHHHH

 */

var middleNode = function(head) {
    

    let current = head
    let count = 0

    while(current){
        current =  current.next  
        count++

    }

    current = head

    if(count % 2 === 1){
    count = Math.ceil(count/2)
    } else{
        count = (count/2 + 1)
    }

    for( let i = 1; i <= count; i++){
        if(i === count){
            return current
        } else {
            current = current.next

        }
}

    
};