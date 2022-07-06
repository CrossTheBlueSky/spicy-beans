/* Related Topics - Array, Sorting

~~~~Setup~~~~~

You are given an array of unique integers "salary" where salary[i] is the salary of the ith employee.

~~~~Goal~~~~~~
Return the average salary of employees excluding the minimum and maximum salary
Answers within 10^-5 of the actual answer will be accepted

~~~~Logic~~~~~~~

1. Sort the array in ascending order (descending would also be fine I guess)
2. Shift and Pop the array to get rid of the highest and lowest values
3. Find the average of the values left.

~~~~~~~~~~~~~~~
*/

var average = function(salary) {
    
    
    salary.sort((a,b) => a-b)

    let averageSalary = 0;

salary.pop()
salary.shift()

for (i = 0 ; i < salary.length ; i++)
{
    averageSalary += salary[i]
}

averageSalary = averageSalary/salary.length

return averageSalary

    
};