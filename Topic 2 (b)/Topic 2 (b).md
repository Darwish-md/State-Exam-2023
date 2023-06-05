# <a name="_5hz9foxy4t6d"></a>**Transmission Control Protocol.**
## <a name="_wssakojs72a2"></a>**Transmission Control Protocol (TCP):**
Transmission Control Protocol (TCP) is a layer 4 protocol that provides acknowledgment of the received packets and is also reliable as it resends the lost packets. It is a standard that defines how to establish and maintain a network conversation by which applications can exchange data.

TCP works with the Internet Protocol (IP), which defines how computers send packets of data to each other. Together, TCP and IP are the basic rules that define the Internet.
### <a name="_csse6rd5pt8v"></a>**How Transmission Control Protocol Works?**
TCP is a connection-oriented protocol, which means a connection is established and maintained until the applications at each end have finished exchanging messages.

**TCP performs the following actions:**

- determines how to break application data into packets that networks can deliver;
- sends packets to, and accepts packets from, the network layer;
- manages flow control;
- handles retransmission of dropped or garbled packets, as it's meant to provide error-free data transmission; and
- acknowledges all packets that arrive.
# <a name="_migocj6o8q6i"></a>**User Datagram Protocol.**
## <a name="_njrs6wctcew1"></a>**User Datagram Protocol (UDP):**
UDP is also a layer 4 protocol but unlike TCP it doesn’t provide acknowledgement of the sent packets. It is a communication protocol that is primarily used to establish low-latency and loss-tolerating connections between applications on the Internet.

UDP speeds up transmissions by enabling the transfer of data before an agreement is provided by the receiving party. Therefore, it is beneficial in time-sensitive communications, including voice over IP (VoIP), domain name system (DNS) lookup, and video or audio playback.

UDP is an alternative to Transmission Control Protocol (TCP). Both UDP and TCP run on top of IP. However, there are important differences between the two. For example, UDP enables process-to-process communication, while TCP supports host-to-host communication.
### <a name="_alpvyj2j7tm7"></a>**User Datagram Protocol Features:**
User Datagram Protocol has attributes that make it beneficial for use with applications that can tolerate lost data. Below are some examples:

- It allows packets to be dropped and received in a different order than they were transmitted, making it suitable for real-time applications where latency might be a concern.
- It can be used for transaction-based protocols, such as DNS or Network Time Protocol (NTP).
- It can be used where a large number of clients are connected and where real-time error correction isn't necessary, such as gaming, voice or video conferencing, and streaming media.
# <a name="_7sr7febmr0xw"></a>**TCP vs UDP.**
![](Aspose.Words.3d9ff207-0c58-4d9b-8170-30e6cb93e6dd.001.png)


# <a name="_8b427o38ruaj"></a>**Bibliography:**
1. <https://www.techtarget.com/searchnetworking/definition/TCP>
1. <https://www.techtarget.com/searchnetworking/definition/UDP-User-Datagram-Protocol>
1. <https://www.techtarget.com/searchvirtualdesktop/answer/What-are-the-differences-between-TCP-and-UDP>
