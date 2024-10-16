# Given the root of a binary tree, determine if it is a valid binary search tree (BST).

# A valid BST is defined as follows:
# - The left subtree of a node contains only nodes with keys less than the node's key.
# - The right subtree of a node contains only nodes with keys greater than the node's key.
# - Both the left and right subtrees must also be binary search trees.

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def isValidBST(root: TreeNode) -> bool:
    def validate(node, low=float('-inf'), high=float('inf')):
        # An empty tree is valid BST
        if not node:
            return True
        
        # The current node's value must be between low and high
        if node.val <= low or node.val >= high:
            return False
        
        # The left child's value must be less than node's value
        # The right child's value must be greater than node's value
        return (validate(node.right, node.val, high) and
                validate(node.left, low, node.val))
    
    return validate(root)

# Test the function
root = TreeNode(5)
root.left = TreeNode(1)
root.right = TreeNode(4)
root.right.left = TreeNode(3)
root.right.right = TreeNode(6)

print(isValidBST(root))  # Should print False

# Explanation of the solution:
# 1. We use a recursive helper function 'validate' that takes three parameters:
#    - node: the current node being examined
#    - low: the smallest value the current node can take
#    - high: the largest value the current node can take
# 2. We start with the root node, which can have any value, so we initialize low
#    to negative infinity and high to positive infinity.
# 3. For each node, we check if its value is within the allowed range (low, high).
# 4. We then recursively check the left and right subtrees:
#    - For the left subtree, we update the high value to the current node's value
#    - For the right subtree, we update the low value to the current node's value
# 5. If at any point we find a node that violates the BST property, we return False.
# 6. If we've checked all nodes without finding any violations, we return True.

# This solution has a time complexity of O(n), where n is the number of nodes in the tree,
# as we visit each node exactly once. The space complexity is O(h), where h is the height
# of the tree, due to the recursion stack.