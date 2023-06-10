# Part 1: Interprocess communication (file, signal, pipe, socket)
Interprocess communication (IPC) refers to the mechanisms and techniques used by processes or programs running on a computer system to exchange data, synchronize their actions, and communicate with each other. IPC enables collaboration and coordination among processes, allowing them to work together to accomplish complex tasks. Here are the details of different IPC mechanisms:

- File: Processes can communicate with each other by reading from and writing to shared files. This involves using file operations, such as opening, reading, writing, and closing files. Processes can share data by writing to a file and then having other processes read from that file. File-based communication is often used for persistent data exchange, where data is stored in files for long-term use or sharing.

- Signal: Signals are software interrupts used to notify a process of an event or condition. Processes can send signals to other processes to indicate events or request actions. For example, a process can send a signal to interrupt or terminate another process. Signals are often used for simple and asynchronous communication between processes, such as handling exceptions, catching specific events, or implementing basic interprocess synchronization.

- Pipe: A pipe is a unidirectional communication channel between two processes. It allows one process to send data to another process through a pipe's input and output endpoints. Pipes can be either anonymous pipes, which exist between parent and child processes, or named pipes, which allow communication between unrelated processes. Pipes are commonly used for one-way communication and can provide a simple and efficient means of data transfer between processes. 
Let's consider two processes, Process A and Process B, running concurrently. Process A wants to send data to Process B using a pipe.
   - Process A creates a pipe using the pipe system call. The pipe consists of two endpoints: the read end and the write end.
   - Process A writes data to the write end of the pipe using the write system call. The data is placed in the pipe's buffer.
   - Process B, which has knowledge of the pipe, reads data from the read end of the pipe using the read system call. The data is retrieved from the pipe's buffer.
   - Process B can now process the received data as needed.
   - The communication between Process A and Process B is unidirectional. If bidirectional communication is required, another pipe can be created with the roles of read and write ends reversed.
   
- Socket: Sockets are communication endpoints that enable bidirectional, network-based communication between processes running on different machines or even on the same machine. Sockets use the client-server model, where one process acts as a server, listening for incoming connections, and another process acts as a client, initiating the connection. Sockets provide a flexible and powerful IPC mechanism that supports various protocols, such as TCP/IP or UDP, and can facilitate communication over local networks or the internet.
Let's consider a simple client-server application where a client process wants to request a webpage from a server process using sockets.

  - The server process runs on a specific machine and listens for incoming connections on a designated port, let's say port 80 for HTTP.
  - The client process wants to request a webpage, so it establishes a connection to the server by creating a socket and specifying the server's IP address and port number.
  - Once the connection is established, the client sends an HTTP request message to the server through the socket. The request contains information about the desired webpage.
  - The server receives the request message on its socket, processes the request, and retrieves the requested webpage.
  - The server then sends the webpage content as an HTTP response message back to the client through the socket.
  - The client receives the response from the server on its socket and can display or process the webpage as needed.
Each IPC mechanism has its own characteristics and is suitable for different scenarios:
 - Files are often used for sharing data between processes that need persistent storage or where data needs to be accessed by multiple processes over time.
 - Signals are lightweight and useful for simple event notification and process control.
 - Pipes provide a simple and efficient means of one-way communication between processes, typically within the same system or related processes.
 - Sockets offer a versatile and network-capable IPC mechanism for distributed systems, allowing processes to communicate across different machines or networked environments.

# Part 2: Time complexity of algorithms: insertion sort, merge sort, searching in linear and logarithmic time. Quick sort, the minimal number of necessary comparisons. Sorting in linear time: radix sort, bucket sort.

## Time complexity of algorithms
- The time complexity of an algorithm is a measure of the amount of time required by an algorithm to run, as a function of the input size. It provides an estimation of how the running time of an algorithm increases with the increase in the input size. Time complexity is typically expressed using big O notation, which represents the upper bound or worst-case scenario of the algorithm's running time.

