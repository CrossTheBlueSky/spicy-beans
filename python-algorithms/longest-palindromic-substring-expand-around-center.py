# Longest Palindromic Substring
# Given a string s, return the longest palindromic substring in s.

def longestPalindrome(s: str) -> str:
    if not s:
        return ""
    
    start = 0
    max_length = 1
    
    def expand_around_center(left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return right - left - 1
    
    for i in range(len(s)):
        # Odd length palindrome
        len1 = expand_around_center(i, i)
        # Even length palindrome
        len2 = expand_around_center(i, i + 1)
        
        length = max(len1, len2)
        if length > max_length:
            max_length = length
            start = i - (length - 1) // 2
    
    return s[start : start + max_length]

# Test the function
s = "babad"
print(longestPalindrome(s))  # Should print "bab" or "aba"

# Explanation:
# 1. We use the "expand around center" technique.
# 2. For each character, we consider it as the center of a potential palindrome.
# 3. We expand outwards from this center, checking if the characters match.
# 4. We do this for both odd-length palindromes (single character center) and 
#    even-length palindromes (two character center).
# 5. We keep track of the longest palindrome found.

# Time complexity: O(n^2), where n is the length of the string.
# Space complexity: O(1), as we only use a constant amount of extra space.