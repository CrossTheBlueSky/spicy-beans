/* Related Topics - Array, Sorting

~~~~~~~~~~SETUP~~~~~~~~~~~~

Given an array of "intervals," where intervals[i] = [start^i, end^i], merge all overlapping, 
and return an array of the non-overlapping intervals that cover all the intervals in the input.

IMPORTANT NOTE: Overlapping in this case means that a value from one pair fits within the 
values of another pair. So for [1,3] and [2,6], 2 and 3 are both contained within 1 and 6,
so they get merged into [1,6].

~~~~~~~~~~LOGIC~~~~~~~~~~~~~

1. Sort the array in ascending order of [i][0] with a second sorting conditional of [i][1]
2. Can I put all of the overlap logic into a reduce method?
3. Overlapping logic
    3a. Check if [i+1][0] or [i+1][1] are > [i][0] and < [i][1]. This is to check for overlaps
    3b. If there are no overlaps, leave [[i][0], [i][1]] in the array and increment i
    3c. If there is an overlap, determine the highest and lowest of the 4 values.
        Use Math.min and Math.max to determine the high and low of the overlaps. Add the 
        two resultant values to the array as one new element, then delete the two elements that
        were used to merge. Then increment i.

*/

var merge = function(intervals) {

        if (intervals.length < 2) 
        return intervals
        
        
        intervals.sort((a, b) => a[0] - b[0])
        
        result = [intervals[0]]
    
        for (let i = 1; i < intervals.length; i++) 
        {
            if (intervals[i][0] <= result[result.length - 1][1]) 
            {
                result[result.length - 1][1] = Math.max(intervals[i][1], result[result.length - 1][1])
            } 
            
            else 
            
            {
                result.push(intervals[i])
            }
        }
        return result

    }