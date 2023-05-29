/* ~~~~~~~~~~~~~~~~Problem Summary~~~~~~~~~~~~~~~~~~~~~~~~~
Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

~~~~~~~~~~~~~~~Logical Deconstruction~~~~~~~~~~~~~~~~

1. Define a variable that will hold the final amount
2. Define a variable that will determine if we're in a deprecated phase (that is to say, did we just hit an I before a V or X, or a similar point)
3. Split and Map the string so that it's an array of integers
4. Run a loop with the following logic
    4a. If we're in a deprecating phase, add [i]-[i-1] to the result and set deprecating to false
    4b. If we're not deprecating, check to see if [i] < [i+1]. If so, set deprecating to true
    4c. Otherwise, add [i] to results.

*/

function romanToInt(s){


    
    rom = s.split("")
    nums = rom.map((e)=>{
        switch(e){

            case "I" : return 1
            case "V" : return 5
            case "X" : return 10
            case "L" : return 50
            case "C" : return 100
            case "D" : return 500
            case "M" : return 1000
            default: return "err"

        }
    })

    let result = 0
    let deprecating = false;

    for(i = 0; i < nums.length; i++){
        if(deprecating){
            result += (nums[i] - nums[i-1])
            deprecating = false
        }
        else if(nums[i] < nums[i+1]){
            deprecating = true
        }
        else{
            result += nums[i]

        }

    }

    return result

}