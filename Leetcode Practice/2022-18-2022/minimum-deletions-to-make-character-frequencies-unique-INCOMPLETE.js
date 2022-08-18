/* Related Topics - String, Greedy, Sorting

~~~~~~~~SETUP~~~~~~~~

A string s is called good if there are no two different characters in s that have the same
frequency. 

Given a string "s", return the minimum number of characters you need to delete to make s good.

The frequency of a character in a string is the number of times it appears in a string.

~~~~~~~~LOGIC~~~~~~~~~~~

1. Sort the string.
2. Determine frequency of each character, place them into an array.
3. Loop through the array.
    3a. Check if there's a duplicate frequency.
    3b. If so, reduce value by 1 and increment counter by 1 and check again.
    3c. If not, move to next index.
4. After entire array has been run through, return the counter.

*/

var minDeletions = function(s) {

    frequency = []
    cleanup = []
    deletions = 0

    for(i = 0; i<s.length; i++)
    {
        if(frequency[s[i]] = frequency[s[i]])
        {
            frequency[s[i]] = frequency[s[i]] + 1
        }

        else
        {
            frequency[s[i]] = 1
        }
    }


   
   frequency.sort()
   delete frequency[Object.keys(frequency)[0]]
   cleanup = frequency

    for(i = 0; i < frequency.length; i++)
    {
   

       while(frequency.includes(cleanup[i]) == true && cleanup[i] > 0)
              {
               cleanup[i] = cleanup[i]- 1
               deletions = deletions + 1

              }
    }

    return deletions
}