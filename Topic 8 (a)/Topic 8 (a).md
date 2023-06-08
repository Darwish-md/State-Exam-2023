# <a name="_5hz9foxy4t6d"></a>**Concept, typical applications, and requirements of embedded systems.**
## <a name="_p2uk4xl36pgi"></a>**Embedded Systems:**
"An embedded system is a microprocessor- or microcontroller-based system of hardware and software designed to perform dedicated functions within a larger mechanical or electrical system."

As its name suggests, Embedded means something that is attached to another thing. An embedded system can be thought of as a computer hardware system having software embedded in it. An embedded system can be an independent system or it can be a part of a large system. An embedded system is a microcontroller or microprocessor-based system which is designed to perform a specific task.
## <a name="_ydla19wg8sty"></a>**Applications of embedded systems:**
Embedded systems are used in a wide range of technologies across an array of industries. Some examples include:

**Automobiles:**

Modern cars commonly consist of many computers (sometimes as many as 100), or embedded systems, designed to perform different tasks within the vehicle. Some of these systems perform basic utility functions and others provide entertainment or user-facing functions. Some embedded systems in consumer vehicles include cruise control, backup sensors, suspension control, navigation systems, and airbag systems.

**Industrial machines:**

They can contain embedded systems, like sensors, and can be embedded systems themselves. Industrial machines often have embedded automation systems that perform specific monitoring and control functions.
## <a name="_rq1zhoo1l5g7"></a>**Requirements of an embedded system:**
1- Real-time performance: Many embedded systems need to respond to external events and inputs in real time, with predictable and deterministic behavior.

2- Low power consumption: Embedded systems are often designed to operate on limited power sources, such as batteries or energy-efficient power supplies, requiring optimization for low power consumption.

3- Size and cost constraints: Embedded systems are often deployed in space-constrained environments or mass-produced for cost-sensitive markets, so they need to be compact and affordable.

4- Reliability and robustness: Embedded systems are expected to operate reliably for extended periods without failure. They may need to withstand harsh environmental conditions, such as temperature variations, humidity, vibration, and electromagnetic interference.

5- Connectivity and communication: Many embedded systems require connectivity to communicate with other devices or networks, whether it's through wired interfaces like Ethernet or wireless protocols like Wi-Fi, Bluetooth, or cellular networks.

6- Security: With the increasing connectivity of embedded systems, ensuring data security, protection against unauthorized access, and resistance to cyber threats are important considerations.

# <a name="_cmoqrcs5m01m"></a>**Real-time and reactive systems.**
**Real-time systems** are computer systems that monitor, respond to, or control an external environment. This environment is connected to the computer system through sensors, actuators, and other input-output interfaces.
## <a name="_vo6o58mg562b"></a>**Applications and examples of real-time systems:**
- vehicle systems for automobiles, subways, aircraft, railways, and ships.
- traffic control for highways, airspace, railway tracks, and shipping lanes.
- process control for power plants, chemical plants, and consumer products such as soft drinks and beer.
- medical systems for radiation therapy, patient monitoring, and defibrillation.
- military uses such as firing weapons, tracking, and command and control.
- manufacturing systems with robots.

Embedded systems can be classified as **reactive** which rely on software implementation of functionality on a computer platform with a real-time operating system (RTOS).

A **real-time operating system (RTOS)** is commonly used to manage communication and synchronization between tasks, as well as their execution times (scheduling). The performance of tasks executions not only relies on processor power but also on how tasks are managed. Therefore, the well-performed design of the RTOS becomes important.

