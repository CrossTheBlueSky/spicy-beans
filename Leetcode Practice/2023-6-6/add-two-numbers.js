/*~~~~~~~~~~~~~~~~~Question~~~~~~~~~~~~~~~~~~~~~~~
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

~~~~~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~~~~~~~~~~~~~~~
1. The wording is weird, but essentially
    [3, 7, 9]
    [5, 2, 1]
    as the inputs translates to 973 + 521. It's dumb, but that's the question.
2. Since I need to output it as another reversed array, I think I can just do the math at every step of the traversal.
3. So set two temp vars for traversal.
Make an output var and set it equal to one of the temp vars
4. Have a var to "carry the one" in instances where the values break 10
5. While (temp1 || temp2)
    5a. if((temp1.val + temp2.val + carry) < 10)
        {temp1.val += (temp2.val-10 + carry)
         carry = 1}
         else{temp.val += temp2.val
            carry = 0}
    5b. temp = temp.next
    5c. temp2 = temp2.next


~~~~~~~~~~~~~~~~~~~~~~Thoughts~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
My solution is incredibly slow. Bottom 5%. This seems to be a recurring thing with me and linked lists. I'm gonna look at other algorithms
and try to get a better understanding. I'll leave mine commented in the bottom

*/

var addTwoNumbers = function(l1, l2) {
    var List = new ListNode(0); //This is starting the list at {val:0, next:null} based on the ListNode definition the problem gives
    var head = List; //This is the temp variable to let you add to the list by reference
    var sum = 0; 
    var carry = 0;

    while(l1!==null||l2!==null||sum>0){ //This checks to make sure l1 or l2 are truthy before it even starts. I did this but with temp vars

    //The first two if checks work like my fizzbuzz implementation. They ping individually based on which values aren't null. Good idea
        if(l1!==null){
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if(l2!==null){
            sum = sum + l2.val;
            l2 = l2.next;
        }
    //This is where you determine if a carry happens and only adjust the sum if it does happen
        if(sum>=10){
            carry = 1;
            sum = sum - 10;
        }

    //This is just the normal method for adding to the end of a list. Again, they use the preestablished definition (which I should do in the future)
        head.next = new ListNode(sum);
        head = head.next;

        //They set the value of sum to the carry if there is one, so that it gets added in to the next set of additions
        //Immediately after they reset carry to 0
        sum = carry;
        carry = 0;

    }
    //since they initialized list with a starting node of {val:0, next:null}, they have to return list.next as their answer, since that's where
    //the answer actually starts. It seems like initializing the list as null causes problems, cause I've seen this method already once before.
    return List.next;
};




//~~~~~~~~~~~~~~~~~~~~~~My Attempt~~~~~~~~~~~~~~~~~~~~~~ 

//var addTwoNumbers = function(l1, l2) {

//     let tmp1 = l1
//     let tmp2 = l2
//     let out = {val: null, next:null}
//     let outcur = out
//     let carry = 0
    

//     while(tmp1 || tmp2){
//         let val1
//         let val2
//         let sumNode = {val: null, next: null
//         }
//         tmp1 ? val1 = tmp1.val + carry : val1 = carry
//         tmp2 ? val2 = tmp2.val : val2=0

//         if(val1 + val2 >= 10){
//             carry = 1
//             sumNode.val = val1+val2-10

//         }else{
//             carry = 0
//             sumNode.val = val1+val2
//         }

//         if(out.val === null){
//             out.val = sumNode.val
//             out.next=sumNode.next
//         }else{
//             outcur.next = sumNode
//             outcur = outcur.next
//         }
//         console.log(sumNode)


//         if(tmp1){tmp1 = tmp1.next}
//        if(tmp2){tmp2 = tmp2.next}
//     }

//     if(carry){
//      let   sumNode= {val:1, next:null}
//         outcur.next = sumNode
//     }

//     return out

// }