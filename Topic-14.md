# Part 1: Explain the NAT/PAT address translation mechanisms.
### Definition:
- NAT (Network Address Translation) and PAT (Port Address Translation) are mechanisms used in computer networks to translate IP addresses and port numbers between different network domains.
- NAT operates at the network layer (Layer 3) and translates IP addresses, while PAT is an extension of NAT that includes port number translation at the transport layer (Layer 4).

### Purpose:
- NAT allows devices within a private network (using private IP addresses) to communicate with devices in the public network (using public IP addresses).
- PAT enables multiple devices within a private network to share a single public IP address by mapping different port numbers to each device.

### NAT Process:
- Outgoing Packets: Private IP addresses in outgoing packets are replaced with the public IP address of the NAT router.
- Incoming Packets: Private IP addresses are restored in incoming packets by the NAT router, ensuring they reach the correct device in the private network.

### PAT Process:
- Outgoing Packets: PAT modifies the source port number of outgoing packets to a unique value, mapping it to the respective device in the private network.
- Incoming Packets: PAT uses the destination port number to route incoming packets back to the correct device based on the port mapping.

### Benefits:
- Conservation of public IP addresses by using private IP addresses internally.
- Improved security by hiding internal IP addresses from the external network.
- Simplified network configuration, allowing multiple devices to connect to the internet without individual public IP addresses.

### Difficulties:
- Restricted incoming connections may require additional configurations.
- Some network applications may encounter compatibility issues behind NAT/PAT.
- Direct communication between devices behind separate NAT routers can be challenging.

### Classification:
We can categorize NAT into two main types:

- Static NAT (SNAT): In static NAT, there is a one-to-one mapping between a public address and a private address. These mappings are configured manually and remain fixed in the NAT table. With static NAT, organizations need to buy as many public addresses as they have private addresses or devices. This approach involves a lot of manual setup and can be inefficient in terms of address utilization.

- Dynamic NAT (DNAT): In dynamic NAT, the edge device has a pool of public addresses available. When a device from the local network wants to connect to the internet, the edge device assigns a public address dynamically from the pool to that device's private address. Once the connection is terminated or becomes inactive, the corresponding private address is released back to the pool for reassignment to another device. Dynamic NAT requires an upfront purchase of a pool of public addresses, which can be costly and may result in address wastage.

> NOTE
NAT (Network Address Translation) can handle single connections without the need for PAT (Port Address Translation). When only one connection is established at a time, NAT alone can translate the private IP address to a single public IP address. However, when there are multiple simultaneous connections from devices within a private network, PAT is typically used in conjunction with NAT. PAT assigns unique port numbers to each device along with the translated public IP address. This allows multiple devices to share a single public IP address, with each device being identified by its unique combination of IP address and port number.

> Simple Example
Think of the port number as a door number in a big apartment building. The public IP address is like the address of the building, and each device has its own door number (port number) to identify it. When data is sent from a device to the internet, the PAT system keeps track of which device it came from by using the port number.

# Part 2: Basic notions concerning data structures: modelling, abstraction, abstract data types. Elementary data structures: lists, stacks, queues. Sets, multisets, arrays. The representation of trees, tree traversal, deletion and insertion.
## Data structures
Data structures refer to the way data is organized, stored, and managed in a computer system or program. They provide a systematic way of organizing and manipulating data to perform efficient operations and enable effective algorithms. 
In simpler terms, data structures are like containers that hold data in specific formats, allowing us to store, retrieve, modify, and process information in a structured manner. They define the organization and relationship of the data elements, determining how data is accessed and operated upon.

## Modelling
Modelling refers to the process of representing real-world objects, systems, or concepts using data structures. It involves identifying the essential features and relationships of the problem domain and designing a representation that can effectively store and manipulate the required data.

***For example, in a banking system, we can model a customer's account using attributes such as account number, balance, and account holder name, which allows us to simulate and manipulate the account information within the system.***

## Abstraction 
Abstraction is a concept that simplifies complex systems or objects by focusing on essential characteristics while hiding unnecessary details. In the context of data structures, abstraction allows us to define the behavior and operations of a data structure without revealing its internal implementation. It provides a higher-level view of the data structure, emphasizing its functionality rather than the underlying complexity.

***For example, when we use a car, we don't need to understand all the intricate details of its engine or internal mechanisms. We can abstract the car as a high-level entity with basic operations like starting, accelerating, and braking, without worrying about the complex inner workings.***

## Abstract Data Types (ADTs)
An abstract data type is a high-level description of a data structure that defines its behavior and operations without specifying its implementation details. It provides a blueprint or a contract for how the data structure should behave and what operations can be performed on it. ADTs define the data and the operations on the data, but they do not specify how those operations are implemented. Examples of ADTs include lists, stacks, queues, trees, and graphs.

ADTs allow programmers to work with data structures in a modular and reusable manner. They provide a clear separation between the interface (the operations and behavior) and the implementation (how the data structure is actually built and manipulated). This separation promotes code organization, encapsulation, and code reusability.

