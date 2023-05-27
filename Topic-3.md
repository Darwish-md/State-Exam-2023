# part 1: Combinational logic design. Multiplexers/Demultiplexers. Encoders/Decoders. Comparators. Parity generators/checkers. Arithmetical logical units.
Combinational Logic is a form of digital logic that utilizes Boolean circuits to produce outputs solely based on the current input, without any dependency on past inputs. In contrast to sequential logic, which retains memory of previous inputs, combinational logic operates in a memory-less manner. It finds application in computer circuits for performing Boolean algebraic operations on input signals and stored data. Various elements present in computers, such as multiplexers, demultiplexers, encoders, decoders, comparators, and arithmetic logic units, are constructed using combinational logic. These circuits are built by combining or connecting basic gates like NAND, NOR, or NOT to create more complex circuits. The function of a combinational logic circuit can be specified using three main approaches:

- Boolean Algebra: This involves expressing the operations of the logic circuit using algebraic expressions, defining the behavior of the circuit for each input variable as either True or False.

- Truth Table: A truth table provides a comprehensive listing of the outputs of a logic gate for all possible input combinations, outlining the relationship between inputs and corresponding outputs.

- Logic Diagram: A logic diagram presents a graphical representation of the logic circuit, depicting the interconnections and wiring of each logic gate.

## Multiplexers (MUX):
A multiplexer is a digital circuit that selects one of many input signals and forwards it to a single output line based on a set of control signals. It has multiple data inputs, one or more select inputs, and a single output. The output represents the selected input based on the control signals. Multiplexers are commonly used for data routing, signal selection, and data transmission.

![image](https://github.com/Darwish-md/State-Exam-2023/assets/72353586/e6483ac5-8ee4-40e9-96e8-118852c612a7)

## Demultiplexers (DEMUX):
A demultiplexer is the reverse of a multiplexer. It takes a single input and routes it to one of many possible output lines based on control signals. Demultiplexers are often used to decode a single input into multiple outputs, enabling data distribution and signal demultiplexing.

![image](https://github.com/Darwish-md/State-Exam-2023/assets/72353586/b1673266-adf0-4309-abd6-7afd4e4c2ddc)

## Encoders:
An encoder is a circuit that converts multiple inputs into a smaller number of output lines based on the input pattern. It generates a unique binary code on the output lines for each input combination. Encoders are frequently used in applications such as data compression, data transmission, and address encoding.

## Decoders: 
A decoder is the opposite of an encoder. It takes a coded input and activates one of many output lines based on the input code. Decoders are commonly used in applications such as address decoding, data decoding, and control signal generation.

## Comparators: 
Comparators are circuits that compare two digital values and determine their relationship, such as equality or magnitude. They produce an output based on the comparison result, often indicating whether one value is greater than, less than, or equal to the other. Comparators are used in applications such as arithmetic operations, data sorting, and decision-making.

## Parity Generators/Checkers:
Parity generators generate a parity bit based on a set of data bits, ensuring data integrity during transmission or storage. Parity checkers validate the integrity of received data by comparing it with the generated parity bit. Parity bits can detect and sometimes correct single-bit errors in the data.

## Arithmetic Logic Units (ALUs):
ALUs are digital circuits that perform arithmetic and logical operations on binary data. They typically support operations like addition, subtraction, bitwise AND, OR, and XOR. ALUs are fundamental components of CPUs (Central Processing Units) and are responsible for executing arithmetic and logical instructions.