- an algorithm has a logarithmic time complexity if the number of operations it performs is proportional to the logarithm of the size of the input. The base of the logarithm can vary, but commonly used bases include 2 (log₂) and the natural logarithm (logₑ).

- Time complexity helps in analyzing the efficiency and scalability of algorithms. It allows us to compare algorithms and determine which one is more efficient for solving a particular problem. Generally, we aim to design algorithms with lower time complexity to achieve faster execution and better performance.

Commonly used notations in time complexity analysis include:

1. O(1) - Constant Time Complexity: The algorithm takes a constant amount of time to execute, regardless of the input size. It is the most efficient time complexity.

Example: Accessing an element in an array by its index.

2. O(log n) - Logarithmic Time Complexity: The algorithm's running time increases logarithmically with the input size. It is commonly seen in algorithms that divide the problem into smaller subproblems at each step.

Example: Binary search algorithm on a sorted array.

3. O(n) - Linear Time Complexity: The algorithm's running time grows linearly with the input size. It executes a constant amount of operations for each element in the input.

Example: Iterating through an array to find the maximum element.

4. O(n log n) - Linearithmic Time Complexity: The algorithm's running time grows in proportion to the product of the input size and the logarithm of the input size.

Example: Sorting algorithms like Merge Sort and Heap Sort.

5. O(n^2) - Quadratic Time Complexity: The algorithm's running time increases quadratically with the input size. It often arises in algorithms that involve nested loops.

Example: Bubble Sort and Selection Sort.

6. O(2^n) - Exponential Time Complexity: The algorithm's running time doubles with each increase in the input size. It is highly inefficient and should be avoided for large inputs.

Example: Solving the Traveling Salesman Problem using a brute-force approach.

## Searching algorithms:
1. ***Linear Search:***
  - Time Complexity: O(n)
  - Linear search is a simple algorithm that checks each element in a collection sequentially until the desired element is found or the end of the collection is reached.
  - In the worst case, when the desired element is at the end of the collection or not present at all, linear search has to check every element.

2. ***Binary Search:***
  - Time Complexity: O(log n)
  - Binary search is an efficient search algorithm that requires the collection to be sorted. It repeatedly divides the search space in half and compares the middle element with the desired element.
  - If the middle element is equal to the desired element, the search is successful. Otherwise, the search continues in the left or right half of the collection, discarding the other half.
  - Binary search eliminates half of the remaining elements at each step, resulting in a logarithmic time complexity.   
  
3. ***Hashing:***
  - Time Complexity: O(1) on average (assuming a good hash function)
  - Hashing involves mapping the search key to an index in an array (hash table) using a hash function.
  - This method allows for constant-time average case lookup, making it highly efficient for large data sets.
  - However, the time complexity can degrade to O(n) in the worst case due to collisions or a poor hash function.

> O(1) represents constant time complexity in computer science. It means that the runtime or the number of operations required by an algorithm remains constant regardless of the size of the input.

## Soring Algorithms
1. ***Insertion Sort:***
  - Insertion sort is a simple comparison-based sorting algorithm that builds the final sorted array one element at a time.
  - It maintains a sorted subarray to the left of the current element and inserts the current element into its correct position within that subarray.
  - The algorithm iterates through the input array, comparing each element with the elements in the sorted subarray and inserting it at the appropriate position.
  - Insertion sort has a worst-case time complexity of O(n^2) and is efficient for small input sizes or nearly sorted arrays.

*Example:*
```
Consider an unsorted array: [5, 2, 1, 9, 4]
Step-by-step execution of insertion sort:
        Pass 1: [2, 5, 1, 9, 4]
        Pass 2: [1, 2, 5, 9, 4]
        Pass 3: [1, 2, 5, 9, 4]
        Pass 4: [1, 2, 4, 5, 9]
        The final sorted array is [1, 2, 4, 5, 9].
```

2. ***Merge Sort:***
  - Merge sort is a divide-and-conquer algorithm that recursively divides the input array into smaller halves until each half contains only one element.
  - It then merges the sorted halves to produce a sorted output array.
  - The merging process compares the elements from the two halves and combines them in sorted order.
  - Merge sort has a worst-case time complexity of O(n log n) and is known for its stability and efficient performance on large input sizes.

