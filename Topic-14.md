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
