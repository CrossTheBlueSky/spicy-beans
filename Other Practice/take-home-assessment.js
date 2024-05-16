/*
~~~~~~~ASSESSMENT REVISIT~~~~~~~~~~
I haven't gotten back my original code, so I'll just write up another 
algorithm and some test cases and see if it works this time, which would
most likely mean I missed something small (probably because of nerves),
or it doesn't work, which means that I had a fundamental misstep in my logic


~~~~~~~QUESTION~~~~~~~~~~~
I don't actually have the question, but I can explain the basic problem 
enough to write my algo and look back on it later without being confused

A company runs multiple discounts. These discounts are stored as such

discounts = [["sale1", "1", "5"], ["sale2", "2", ".25"], ["sale3", "3", "7"]]

every array stored in discounts represents the following:

[0] - the "tag", which is just whatever the promotion is named
[1] - the "type", which marks that sale as being of a certain type
    Type 1: Fixed price
    Type 2: Percentage reduction in price
    Type 3: Fixed amount removed from base price
[2] - the value to be used in calculations regarding the discount type

the input will represent items a customer intends to purchase. 
it is defined as such:

products = [["<base price>", "<tag>", "<tag>", "<tag>"], ...<more products>]

A product may have "EMPTY" in one or more of the <tag> elements.

The output should be an integer that represents the total cost of the cart,
applying the most significant discount available to each item

~~~~~~~~Logical Breakdown~~~~~~~~~

1. The immediate assumption is that the discounts should be stored in
    a hash map. The structure should be:

    discountMap = [<tag>, [<type>, <variable>], ...more discounts]

2. In order to store the discounts, we'll need to loop through the discount
    array. And within that loop, loop again to populate each element of the
    map. Nested loops aren't great, but since there's only 3 kinds of 
    discounts, it's only O(n*3) instead of O(n^2).

    Additionally, since the inputs are all stored as strings, they'll
    need to be converted to integers so actually be used in calculations

3. Once the map is populated, the next step is to actually figure out the 
    price of the cart. Start this by declaring an output variable and
    setting it to 0.

4. Next, we'll need to loop through the products array and do a few things
    for each one. Each step of the loop won't run if the tag is empty:
    
    1. Hold the base price
    2. Have a var for current best discount (start it at baseprice)
    3. Check for discounts
    4. Compare discount price to best discount
    5. If it's lower, update best discount
    6. At the end of each loop, add best price to total price

5. Some considerations before attempting:
    1. The final result needs to be in the form of an integer
    2. I should probably account for an empty products array (return 0?)
    3. I should also probably account for an empty discounts array
    
6. Issues I probably had the first time:
    1. I probably did for...in instead of for...of (since I made that
        mistake here as well). If I did, the entire function breaks
        immediately.
    2. The linter caught it here, but it's possible I messed up
        the variabilization in the get() by not putting type and amount
        in []
    3. Honestly just writing the math wrong might have been a thing
    4. parseInt on type was a mistake, because 0 as an int is a lot more
        finicky than '0' the string
    5. And I forgot to parseInt when I'm setting the basePrice variable.
        This broke some tests because it was returning a concatenated string.

*/

function discountedCart(products, discounts){

    //mapping the discounts
    if(products.length === 0){
        return 0
    }

    const discountMap = new Map()

    for(const discount of discounts){
            const tag = discount[0]
            const type = discount[1]
            const amount = discount[2]
            discountMap.set(tag, [type, parseInt(amount)])
    }
    

    //will be mutated to determine total cost of cart
    let cartTotal = 0

    //loop through products
    for(let i = 0; i< products.length; i++){

        //variabilize the product for readability
        let currentProduct = products[i]

        //the default price of the product and a placeholder for
        //the lowest possible price
        let basePrice = parseInt(currentProduct[0])
        let discountedPrice = basePrice

        //loop through each element in the product array
        //j starts at 1 since we only need tags here
        for(let j = 1; j < currentProduct.length; j++){

            //variabilize the discount for readability
            const currentDiscount = currentProduct[j]

            //don't hecc with all the tag logic if it's empty
            if(currentDiscount !== "EMPTY"){
                //get the type and amount of the discount
                //from the hash map
                const [type, amount] = discountMap.get(currentDiscount)
                
                //determine which discount logic to use

                //fixed price
                if(type === '0'){
                    discountedPrice = amount
                }
                //percentage off
                else if(type === '1'){
                discountedPrice = Math.min(discountedPrice, basePrice*(1-amount/100))

                }
                // fixed amount off
                else if(type === '2'){
                    discountedPrice = Math.min(discountedPrice, basePrice-amount)
                }

            }
    

        }
        //add the discountedPrice to the cart total at the end of each loop
        cartTotal = cartTotal+discountedPrice
    }

    return Math.round(cartTotal)
}

module.exports = discountedCart
