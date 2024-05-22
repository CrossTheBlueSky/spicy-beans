/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

Example: Input: ["eat","tea","tan","ate","nat","bat"], 
        Output: [["eat","tea","ate"],["tan","nat"],["bat"]]


~~~~~~~~~~~LOGICAL BREAKDOWN~~~~~~~~~~~~

1. My intuition is to do nested loops (bad), but have each run of the inner loop
    reduce the size of the dataset(good).
2. So the outer loop is just to make sure multiple sets of anagrams can be handled. It should only run
    as many times as there are anagram sets
3. The logic is thus:
    3a. Copy the first element and sort it
    3b. Declare an array that is a filtered version of the input
    (parameters being copied0Index.sort() === e.sort())
    3c. Somewhere (potentially in the filter itself), remove everything from the new array from the original
    3d. Push the filtered array to the output array and continue.

~~~~~~~~THINGS TO NOTE~~~~~~~~~~~~~~

1. This isn't leetcode and I don't need to be greedy with memory. I can make a copy of the original array
    to mutate if the problem doesn't specifically say I can't (and I can tidy up later if I want to)
2. The repeated filters and sorting is pretty inefficient. The better way is to use a hash map, as
    demonstrated below:

                    function groupAnagrams(strs) {
                        const map = new Map();

                        for (let str of strs) {
                            const sorted = str.split('').sort().join('');
                            if (map.has(sorted)) {
                            map.get(sorted).push(str);
                            } else {
                            map.set(sorted, [str]);
                            }
                        }

                        return Array.from(map.values());
                    }
    
    The logic here is to:
                    1. Sort each string once
                    2. Check if the sorted version exists as a tag in the map already
                    3. If it does, push the unsorted version into the array associated to that tag
                    4. If it doesn't, create a new tag with the sorted version and add the unsorted
                        version to that tag's array
                    5. After every string is handled this way, return an array populated from the values
                        of the map.


*/

function groupAnagrams(strs){

    let out = []
    let remaining = [...strs]

    while(remaining.length > 0){
        const base = remaining[0].toLowerCase().split('').sort().join('')
        const anagrams = remaining.filter((e)=>{
            return base === e.toLowerCase().split('').sort().join('')
              
        })

        out.push(anagrams)
        remaining = remaining.filter(e=> !anagrams.includes(e))

    }
    return out

}


module.exports = groupAnagrams
