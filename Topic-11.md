# Part 1: Interprocess communication (file, signal, pipe, socket)
Interprocess communication (IPC) refers to the mechanisms and techniques used by processes or programs running on a computer system to exchange data, synchronize their actions, and communicate with each other. IPC enables collaboration and coordination among processes, allowing them to work together to accomplish complex tasks. Here are the details of different IPC mechanisms:

- File: Processes can communicate with each other by reading from and writing to shared files. This involves using file operations, such as opening, reading, writing, and closing files. Processes can share data by writing to a file and then having other processes read from that file. File-based communication is often used for persistent data exchange, where data is stored in files for long-term use or sharing.

- Signal: Signals are software interrupts used to notify a process of an event or condition. Processes can send signals to other processes to indicate events or request actions. For example, a process can send a signal to interrupt or terminate another process. Signals are often used for simple and asynchronous communication between processes, such as handling exceptions, catching specific events, or implementing basic interprocess synchronization.

- Pipe: A pipe is a unidirectional communication channel between two processes. It allows one process to send data to another process through a pipe's input and output endpoints. Pipes can be either anonymous pipes, which exist between parent and child processes, or named pipes, which allow communication between unrelated processes. Pipes are commonly used for one-way communication and can provide a simple and efficient means of data transfer between processes.

- Socket: Sockets are communication endpoints that enable bidirectional, network-based communication between processes running on different machines or even on the same machine. Sockets use the client-server model, where one process acts as a server, listening for incoming connections, and another process acts as a client, initiating the connection. Sockets provide a flexible and powerful IPC mechanism that supports various protocols, such as TCP/IP or UDP, and can facilitate communication over local networks or the internet.

Each IPC mechanism has its own characteristics and is suitable for different scenarios:
 - Files are often used for sharing data between processes that need persistent storage or where data needs to be accessed by multiple processes over time.
 - Signals are lightweight and useful for simple event notification and process control.
 - Pipes provide a simple and efficient means of one-way communication between processes, typically within the same system or related processes.
 - Sockets offer a versatile and network-capable IPC mechanism for distributed systems, allowing processes to communicate across different machines or networked environments.

# Part 2: Time complexity of algorithms: insertion sort, merge sort, searching in linear and logarithmic time. Quick sort, the minimal number of necessary comparisons. Sorting in linear time: radix sort, bucket sort.
## 
