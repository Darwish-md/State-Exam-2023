# <a name="_5hz9foxy4t6d"></a>**Functions and services of the MRTG and Nagios network management systems.**
## <a name="_p2uk4xl36pgi"></a>**Multi Router Traffic Grapher (MRTG):**
The Multi Router Traffic Grapher (MRTG) is an open-source tool used to monitor the traffic load on network links. In the middle of a crisis, or when you are debugging an immediate network problem, MRTG will allow you to...  view the traffic patterns of many networks at once and quickly determine if one or more is experiencing an abnormal traffic load. The fact that the graphs display the history of the network is key.

In practice, it can be difficult to tell from immediate bandwidth and packet-per-second counts alone whether a network is operating normally. If a 100 Mbps link is carrying 85 Mbps of traffic, is this heavy but normal use or is the network straining under an attack? By having the history of the network available, you can look for sudden changes that might account for an operational problem. A denial-of-service attack that attempts to exhaust the available bandwidth on a network nearly always presents as a sudden, sustained increase in traffic levels; the attackers do not have much to gain by slowly ramping up the attack over a period of time.

When you are not tending to an immediate problem, MRTG is useful for studying trends in traffic on your network. It will help you understand how traffic is distributed across your network, plan capacity needs for the future, and so on.

While MRTG is most often used to collect data from router interfaces, it can also collect traffic data from switches or servers. In this way, you can monitor the bandwidth use of a particular machine. In fact, MRTG can be configured to collect any statistical data that a device makes available via SNMP.

MRTG was created in 1995, and could be summarized as in the following:

- Purpose: (Monitor and detect)
  - Monitor traffic patterns of multiple networks simultaneously.
  - Detect abnormal traffic loads quickly during crisis situations or network troubleshooting.
- Benefits: (study and optimize) 
  - Studying traffic trends helps understand network behavior and distribution. 
  - Capacity planning and future network design can be optimized based on traffic insights.
- capability: (what it does, how it does)
  - Primarily collects data from router interfaces but can also gather traffic data from switches or servers.
  - MRTG collects data on network traffic and presents it in the form of HTML graphs for easy visualization and analysis.
  - Configurable to collect statistical data available via SNMP from any device.

## <a name="_26j3f98r4ffr"></a>**Nagios:**
Nagios is an open-source monitoring system for computer systems (NetSaint 1999). There is a commercial version which is Nagios XI. It was designed to run on the Linux operating system and can monitor devices running Linux, Windows, and Unix operating systems (OSes).

Nagios software runs periodic checks on critical parameters of application, network, and server resources. For example, Nagios can monitor memory usage, disk usage, microprocessor load, the number of currently running processes, and log files. Nagios also can monitor services, such as Simple Mail Transfer Protocol (SMTP), Post Office Protocol 3 (POP3), Hypertext Transfer Protocol (HTTP), and other common network protocols. Active checks are initiated by Nagios, while passive checks come from external applications connected to the monitoring tool.
### <a name="_e78si9vm1olg"></a>**Features of Nagios:**

- Comprehensive Monitoring
- Visibility & Awareness
- Problem Remediation
- Proactive Planning
- Reporting
- Multi-Tenant Capabilities
- Extendable Architecture
- Stable, Reliable, and Respected Platform
- Vibrant Community
- Customizable Code



**Bibliography:**

1. <https://www.techtarget.com/searchnetworking/tip/Monitor-your-traffic-with-MRTG>
1. <https://www.nagios.org/about/features/>
1. <https://www.techtarget.com/searchitoperations/definition/Nagios>
