# <a name="_5hz9foxy4t6d"></a>**Modern processor solutions (pipeline, hazard, out-of-order execution, speculative execution, superscalar-, VLIW- and vector processors).**
## <a name="_p2uk4xl36pgi"></a>**Pipeline:**
Pipeline processing is a technique used in computer architecture to improve the efficiency and throughput of processors. It involves breaking down the execution of instructions into smaller stages and processing them concurrently, allowing multiple instructions to be in different stages of execution at the same time. This approach helps to reduce the overall latency of instruction execution and increase the overall throughput of the processor.
### <a name="_31x5imkfiv70"></a>**Stages of pipeline processing:**
1. Instruction Fetch (IF): This stage fetches the instructions from memory or cache and prepares them for execution.
1. Instruction Decode (ID): In this stage, the fetched instructions are decoded to determine the necessary operations and operands.
1. Execution (EX): The decoded instructions are executed or operations are performed, such as arithmetic operations, logical operations, or memory access.
1. Memory Access (MEM): If required, this stage accesses the memory to read or write data.
1. Write Back (WB): The results of the executed instructions are written back to the registers or memory.
### <a name="_2qmvjgi4teis"></a>**Advantages of pipeline processing:**
1. Increased Throughput (# of instructions per time unit): By allowing multiple instructions to be in different stages of execution simultaneously, the overall throughput of the processor is increased. This leads to higher performance and faster execution of programs.
1. Resource Utilization: Pipeline processing allows better utilization of the processor's resources. Each stage of the pipeline can be optimized for a specific operation, maximizing the efficiency of the processor.
1. Reduced Latency: The pipelining technique helps reduce the overall latency of instruction execution. As instructions move through the pipeline, the time taken to execute each instruction decreases.
## <a name="_gyrz4n5yrrm7"></a>**Hazards:**
Hazard or pipeline hazards are problems that arise in the pipeline which prevent the next instruction from executing during its designated clock cycle, this can potentially lead to incorrect computation results. 

There are three types of pipeline hazards:

- **Data hazards** – This is a condition in which either the source or the destination operands of an instruction are not available at the time expected in the pipeline. As a result of this, some operation has to be delayed, and the pipeline stalls. This can happen when there are two instructions and one of them depends on the data obtained from the other. For the two given instructions, we have A = 3 + 2 and B = A \* 4, here we cannot execute the second instruction till we complete the first instruction since the second instruction needs the output of the first. In a pipeline processor, these two instructions can likely lead to incorrect results due to the data dependency between these two instructions.
- **Structural hazards** – This condition arises when two instructions require a given hardware resource at the same time and hence for one of the instructions the pipeline needs to be stalled. The most common case is when memory is accessed at the same time by two instructions. One instruction may need to access the memory as part of the executive or write-back phase while the other instruction is being fetched. In this case, if both the instructions reside in the same memory, both instructions can’t proceed together and one of them needs to be stalled. This can be solved by using sufficient hardware resources like more memory.
- **Control hazards** – The instruction fetch unit of the CPU is responsible for providing a stream of instructions to the execution unit, the instructions fetched by the fetch unit are in consecutive memory locations until they are executed. However, the problem arises when one of the instructions is a branching instruction to some other memory location, this makes all the other fetched instructions in the pipeline from the consecutive memory to be invalid and need to be removed, this is called flushing of the pipeline. This causes a stall till new instructions are again fetched from the memory address specified by the branch instruction.
## <a name="_bhex2meo31g6"></a>**Out-of-order Execution:**
A processor that executes instructions one after the other, may use resources inefficiently which leads to poor performance. To improve the performance of the processor this can be done by executing different sub-steps of sequential instructions simultaneously. Out-of-order execution is an approach that is used in high-performance microprocessors. This approach efficiently uses instruction cycles and reduces costly delays. 

A processor will execute the instructions in an order of availability of data or operands instead of the original order of the instructions in the program. By doing so, the processor will avoid being idle while data is retrieved for the next instruction in the program. In other words, a processor that uses multiple execution units completes the processing of instructions in the wrong order. Suppose there are two instructions I1 and I2, in that order, in an out-of-order system the processor can execute I2 before I1 has completed.
## <a name="_2nimzrdkpgj"></a>**Speculative Execution:**
Speculative execution is an optimization technique in which a processor (CPU) performs a series of tasks before it is prompted to, in order to have the information ready if it is required at any point. Speculative execution uses concurrent processing and out-of-order execution (OoOE) to anticipate and fetch data that might be required at a later point. 

It eliminates the stall experienced while waiting for appropriate instructions to arrive for the next step.  Speculative execution uses branch prediction to guess which instructions will most likely be needed in the near future and data flow analysis to arrange the instructions for optimal execution (instead of executing them in the order they came in). The goal is to reduce the total execution time and improve the overall CPU performance.

**Working:**

For instance, the application reads three non-resident data pages distributed across three discs. When regular execution stalls on I/O requests, execution would proceed speculatively. The original disc request will complete, and then normal execution will start again. Then, all of the data accesses will be handled in the main memory, decreasing the application’s execution time in half.

In the illustration below, "1." shows how execution for a hypothetical application would typically proceed.

Similarly, "2." demonstrates how the application’s execution might depend on the speculative execution strategy. Speculative execution might be able to start prefetching, while conventional execution pauses on its first I/O request.

![](Aspose.Words.928a6fcc-698a-4916-b70c-0ef6ce080d5f.001.png)
## <a name="_w6eg81mzafyt"></a>**Superscalar processors:**
A superscalar processor is invented to produce an execution cost of higher than one instruction per clock cycle for an individual sequential program. Superscalar processor design defines a set of approaches that enable the central processing unit (CPU) of a computer to obtain a throughput of higher than one instruction per cycle while implementing an individual sequential program.

A superscalar architecture consists of parallel execution units, which can execute instructions at the same time. This parallel architecture was first executed in RISC processors, which use brief and simple instructions to implement computation. Because of their superscalar efficiency, RISC processors have normally performed higher than CISC processors running at equal megahertz.

The main function of superscalar processing is the superscalar instruction issue. A higher issue rate provides rise to higher processor execution, simultaneously, it intensifies the restrictive result of control and data dependencies on the processor implementation as well.

![](Aspose.Words.928a6fcc-698a-4916-b70c-0ef6ce080d5f.002.png)
## <a name="_fcxokdtja5pz"></a>**VLIW processors:**
VLIW represents a Very long instruction word. It is an instruction set architecture constructed to take complete benefit of instruction-level parallelism (ILP) for upgraded performance.

The central processing unit processors enable programs to designate instructions to execute in order only whereas a VLIW processor enables programs to explicitly determine instructions to implement in parallel. This design is designed to enable higher implementation without the complexity inherent in some different designs.

VLIW architectures are closely associated with superscalar processors. Both objectives at speeding up computation with the aid of exploiting instruction-level parallelism. Both have almost a similar execution basis, including various execution units (EUs) controlling in parallel, and employing either a unified register file for all data types or specific (split) register files for FX and FP data, as shown in the figure.

![](Aspose.Words.928a6fcc-698a-4916-b70c-0ef6ce080d5f.003.png)
## <a name="_l7iatf81iyw0"></a>**Vector processor:**
A vector processor is basically a central processing unit that has the ability to execute the complete vector input in a single instruction. More specifically we can say, it is a complete unit of hardware resources that executes a sequential set of similar data items in the memory using a single instruction.

We know elements of the vector are ordered properly so as to have a successive addressing format of the memory. This is the reason why we have mentioned that it implements the data sequentially. It holds a single control unit but has multiple execution units that perform the same operation on different data elements of the vector.

Unlike scalar processors that operate on only a single pair of data, a vector processor operates on multiple pair of data. However, one can convert a scalar code into a vector code. This conversion process is known as vectorization. So, we can say vector processing allows operation on multiple data elements with the help of single instruction.

These instructions are said to be single instruction multiple data or vector instructions. The CPU used in recent times makes use of vector processing as it is more advantageous than scalar processing.

**Bibliography:**

1. <https://www.javatpoint.com/types-of-microprocessors>
1. <https://www.tutorialspoint.com/what-is-the-difference-between-vliw-architecture-and-superscalar-processor>