## Elementary data structures
### Lists: 
A list is a data structure that represents a collection of elements in a particular order. It allows storing and manipulating a sequence of items. Elements in a list can be added, removed, or accessed at any position.

Example:
Let's consider a shopping list:
        Eggs
        Milk
        Bread
In this case, the list represents the items to buy at the grocery store.

### Stacks: 
A stack is a Last-In-First-Out (LIFO) data structure where elements are added and removed from the same end, called the top. The last element added is the first one to be removed.

Example:
Think of a stack of books. You add books on top of the stack and remove books from the top. The last book added is the first book to be removed.

### Queues: 
A queue is a First-In-First-Out (FIFO) data structure where elements are added at one end, called the rear, and removed from the other end, called the front. The first element added is the first one to be removed.

Example:
Imagine a queue of people waiting in line. The person who joins the queue first is the first one to leave the queue.

### Sets: 
A set is a data structure that represents a collection of unique elements, where each element occurs only once. It does not maintain any particular order.

Example:
Let's consider a set of colors:
        Red
        Green
        Blue
In this set, each color appears only once, and the order of the colors does not matter.

### Multisets: 
A multiset is similar to a set but allows duplicate elements. It can store multiple occurrences of the same element.

Example:
Consider a multiset of fruits:
        Apple
        Banana
        Apple
Here, the multiset allows multiple instances of the same fruit, so it can store more than one apple.

### Arrays: 
An array is a data structure that stores a fixed-size sequence of elements of the same type. Each element in the array is accessed using an index, which represents its position in the array.

Example:
An array of numbers: [3, 6, 9, 12]
Here, the array contains four numbers, and each number can be accessed using its index. For example, the element at index 2 is 9.
    
> Note: Difference between primitive and elementary data structures
  - Primitive data types refer to the basic data types provided by a programming language, typically built into the language itself. These types are used to represent fundamental values, such as numbers, characters, or boolean values. Examples of primitive data types include integers, floating-point numbers, characters, and booleans. Primitive data types are usually low-level and directly supported by the underlying hardware. Examples: Integer, Float, Character, Boolean.

  - On the other hand, elementary data structures refer to fundamental data structures used to organize and store data in computer memory. They are higher-level abstractions that go beyond individual data types. Examples of elementary data structures include arrays, linked lists, stacks, queues, and trees. These data structures are used to organize, manipulate, and store collections of data elements. Examples: Integer, Float, Character, Boolean, Array, Stack, Queue.


### Trees
Trees are hierarchical data structures composed of nodes connected by edges. They have a root node at the top, and each node can have child nodes branching out from it. Here's an explanation of tree representation, traversal, deletion, and insertion:

- Representation of Trees:
Trees can be represented using various approaches, but the most common is through linked nodes. Each node contains a value and references to its child nodes. The structure of the tree depends on the specific type of tree being used, such as binary trees, AVL trees, or B-trees.

- Tree Traversal:
Tree traversal refers to the process of visiting and accessing all nodes in a tree. There are three common methods for tree traversal:

   - Pre-order Traversal: In pre-order traversal, we visit the root node first, then recursively traverse the left subtree, and finally traverse the right subtree. This follows the order of "root-left-right".

   - In-order Traversal: In in-order traversal, we traverse the left subtree first, then visit the root node, and finally traverse the right subtree. This follows the order of "left-root-right". In binary search trees (BST), an in-order traversal results in nodes being visited in ascending order.

   - Post-order Traversal: In post-order traversal, we traverse the left subtree first, then the right subtree, and finally visit the root node. This follows the order of "left-right-root".

- Deletion and Insertion in Trees:
Deletion and insertion operations in trees depend on the specific type of tree and its rules. Here are some general concepts:

   - Deletion: When deleting a node from a tree, its position needs to be carefully considered. In some cases, such as in binary search trees, the node may need to be replaced by its successor or predecessor based on certain conditions. Deleting a node may require adjusting the structure and links of the surrounding nodes to maintain the integrity of the tree.

   - Insertion: When inserting a new node into a tree, its position is determined based on specific rules. In binary search trees, for example, smaller values are inserted to the left of a node, while larger values are inserted to the right. The insertion operation may require creating new nodes and updating the links of existing nodes to accommodate the new node.

***Example:***
Consider a binary search tree (BST) with the following values: 5, 2, 8, 1, 3, 6, 9. Here's a simplified representation of the tree:
```
        5
       / \
      2   8
     / \ / \
    1  3 6  9
```
    
Pre-order traversal: 5, 2, 1, 3, 8, 6, 9
In-order traversal: 1, 2, 3, 5, 6, 8, 9
Post-order traversal: 1, 3, 2, 6, 9, 8, 5

For deletion and insertion operations, specific rules and algorithms need to be followed based on the type of tree being used. These operations ensure that the tree structure remains balanced and maintains any desired properties associated with the particular type of tree.
