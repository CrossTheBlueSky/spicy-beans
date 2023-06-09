/* ~~~~~~~~~~~~~~~~~~~~~~Question~~~~~~~~~~~~~~~~~~~
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

    LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
    int get(int key) Return the value of the key if the key exists, otherwise return -1.
    void put(int key, int value) Update the value of the key if the key exists. Otherwise, 
    add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.

The functions get and put must each run in O(1) average time complexity.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Logical Breakdown~~~~~~~~~~~~~~~~~~~~~~~~~

I tried a lot of stuff and none of it worked. It was pretty disheartening. Seems like the "right" answer is to use a hashmap AND a doubly-linked list.
Which I thought of, but I didn't think that would be doable in 0(1) time. 

*/

/**
 * @param {number} capacity
 */

class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(key, val) {
        const newNode = new Node(key, val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return newNode;
    }
    
    remove(node) {
        if(!node.next && !node.prev) { // if there's only 1 node
            this.head = null;
            this.tail = null;
        } else if(!node.next) { // if the node is tail node
            this.tail = node.prev;
            this.tail.next = null;
        } else if(!node.prev) { // if the node is head node
            this.head = node.next;
            this.head.prev = null;
        } else { // if the node is in between
            const prev = node.prev;
            const next = node.next;
            prev.next = next;
            next.prev = prev;
        }
        this.length--;
    }
  }
  
  class LRUCache {
    constructor(capacity) {
        this.DLL = new DoublyLinkedList();
        this.map = {};
        this.capacity = capacity;
    }
  
    get(key) {
        if(!this.map[key]) return -1;
        const value = this.map[key].val;
        this.DLL.remove(this.map[key]);
        this.map[key] = this.DLL.push(key, value);
        return value;
    }
  
    put(key, value) {
        if(this.map[key]) this.DLL.remove(this.map[key]);
        this.map[key] = this.DLL.push(key, value);
        if(this.DLL.length > this.capacity) {
            const currKey = this.DLL.head.key;
            delete this.map[currKey];
            this.DLL.remove(this.DLL.head);
        }
    }
  }


/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */