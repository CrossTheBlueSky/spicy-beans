/*~~~~~~~~~~~~QUESTION~~~~~~~~~~~~~~`

Given a string s, find the first non-repeating character in it and return its index. 
If it does not exist, return -1

~~~~~~~~~~~~~~~~~~~~LOGICAL BREAKDOWN~~~~~~~~~~~~~~~~~~~~~

1. Loop
    1a. check a slice of the array that's [i+1] to the end of the array if it includes [i]
    1b. Also copy [i] to a second array and check that to make sure dupes don't return 



~~~~~~~~~~BETTER ANSWER~~~~~~~~~~~~~~~~~~

1. Use a map and count occurence instead of blocking dupes
2. This will give the frequency of every value in the array, and do it while maintaining the order that they're in
3. Then you just iterate through the map for the first object that occurs once
*/


var firstUniqChar = function(s) {

    const counter = {}

    s.forEach(e=>{
        counter[e] = (counter[e] || 0) + 1
    })

    for(let i = 0; i < s.length; i++){
        if(counter[s[i]] ===1){
            return i
        }
    }

    return -1
    
};
    