*Example:*
```
Consider an unsorted array: [7, 3, 1, 4, 6, 2, 5]
Step-by-step execution of merge sort:
        Dividing: [7, 3, 1, 4, 6, 2, 5]
        Dividing: [7, 3, 1, 4] | [6, 2, 5]
        Dividing: [7, 3] | [1, 4] | [6, 2] | [5]
        Merging: [3, 7] | [1, 4] | [2, 6] | [5]
        Merging: [1, 3, 4, 7] | [2, 5, 6]
        Merging: [1, 2, 3, 4, 5, 6, 7]
        The final sorted array is [1, 2, 3, 4, 5, 6, 7].
```

3. ***Quick Sort:***
  - Quick sort is a divide-and-conquer algorithm that selects a pivot element and partitions the array around the pivot.
  - It recursively applies the same process to the subarrays on the left and right of the pivot until the entire array is sorted.
  - The pivot selection and partitioning steps determine the efficiency of the algorithm.
  - Quick sort has an average-case time complexity of O(n log n), making it one of the fastest sorting algorithms.

*Example:*
```
Consider an unsorted array: [6, 3, 9, 1, 5]
Step-by-step execution of quick sort:
        Selecting pivot (e.g., 5)
        Partitioning: [3, 1] | [5] | [6, 9]
        Applying quick sort recursively on the subarrays:
        [3, 1]: Selecting pivot (e.g., 1)
        Partitioning: [1] | [3]
        [6, 9]: Selecting pivot (e.g., 6)
        Partitioning: [6] | [9]
        The final sorted array is [1, 3, 5, 6, 9].
```

### The minimal number of necessary comparisons in Quick sort:
- This depends on the pivot selection strategy and the order of the input elements. In the average case, Quick sort requires O(n log n) comparisons, where "n" is the number of elements in the input array. However, in the best case scenario, Quick sort can achieve a minimal number of necessary comparisons.

- Best Case Scenario:
The best case scenario in Quick sort occurs when the chosen pivot element is always the median element of the partitioned subarray. In this case, each partition splits the array into two nearly equal halves. As a result, the algorithm achieves the best possible time complexity of O(n log n) with the minimal number of comparisons.

4. ***Radix Sort:***
  - Radix sort is a non-comparative sorting algorithm that sorts integers by grouping them based on each digit's value.
  - It sorts the numbers digit by digit from the least significant digit (LSD) to the most significant digit (MSD).
  - Radix sort uses a stable sorting algorithm, such as counting sort or bucket sort, as a subroutine to sort the numbers based on each digit.
  - Radix sort has a time complexity of O(k * n), where k is the number of digits in the largest number and n is the size of the input.
  - Radix sort can achieve linear time complexity when the range of values and the number of digits in the elements are small.
  
*Example:*
```
Consider an unsorted array: [170, 45, 75, 90, 802, 24, 2, 66]
Step-by-step execution of radix sort (using least significant digit (LSD) radix sort):
        Sorting by ones digit: [170, 90, 802, 2, 24, 45, 75, 66]
        Sorting by tens digit: [802, 2, 24, 45, 66, 170, 75, 90]
        Sorting by hundreds digit: [2, 24, 45, 66, 75, 90, 170, 802]
        The final sorted array is [2, 24, 45, 66, 75, 90, 170, 802].
```

5. ***Bucket Sort:***
   - Bucket sort divides the input range into several equally sized buckets and distributes the elements into these buckets based on their values.
   - Each bucket is then sorted individually, either using another sorting algorithm or recursively applying bucket sort.
   - After sorting each bucket, the elements are concatenated to form the final sorted array.
   - Bucket sort has a time complexity of O(n) on average but can degrade to O(n^2) in the worst case if the elements are unevenly distributed.
   - Bucket sort can achieve linear time complexity when the input elements are uniformly distributed across the buckets and the number of buckets is proportional to the input size.
   
