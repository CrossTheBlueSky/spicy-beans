# Given a string s and an integer k, return the length of the longest substring that contains at most k distinct characters.
# Example: 
#   Input: s = "eceba", k = 2
#   Output: 3

from collections import defaultdict

def lengthOfLongestSubstringKDistinct(s: str, k: int) -> int:
    # Edge case: if k is 0, no substring is possible
    if k == 0:
        return 0

    # Dictionary to store character frequencies
    char_frequency = defaultdict(int)
    
    # Variables to keep track of the window and result
    left = 0  # Left pointer of the window
    max_length = 0  # Length of the longest valid substring found
    distinct_count = 0  # Number of distinct characters in the current window

    # Iterate through the string with the right pointer
    for right in range(len(s)):
        # Add the current character to our frequency dictionary
        if char_frequency[s[right]] == 0:
            distinct_count += 1
        char_frequency[s[right]] += 1

        # Shrink the window if we have more than k distinct characters
        while distinct_count > k:
            char_frequency[s[left]] -= 1
            if char_frequency[s[left]] == 0:
                distinct_count -= 1
            left += 1

        # Update the max_length if the current window is longer
        max_length = max(max_length, right - left + 1)

    return max_length