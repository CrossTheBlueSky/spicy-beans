#Question:
#   Implement a last in first out stack using only two queues
#   Stack should support all the functions of a normal stack (push, pop, top, empty).

from collections import deque

class MyStack:
    def __init__(self):
        # Initialize two queues
        self.queue1 = deque()
        self.queue2 = deque()
    
    def push(self, x: int) -> None:
        # Always push to queue1
        self.queue1.append(x)
    
    def pop(self) -> int:
        if self.empty():
            return None
        
        # Move all elements except the last one from queue1 to queue2
        while len(self.queue1) > 1:
            self.queue2.append(self.queue1.popleft())
        
        # The last element in queue1 is the one we want to pop
        popped = self.queue1.popleft()
        
        # Swap queue1 and queue2
        self.queue1, self.queue2 = self.queue2, self.queue1
        
        return popped
    
    def top(self) -> int:
        if self.empty():
            return None
        
        # Similar to pop, but we put the last element back
        while len(self.queue1) > 1:
            self.queue2.append(self.queue1.popleft())
        
        top_element = self.queue1[0]
        
        # Put the last element into queue2 and swap
        self.queue2.append(self.queue1.popleft())
        self.queue1, self.queue2 = self.queue2, self.queue1
        
        return top_element
    
    def empty(self) -> bool:
        # The stack is empty if queue1 is empty
        return len(self.queue1) == 0