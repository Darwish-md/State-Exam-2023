# Part 1: Synthesis of continuous time control systems. The gain and phase margin. Linear systems and their description in time- and frequency domains. Signal transfer in control systems.

## Control Systems:

- A control system is a system that provides the desired response by controlling the output. The input is varied by some mechanism. The traffic lights control system is an example of a control system. 

- Control systems can be classified on the type of signal. A system that deals with continuous-time signals is called a continuous-time system; its opposite is the discrete-time system which uses discrete-time signals. 

- Synthesis of continuous-time control systems involves designing controllers that can regulate and stabilize a given system. This process typically includes analyzing the system's characteristics, such as gain and phase margins, and describing the system in both time and frequency domains. Signal transfer in control systems refers to the flow of signals from the input to the output of the control system.

## Gain and Phase Margin:

## Linear Systems and Time/Frequency Domains:

## Signal Transfer in Control Systems:

# Part 2: Explain the data elements of TCP and UDP transport layer protocols, and the differences between their mechanisms.
TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) are two widely used transport layer protocols in computer networks. They serve as the foundation for data transmission between applications running on different devices.

## Data elements:

![image](https://github.com/Darwish-md/State-Exam-2023/assets/72353586/d63f6ad0-cb9a-42ad-bf94-9fe6e7aa8e64)

### TCP
- Source Port: This 16-bit field identifies the sending application or process within the source device.

- Destination Port: Similar to the source port, this 16-bit field identifies the receiving application or process within the destination device.

- Sequence Number: This 32-bit field is used to maintain the order of the data segments transmitted from the source to the destination. It allows the receiving end to reconstruct the data in the correct order.

- Acknowledgment Number: Also a 32-bit field, it serves as a positive acknowledgment from the receiving end, indicating the sequence number of the next expected data segment.

- Window Size: This 16-bit field specifies the number of data bytes that the sender is willing to receive before receiving an acknowledgment. It helps in flow control and avoids overwhelming the receiver.

- Checksum: A 16-bit field that ensures the integrity of the TCP segment by verifying the correctness of the transmitted data. The calculation of the checksum involves the following steps:
  - The data to be transmitted is divided into a series of words (usually 16 bits or 32 bits).
  - These words are then summed together, typically using one's complement arithmetic.
  - The resulting sum is complemented (bitwise negated) to obtain the checksum value.

- Urgent Pointer: If the URG (urgent) flag is set, this 16-bit field points to the sequence number of the last urgent data byte in the TCP segment.

- Options: This variable-length field allows for additional TCP functionality, such as setting maximum segment size, timestamping, and window scaling.

***Examples: Web Browsing, Email, File Transfer, Remote Desktop Protocol, Database Access***

### UDP
- Source Port: Similar to TCP, this 16-bit field identifies the sending application or process within the source device.

- Destination Port: Like TCP, this 16-bit field identifies the receiving application or process within the destination device.

- Length: This 16-bit field specifies the length of the UDP datagram, including the header and the data.

- Checksum: A 16-bit field that ensures the integrity of the UDP datagram by verifying the correctness of the transmitted data.

***Examples: Real-Time Streaming, DNS, IoT, DHCP***

## Mechanisms:

- Connection-Oriented vs. Connectionless: TCP is connection-oriented, meaning it establishes a reliable, ordered, and error-checked connection between the sender and receiver. UDP, on the other hand, is connectionless, providing a best-effort delivery mechanism without establishing a connection or ensuring reliability.

- Flow Control and Congestion Control: TCP incorporates flow control and congestion control mechanisms to manage the rate of data transmission and avoid network congestion. UDP does not provide these mechanisms.

- Reliability: TCP guarantees reliable data delivery by using acknowledgment, retransmission, and error-checking mechanisms. UDP does not provide any built-in mechanisms for reliability, making it more suitable for applications where real-time or low-latency communication is prioritized over guaranteed delivery.

- Overhead: Due to its additional functionality for reliability and flow control, TCP has higher overhead in terms of header size and computational requirements compared to UDP, which has a minimal header.

- Ordering: TCP ensures in-order delivery of data segments, while UDP does not guarantee the order of data delivery. UDP is more appropriate for applications where real-time data is more critical than maintaining strict ordering.

![image](https://github.com/Darwish-md/State-Exam-2023/assets/72353586/521e79ad-fa11-47e0-be43-04e56fa5ceb3)

## three-way handshake
The three-way handshake is a method used in TCP (Transmission Control Protocol) to establish a connection between a client and a server. It ensures that both the client and server are ready to send and receive data before the actual transmission begins. Let's walk through the three-way handshake process with an example:

1. Client (C) sends a SYN packet to the server (S):
- C: SYN = 1, Sequence Number = X
- This packet is sent by the client to initiate the connection. The SYN flag is set to 1 to indicate that the client wants to synchronize and establish a connection. The Sequence Number is set to X, which is a randomly chosen initial sequence number.

2. Server (S) receives the SYN packet and responds with a SYN-ACK packet:
- S: SYN = 1, ACK = 1, Sequence Number = Y, Acknowledgment Number = X + 1
- The server receives the SYN packet and acknowledges it by sending a SYN-ACK packet back to the client. The SYN flag is set to 1 to indicate synchronization, and the ACK flag is set to 1 to acknowledge the client's SYN packet. The server chooses its own initial sequence number Y, and the Acknowledgment Number is set to the client's initial sequence number (X) incremented by 1.

3. Client (C) receives the SYN-ACK packet and sends an ACK packet to the server:
- C: ACK = 1, Sequence Number = X + 1, Acknowledgment Number = Y + 1
- The client receives the SYN-ACK packet from the server, confirming that the server is ready to establish a connection. The client responds by sending an ACK packet to acknowledge the server's SYN-ACK packet. The ACK flag is set to 1, and the Sequence Number is set to the client's initial sequence number (X) incremented by 1. The Acknowledgment Number is set to the server's initial sequence number (Y) incremented by 1.

At this point, the three-way handshake is complete. The client and server have exchanged SYN, SYN-ACK, and ACK packets, confirming their readiness to establish a connection. They have agreed on initial sequence numbers and acknowledged each other's packets.

After the three-way handshake, both the client and server can begin sending and receiving data over the established connection. The sequence numbers and acknowledgment numbers are used to ensure reliable and ordered delivery of data packets between the client and server.
