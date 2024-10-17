#Implement LRU Cache
# Design and implement a data structure for Least Recently Used (LRU) cache.
# It should support the following operations: get and put.

# get(key) - Get the value (will always be positive) of the key if the key exists 
# in the cache, otherwise return -1.
# put(key, value) - Set or insert the value if the key is not already present. 
# When the cache reached its capacity, it should invalidate the least recently 
# used item before inserting a new item.

from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = OrderedDict()

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        
        # Move the accessed item to the end (most recently used)
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            # If key exists, update its value and move it to the end
            self.cache[key] = value
            self.cache.move_to_end(key)
        else:
            # If cache is at capacity, remove the least recently used item
            if len(self.cache) >= self.capacity:
                self.cache.popitem(last=False)
            
            # Add the new item
            self.cache[key] = value

# Explanation:
# 1. We use OrderedDict to maintain the order of items based on their usage.
# 2. In get(), we move the accessed item to the end of the OrderedDict.
# 3. In put(), we add new items to the end, and if at capacity, remove from the front.
# 4. This ensures that the least recently used item is always at the front.

# Time complexity: O(1) for both get and put operations.
# Space complexity: O(capacity) to store at most 'capacity' number of items.

