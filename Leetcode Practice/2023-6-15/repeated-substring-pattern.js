/*~~~~~~~~~~~~~~~~~Question~~~~~~~~~~~~~~~~~~~~~
Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

~~~~~~~~~~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~~~

1. Could try a loop that expands a temporary variable by the next character on every loop
2. Then do something weird where I slice the input to remove temp.length from the front.
3. And then check for a .includes
4. Better idea, use an endsWith()

~~~~~~~~~~~~~~Second attempt~~~~~~~~~~~~~~~~~

1. The really short inputs are what hecked me the first time round, 
    so I'll start by just repeating them once so that I don't hit those edge cases at all.
    The idea is that if it's a repeating pattern, it doesn't matter how many times it repeats, I should still be able to check against it.
2. From there, if I remove the first and last characters from the string, I can remove the issue where I would pass the check
    just from my variable being equal to itself
3. So if I check the original input against the sliced string, the original string should only appear in the very center of the modified version, and
    only if there's a repeatable pattern 

further explanation:

s = abcab
s.repeat(2) = abcababcab
s.repeat(2).slice(1, -1) = bcababca
bcababca doesn't include abcab

s = abcabc
s.repeat(2) = abcabcabcabc
s.repeat(2).slice(1, -1) = bcabcabcab
bcabcabcab does include abcabd in the center

*/

var repeatedSubstringPattern = function(s) {

    return s.repeat(2).slice(1, -1).includes(s);
    

};