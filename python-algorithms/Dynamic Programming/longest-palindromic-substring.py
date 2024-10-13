def longest_palindromic_substring(s: str) -> str:

    #edge handling for empty s
    if not s:
        return ""

    n = len(s)
    # dp[i][j] will be 'true' if the string from index i to j is a palindrome
    dp = [[False] * n for _ in range(n)]
    
    # edge handling for len of 1
    for i in range(n):
        dp[i][i] = True
    
    start = 0
    max_length = 1
    
    # edge handling for len of 2
    for i in range(n - 1):
        if s[i] == s[i + 1]:
            dp[i][i + 1] = True
            start = i
            max_length = 2
    
    # k is length of substring
    for k in range(3, n + 1):
        # Fix the starting index
        for i in range(n - k + 1):
            # Get the ending index of substring from 
            # starting index i and length k
            j = i + k - 1
            
            # checking for sub-string from ith index to 
            # jth index if s[i+1] to s[j-1] is a palindrome
            if dp[i + 1][j - 1] and s[i] == s[j]:
                dp[i][j] = True
                if k > max_length:
                    start = i
                    max_length = k
    
    return s[start:start + max_length]

print(longest_palindromic_substring("thefastestracecareyou'veeverseeninyourentirelife"))