# Rotting Oranges
# You are given an m x n grid where each cell can have one of three values:
# 0 representing an empty cell,
# 1 representing a fresh orange, or
# 2 representing a rotten orange.
# Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
# Return the minimum number of minutes that must elapse until no cell has a fresh orange. 
# If this is impossible, return -1.

from collections import deque

def orangesRotting(grid):
    rows, cols = len(grid), len(grid[0])
    queue = deque()
    fresh_oranges = 0
    
    # Count fresh oranges and add rotten oranges to the queue
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == 1:
                fresh_oranges += 1
            elif grid[r][c] == 2:
                queue.append((r, c, 0))  # (row, col, time)
    
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]  # up, down, left, right
    max_time = 0
    
    while queue and fresh_oranges > 0:
        row, col, time = queue.popleft()
        max_time = max(max_time, time)
        
        for dr, dc in directions:
            new_row, new_col = row + dr, col + dc
            if 0 <= new_row < rows and 0 <= new_col < cols and grid[new_row][new_col] == 1:
                grid[new_row][new_col] = 2
                fresh_oranges -= 1
                queue.append((new_row, new_col, time + 1))
    
    return max_time if fresh_oranges == 0 else -1

# Test the function
grid = [
    [2,1,1],
    [1,1,0],
    [0,1,1]
]
print(orangesRotting(grid))  # Should print 4

# Explanation:
# 1. We use a breadth-first search (BFS) approach with a queue.
# 2. First, we count the fresh oranges and add all rotten oranges to the queue.
# 3. We process the rotten oranges in the queue, spreading the rot to adjacent fresh oranges.
# 4. We keep track of the time it takes for each orange to rot.
# 5. If all fresh oranges rot, we return the maximum time. Otherwise, we return -1.

# Time complexity: O(rows * cols), as we potentially visit each cell once.
# Space complexity: O(rows * cols) in the worst case, when all oranges are rotten initially.