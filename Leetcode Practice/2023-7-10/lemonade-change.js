/*~~~~~~~~~Question~~~~~~~~~~
At a lemonade stand, each lemonade costs $5. 
Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills). 
Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. 
You must provide the correct change to each customer so that the net transaction is that the customer pays $5.

Note that you do not have any change in hand at first.

Given an integer array bills where bills[i] is the bill the ith customer pays, 
return true if you can provide every customer with the correct change, or false otherwise.

~~~~~~~~~~~~Logical Breakdown~~~~~~~~~

1. So the change needed for any of these inputs is
    1a. 0 for 5
    1b. 5 for 10
    1c. 15 for 20
2. I'll declare 2 vars to represent my 5's and 10s. Then make a loop that goes through the array and checks if I have change on every loop.
3. And I'll boundary it by saying that if my first transaction isn't a 5 it immediately returns false.


*/

var lemonadeChange = function(bills) {

    if(bills[0] !== 5){
        return false
    }

    let abe = 1;
    let ham = 0;

    for(i = 1; i < bills.length; i++){
        if(bills[i] === 5){
            abe++
        }else if(bills[i] === 10 && abe > 0){
            abe--
            ham++
        }else if(bills[i] === 20 && (abe > 0 && ham > 0)){
            abe--
            ham--
        }else if(bills[i] === 20 && abe >= 3){
            abe = abe - 3;
        }else{
            return false
        }
    }
    
    return true
};