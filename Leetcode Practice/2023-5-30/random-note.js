/*~~~~~Question Summary~~~~~~~~~~

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

~~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~~~~~

1. First check if the magazine string is shorter than the ransomNote, because if it is, it returns false immediately
2. Following that, sort both arrays.
3. Then do a loop with a conditional in it.
    3a. If the mag contains the note[i], remove it from mag and continue looping
    3b. If mag doesn't contain note[i], return false
4. If the loop completes, return true

~~~~~~~~~~~~~EXTRA NOTE~~~~~~~~~~~~~~~~~~~~~~
I didn't know about For...Of before this exercise. At the bottom of this file is a better solution from 
another student using that statement

*/

var canConstruct = function(ransomNote, magazine) {
  

    if(ransomNote.length > magazine.length){
        return false
    }

    let note = ransomNote.split("")
    let mag = magazine.split("").filter(e => note.includes(e))
    note.sort()
    mag.sort()

    for(let i = 0; i < note.length ; i++){
        if(mag.contains(note[i])){
            mag.splice(mag.indexOf(note[i]), 1)
        } else{
            return false
        }
    }

    return true

};

/*Better solution using For...Of

var canConstruct = function (ransomNote, magazine) {
  for (const char of magazine) {
    ransomNote = ransomNote.replace(char, "");
  }
  
  if (!ransomNote) return true;
  else return false;
};

*/
