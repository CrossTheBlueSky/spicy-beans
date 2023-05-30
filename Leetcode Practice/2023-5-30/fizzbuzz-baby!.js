/*~~~~~~~~~~~Question Summary
It's fizzbuzz lol, but I'll copy it for ccompletness sake:

Given an integer n, return a string array answer (1-indexed) where:

    answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
    answer[i] == "Fizz" if i is divisible by 3.
    answer[i] == "Buzz" if i is divisible by 5.
    answer[i] == i (as a string) if none of the above conditions are true.

~~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~~~~~~

1. Declare an output var and set it to an empty string
2. Do a series of if checks for Fizz and Buzz
    2a. Use modulo to determine if a Fizz or a Buzz is appropriate
3. At the end of each if check, += a Fizz/Buzz to the output var as needed.
4. At the final if check see if the output is still empty. If so, return the input number
5. And that's fizzbuzz baby, and scalable for however many weirds bazz/bizz things you wanna add.
*/

var fizzBuzz = function(n) {
    
    let result = []
    let output = ""

    for(i = 1; i <= n; i++){

    if(i % 3 === 0){
        output += "Fizz"
    }
    if(i % 5 === 0){
        output += "Buzz"
    }
    if(!output){
        output = i.toString();
    }
    
    result.push(output)
    output = ""

    }

    return result
};