*Example:*
```
Consider an unsorted array: [0.82, 0.37, 0.64, 0.15, 0.79]
Step-by-step execution of bucket sort:
        Dividing the range into buckets: [0.15], [0.37], [0.64], [0.79], [0.82]
        Sorting each bucket individually (e.g., using insertion sort):
        [0.15]
        [0.37]
        [0.64]
        [0.79]
        [0.82]
        Concatenating the sorted buckets: [0.15, 0.37, 0.64, 0.79, 0.82]
        The final sorted array is [0.15, 0.37, 0.64, 0.79, 0.82].
```

### Note: How Hash function works?
Suppose you have a hash map that stores people's names and their corresponding ages. The hash map is implemented using a hash table with 10 slots (0 to 9). The goal is to efficiently search for the age of a person given their name.
1. Creating the Hash Function:
  - The hash function for this example could be based on the length of the name. The idea is to map each name to an index in the hash table.
  - Let's say the hash function calculates the hash value by taking the length of the name and performing modulo division with the number of slots in the hash table. So, hash_value = length_of_name % 10.
2. Inserting Data into the Hash Map:
  - Suppose you want to insert the name "John" with age 25 into the hash map.
  - The hash function calculates the hash value for the name "John" as follows: hash_value = 4 (length of "John" is 4, and 4 % 10 = 4).
  - The key-value pair (name: "John", age: 25) is stored at index 4 of the hash table.
3. Searching for a Value:
  - Now, let's say you want to find the age of a person named "John".
  - The hash function calculates the hash value for the name "John" as hash_value = 4.
  - The search operation looks for the value associated with the key "John" at index 4 in the hash table.
  - If the value is found, the search operation returns the corresponding age (in this case, 25).
  - If there are no collisions (i.e., no other names mapped to index 4), the search operation is completed in constant time O(1).
4. Handling Collisions:
  - However, collisions may occur if multiple names result in the same hash value.
  - For example, if there is another person named "Tom" with age 30, and the hash function calculates the hash value as 4 (length of "Tom" is 3, and 3 % 10 = 3), a collision occurs.
  - To handle collisions, various techniques like separate chaining or open addressing can be used.
  - In open addressing, when a collision occurs, the algorithm searches for the next available slot in the hash table by sequentially checking the subsequent indices until an empty slot is found.
  - With separate chaining, each index of the hash table stores a linked list or another data structure to handle multiple elements that map to the same index.
  - So, in our example, at index 4, we would have a linked list with two entries: ("John", 25) and ("Tom", 30).
  - During the search operation for "John", the hash map will traverse the linked list at index 4 and return the age associated with the matching key.
 
### Note: The difference between hash map and hash table
- Some languages or libraries use the term "hash map" to refer to a general-purpose hash-based data structure that allows null keys and values, while "hash table" might refer to a specific implementation that handles collisions using techniques like separate chaining or open addressing.
- Hash tables might have a fixed initial size or allow manual resizing, while hash maps may automatically resize themselves to accommodate a variable number of elements more efficiently.

### Note: other types of complexity
In addition to time complexity, there are two other primary forms of complexity used to analyze and rate algorithms: space complexity and auxiliary space complexity.
1. Space Complexity:
 - Space complexity refers to the amount of memory or storage space required by an algorithm to solve a problem based on the input size.
 - It measures the maximum amount of additional memory the algorithm needs to allocate during its execution.
 - Space complexity is typically expressed in terms of the input size, often denoted as "n."
 - Common notations for space complexity include O(1) (constant space), O(n) (linear space), O(n^2) (quadratic space), and so on.
2. Auxiliary Space Complexity:
 - Auxiliary space complexity is a specific type of space complexity that excludes the space used by the input itself.
 - It measures the amount of extra space used by an algorithm apart from the space required to hold the input.
 - Auxiliary space complexity is often used to assess the additional space used for variables, data structures, recursion stacks, and other intermediate computations during the algorithm's execution.
 - Similar to space complexity, auxiliary space complexity is typically expressed using big O notation, such as O(1), O(n), O(n^2), etc.
