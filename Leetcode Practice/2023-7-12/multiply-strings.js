/*~~~~~~~~~~~~~~~~~~Question~~~~~~~~~~~~~~~~~
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

 ~~~~~~~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~~~~~~~

    1. Is this one of those things were js is uniquely advantageous because of type coercion? I should be able to just multiply them straight up.
    2. I think I have to convert it to a string afterwards still, which is still allowed as far as I can tell
    3. Turns out they intentionally push into BigInt territory to make you do this in a dumb way.
    4. Have to treat it like I'm hand-solving it and multiply each digit from right to left.

 */

    var multiply = function(num1, num2) {
        if (num1 === '0' || num2 === '0') return '0'
        
        const m = num1.length, n = num2.length, res = new Array(m+n).fill(0)
        
        for (let i=m-1; i>=0; i--) {
            for (let j=n-1; j>=0; j--) {
                const p1=i+j, p2=i+j+1
                let sum = res[p2] + Number(num1[i]) * Number(num2[j])
                res[p2] = sum%10
                res[p1] += Math.floor(sum/10)
            }
        }
        if (res[0] === 0) res.shift()
        return res.join('')
        
    }