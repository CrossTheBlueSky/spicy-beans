/*~~~~~~~~~~Question~~~~~~~~~~

You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.

~~~~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~~

1. I've done this or similar things before. It seems super simple, but maybe I'm being tricked in a way I've been tricked before
2. Anyway, sort it, shift and pop, then reduce and average

*/

var average = function(sal) {
    
    sal.sort((a, b) => {return a-b})
    sal.shift()
    sal.pop()
    const len = sal.length
    return (sal.reduce((acc, curr)=>acc + curr))/len

};