Most reactive and real-time systems naturally decompose into communicating concurrent components.
# <a name="_i9udwd8ni88a"></a>**Embedded systems architecture.**
Typical embedded system mainly has two parts i.e., embedded hardware and embedded software. Embedded hardware is based around microprocessors and microcontrollers, which also include memory, bus, Input/Output, and Controller, whereas embedded software includes embedded operating systems, different applications, and device drivers. Basically, these two types of architecture i.e., Harvard architecture (a computer architecture design that separates the instruction memory and data memory into two distinct memories.) and Von Neumann architecture (a fundamental computer architecture design that separates a computer's memory and processing units into distinct components.) are used in embedded systems. The architecture of the Embedded System includes Sensor, Analog to Digital Converter, Memory, Processor, Digital to Analog Converter, Actuators, etc.
## <a name="_9l0zkfwmnnm2"></a>**Embedded Product Development Life Cycle (EDLC):**
Developing an embedded system or product mainly goes through these seven phases which are:

- Requirement analysis
- Examine
- Design
- Develop
- Test
- Deploy
- Maintenance

![](Aspose.Words.5856a930-b06a-4d2d-a8a1-017e07ba0bfe.001.png)
# <a name="_hlkc5qmmyons"></a>**Hardware and software layers.**
Embedded systems typically consist of two primary layers: the hardware layer and the software layer. These layers work together to enable the functionality and operation of the embedded system.
## <a name="_fwhfz33dfqyx"></a>**Hardware Layer:**
The hardware layer of an embedded system comprises the physical components and electronic circuits that form the system. It includes microcontrollers or microprocessors, memory (RAM and ROM), input/output (I/O) devices, sensors, actuators, communication interfaces, power supply, and other hardware components.

The hardware layer provides the foundation for the embedded system's operation. It executes instructions, processes data, interacts with the external environment through I/O devices and sensors, and controls the behavior of the system. The hardware layer interfaces with the software layer, providing the necessary resources and capabilities for software execution.
## <a name="_ho1s23izs9pk"></a>**Software Layer:**
The software layer of an embedded system includes the programs, algorithms, and instructions that control the behavior and functionality of the system. It is responsible for managing the hardware resources, implementing specific functionalities, and providing an interface for user interaction. The software layer is typically developed using programming languages and tools suitable for embedded systems.

The software layer is typically developed separately from the hardware layer and can be updated or modified without altering the underlying hardware. It allows flexibility, scalability, and the ability to add new features or improve system performance through software updates.

The software layer consists of various components:

**Firmware:** Firmware refers to the software code that is closely tied to the hardware and resides in the non-volatile memory (ROM) of the embedded system. It provides low-level control and initialization routines for hardware components, such as device drivers, bootloaders, and basic system functionalities.

**Operating System (OS):** In some embedded systems, an operating system may be present to provide higher-level abstractions, multitasking capabilities, resource management, and communication services. Examples of embedded OSs include FreeRTOS, ThreadX, or Linux-based distributions customized for embedded systems.

**Application Software:** The application software layer contains the specific programs and algorithms that implement the desired functionality of the embedded system. This software layer interacts with the hardware layer, processes data from sensors, performs computations, and controls the system's behavior. The application software is often developed using programming languages like C, C++, or assembly language.
# <a name="_h2ogj3gusfh0"></a>**Embedded software: system software layer and application software layer.**
In embedded systems, the software layer can be further divided into two main components: the system software layer and the application software layer.
## <a name="_ek6cpirw8a3o"></a>**System Software Layer:**
The system software layer provides the foundation and infrastructure for the embedded system. It includes the operating system (OS) and low-level software components that manage the hardware resources, provide basic system services, and facilitate communication between the hardware and application software. The system software layer typically includes the following:

**- Operating System (OS):** The embedded OS manages system resources, and provides multitasking capabilities, scheduling, memory management, and device drivers. It allows higher-level software to run on the embedded system and provides an abstraction layer between the hardware and application software.

**- Device Drivers:** Device drivers are software components that allow the operating system and application software to interact with specific hardware devices, such as sensors, actuators, communication interfaces, or storage devices. They provide an interface for accessing and controlling the hardware resources.

**- Middleware:** Middleware components bridge the gap between the operating system and application software. They provide additional services, such as networking, inter-process communication, database connectivity, or real-time capabilities, depending on the requirements of the embedded system.
## <a name="_299g083pa207"></a>**Application Software Layer:**
The application software layer encompasses the specific programs, algorithms, and functionalities that implement the desired behavior and features of the embedded system. It leverages the system software layer to interact with the hardware and provide higher-level services. The application software layer is tailored to the specific requirements of the embedded system and can include various components:

**- Application-specific software:** This includes the main software modules that implement the specific functionalities of the embedded system. It can involve data processing, control algorithms, user interface interactions, communication protocols, or any other task necessary for the embedded system's intended operation.

**- Libraries and Frameworks:** Application software often utilizes libraries and frameworks to accelerate development and leverage pre-existing functionalities. These can include math libraries, communication libraries, graphical user interface (GUI) frameworks, or any other software components that provide reusable functionality.

**Bibliography:**

1. <https://teachcomputerscience.com/embedded-systems>
