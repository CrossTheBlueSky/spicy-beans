/* ~~~~~~~~~~~~~~Question Overview~~~~~~~~~~~~~~
Given an array of integers, return the integer that does not repeat.

~~~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~~~~~~
1. Hashmaps. It's always hashmaps. Make a new map variable
2. Populate the map, where each key is an integer from the input array and each value is how many times it appears
	2a. So an if check to see if it's there. If so, increment the value by 1
	2b. And then an else check so if it's not there, add it to the map and set its value to 1
3. Iterate over the map to find which key has a value of one, then return that key.

*/

function uniqueIntFinder(arr){

let map = new Map();
for(let i = 0; i < arr.length; i++){
if (map.has(arr[i])){
	map.set(arr[i], map[arr[i]]++)
	} else{
	map.put(arr[i], 1)
	}
}
for(const [key, value] of map){
if (map[key] === 1) {
return key
}
}

}

const test = [1, 2, 3, 4, 3, 2, 1]
uniqueIntFinder(test)