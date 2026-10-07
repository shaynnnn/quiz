// ============================================================
// StudyQuiz - Quiz Data
// CAO3 + CAO4 + RAP3 + RAP4
// ============================================================

function multiple(question, options, answer) {
    return {
        type: "multiple",
        question,
        options,
        answer
    };
}

function fill(question, answer) {
    return {
        type: "fill",
        question,
        answer
    };
}

function matching(question, pairs) {
    return {
        type: "matching",
        question,
        pairs
    };
}


// ============================================================
// QUIZZES
// ============================================================

export const QUIZZES = [

    // ========================================================
    // CAO3
    // ========================================================

    {
        id: "cao3",
        topic: "CAO3",
        title: "CAO3",
        description: "Computer Architecture and Organization 3",

        questions: [

            multiple(
                "Specifies the operation to be performed. Also known as the OPCODE.",
                [
                    "Source Operand Reference",
                    "Operation Code",
                    "Result Operand Reference",
                    "Next Instruction Reference"
                ],
                "Operation Code"
            ),

            multiple(
                "Encompasses the input for the operation. An operation may involve one or more source operands.",
                [
                    "Operation Code",
                    "Source Operand Reference",
                    "Result Operand Reference",
                    "Next Instruction Reference"
                ],
                "Source Operand Reference"
            ),

            multiple(
                "This encompasses the results of the operation.",
                [
                    "Operation Code",
                    "Source Operand Reference",
                    "Result Operand Reference",
                    "Next Instruction Reference"
                ],
                "Result Operand Reference"
            ),

            multiple(
                "This indicates where the processor should fetch the next instruction.",
                [
                    "Operation Code",
                    "Source Operand Reference",
                    "Result Operand Reference",
                    "Next Instruction Reference"
                ],
                "Next Instruction Reference"
            ),

            multiple(
                "Are represented symbolically, making it possible to write a machine language program in symbolic form.",
                [
                    "Data Transfer",
                    "Operands",
                    "Programmers",
                    "Computers"
                ],
                "Operands"
            ),

            multiple(
                "It specifies the location of each symbolic operand.",
                [
                    "Data Transfer",
                    "Operands",
                    "Programmers",
                    "Computers"
                ],
                "Programmers"
            ),

            multiple(
                "Has a set of instructions that allows users to formulate any data processing task.",
                [
                    "Data Transfer",
                    "Operands",
                    "Programmers",
                    "Computers"
                ],
                "Computers"
            ),

            matching(
                "Match the following.",
                [
                    {
                        term: "The arithmetic and logic instructions",
                        description: "For data processing"
                    },
                    {
                        term: "The entry or exit of data into registers",
                        description: "For data storage"
                    },
                    {
                        term: "The input and output instructions",
                        description: "For data movement"
                    },
                    {
                        term: "The test and branch instructions",
                        description: "For control"
                    }
                ]
            ),

            multiple(
                "The collection of different instructions that a processor can execute.",
                [
                    "Instruction Set Architecture",
                    "Microarchitecture",
                    "System Architecture",
                    "Memory Architecture"
                ],
                "Instruction Set Architecture"
            ),

            multiple(
                "Which of the following is NOT required in a data transfer instruction?",
                [
                    "Type of arithmetic operation",
                    "Location of the source operand",
                    "Destination of the operand",
                    "Length of the data to be transferred",
                    "Addressing mode for each operand"
                ],
                "Type of arithmetic operation"
            ),

            matching(
                "Match the x86 instructions with their descriptions.",
                [
                    {
                        term: "MOV Dest, Source",
                        description: "Move data between registers or between registers and memory"
                    },
                    {
                        term: "XCHG Op1, Op2",
                        description: "Swap contents between two registers or between register and memory"
                    },
                    {
                        term: "PUSH Source",
                        description: "Decrement ESP and copy source operand to stack top"
                    },
                    {
                        term: "POP Dest",
                        description: "Copy stack top to destination and increment ESP"
                    }
                ]
            ),

            matching(
                "Match the mnemonics with their descriptions.",
                [
                    {
                        term: "L",
                        description: "Transfer from memory to register (32-bit)"
                    },
                    {
                        term: "LH",
                        description: "Transfer halfword from memory to register (16-bit)"
                    },
                    {
                        term: "LR",
                        description: "Transfer from register to register (32-bit)"
                    },
                    {
                        term: "LER",
                        description: "Transfer short from floating-point register to floating-point register (32-bit)"
                    },
                    {
                        term: "LD",
                        description: "Transfer long from memory to register (64-bit)"
                    },
                    {
                        term: "ST",
                        description: "Transfer from register to memory (32-bit)"
                    },
                    {
                        term: "STH",
                        description: "Transfer halfword from register to memory (16-bit)"
                    },
                    {
                        term: "STC",
                        description: "Transfer character from register to memory (8-bit)"
                    },
                    {
                        term: "STE",
                        description: "Transfer short from floating-point register to memory (32-bit)"
                    }
                ]
            ),

            multiple(
                "Data transfer operations are considered the _____ type of processor action.",
                [
                    "Most complex",
                    "Simplest",
                    "Intermediate",
                    "Conditional"
                ],
                "Simplest"
            ),

            multiple(
                "If both source and destination are registers, the processor simply:",
                [
                    "Transfers the data internally",
                    "Issues a command to the memory module",
                    "Translates virtual address to real address",
                    "Checks cache availability"
                ],
                "Transfers the data internally"
            ),

            multiple(
                "Which of the following is NOT required when one or both operands are in memory?",
                [
                    "Calculate memory address based on addressing mode",
                    "Translate virtual memory address into real address",
                    "Determine whether addressed item is in cache",
                    "Issue command to memory module if item not in cache",
                    "Transfer the data internally"
                ],
                "Transfer the data internally"
            ),

            multiple(
                "Conversion instructions are used to:",
                [
                    "Change or operate on the format of data",
                    "Store data in memory",
                    "Fetch next instruction",
                    "Perform arithmetic operations"
                ],
                "Change or operate on the format of data"
            ),

            multiple(
                "The IBMS ESA/390 Translate (TR) instruction can:",
                [
                    "Convert one 8-bit code to another",
                    "Move data between registers",
                    "Store data into cache",
                    "Branch to next instruction"
                ],
                "Convert one 8-bit code to another"
            ),

            multiple(
                "In the TR instruction, what does the operand R2 contain?",
                [
                    "Number of bytes to be translated",
                    "address of start of an 8-bit code",
                    "destination register for translation",
                    "opcode for arithmetic operations"
                ],
                "address of start of an 8-bit code"
            ),

            multiple(
                "In the TR instruction, what does L represent?",
                [
                    "opcode for translation",
                    "number of bytes that are translated",
                    "address of start of an 8-bit code",
                    "destination register"
                ],
                "number of bytes that are translated"
            ),

            multiple(
                "In the TR instruction, what does R1 specify?",
                [
                    "location where translated bytes are stored",
                    "source of 8-bit code",
                    "number of bytes",
                    "opcode for arithmetic"
                ],
                "location where translated bytes are stored"
            ),

            multiple(
                "Input/Output (I/O) instructions are used to:",
                [
                    "Transfer external data into memory and vice versa",
                    "arithmetic",
                    "translate virtual addresses",
                    "control cache"
                ],
                "Transfer external data into memory and vice versa"
            ),

            multiple(
                "The format of external data depends on:",
                [
                    "The I/O interface",
                    "processor opcode",
                    "ISA",
                    "cache size"
                ],
                "The I/O interface"
            ),

            multiple(
                "Which of the following is an example of external representation of I/O data?",
                [
                    "Signals on a video cable connected to a monitor",
                    "binary arithmetic in registers",
                    "cache lookup",
                    "opcode decoding"
                ],
                "Signals on a video cable connected to a monitor"
            ),

            multiple(
                "Voltage fluctuations on ethernet cable wires represent:",
                [
                    "External I/O data",
                    "internal register transfer",
                    "arithmetic operations",
                    "cache hits"
                ],
                "External I/O data"
            ),

            multiple(
                "Magnetic patterns on the surface of a disk are an example of:",
                [
                    "External I/O representation",
                    "instruction decoding",
                    "operand referencing",
                    "cache storage"
                ],
                "External I/O representation"
            ),

            multiple(
                "Sound waves produced by speakers are:",
                [
                    "External I/O data",
                    "arithmetic results",
                    "cache signals",
                    "operand references"
                ],
                "External I/O data"
            ),

            multiple(
                "In Programmed I/O, the processor:",
                [
                    "Executes a program that directly controls I/O operations",
                    "interrupted by I/O module",
                    "transfers data without involvement",
                    "uses cache"
                ],
                "Executes a program that directly controls I/O operations"
            ),

            multiple(
                "In Interrupt-Driven I/O, the processor:",
                [
                    "Issues an I/O command and continues executing other instructions",
                    "waits idly",
                    "transfers directly to memory",
                    "arithmetic"
                ],
                "Issues an I/O command and continues executing other instructions"
            ),

            multiple(
                "In Direct Memory Access (DMA), data is exchanged:",
                [
                    "Directly between I/O module and main memory",
                    "only through processor registers",
                    "programmed I/O",
                    "interrupt-driven control"
                ],
                "Directly between I/O module and main memory"
            ),

            multiple(
                "DMA is especially useful for:",
                [
                    "Transferring large blocks of data efficiently",
                    "arithmetic",
                    "fetching next instruction",
                    "operand referencing"
                ],
                "Transferring large blocks of data efficiently"
            ),

            matching(
                "Match the I/O instructions with their descriptions.",
                [
                    {
                        term: "IN Dest, Source",
                        description: "Copies data from I/O port specified by source operand to destination register"
                    },
                    {
                        term: "INS Dest, Source",
                        description: "copies from I/O port to destination memory location"
                    },
                    {
                        term: "OUT Dest, Source",
                        description: "copies byte/word/doubleword from source register to I/O port specified by destination operand"
                    },
                    {
                        term: "OUTS Dest, Source",
                        description: "copies byte/word/doubleword from source operand (memory location) to I/O port specified with destination operand"
                    }
                ]
            ),

            multiple(
                "System control instructions can only be executed when:",
                [
                    "processor is in privileged state",
                    "idle",
                    "cache full",
                    "PC reset"
                ],
                "processor is in privileged state"
            ),

            multiple(
                "Which of the following is an example of system control instructions?",
                [
                    "Reading or altering a control register",
                    "arithmetic addition",
                    "fetching next instruction",
                    "moving data between registers"
                ],
                "Reading or altering a control register"
            ),

            multiple(
                "Transfer of control instructions are used to:",
                [
                    "Change sequence of instruction execution",
                    "arithmetic",
                    "store memory",
                    "translate addresses"
                ],
                "Change sequence of instruction execution"
            ),

            multiple(
                "When executing transfer of control instructions, the processor updates:",
                [
                    "program counter",
                    "cache",
                    "control register",
                    "operand reference"
                ],
                "program counter"
            ),

            multiple(
                "Change sequence of instruction execution is the purpose of:",
                [
                    "Transfer of control instructions",
                    "Arithmetic instructions",
                    "Memory instructions",
                    "Conversion instructions"
                ],
                "Transfer of control instructions"
            ),

            multiple(
                "When executing transfer of control instructions, the processor updates:",
                [
                    "program counter",
                    "cache",
                    "control register",
                    "operand reference"
                ],
                "program counter"
            ),

            multiple(
                "One reason transfer of control instructions are required is:",
                [
                    "To execute each instruction more than once",
                    "reduce cache misses",
                    "simplify arithmetic",
                    "avoid privileged states"
                ],
                "To execute each instruction more than once"
            ),

            multiple(
                "Transfer of control instructions are essential because:",
                [
                    "Virtually all programs involve decision making",
                    "reduce memory usage",
                    "eliminate registers",
                    "bypass system control instructions"
                ],
                "Virtually all programs involve decision making"
            ),

            matching(
                "Match the transfer of control instructions with their descriptions.",
                [
                    {
                        term: "CALL Proc",
                        description: "Saves procedure linking info on stack and branches to called procedure"
                    },
                    {
                        term: "RET",
                        description: "Transfers control to return address on stack (to instruction after CALL)"
                    },
                    {
                        term: "JMP Dest",
                        description: "transfers control to different point without recording return info"
                    },
                    {
                        term: "Jcc Dest",
                        description: "checks status flags, if condition met performs JMP"
                    },
                    {
                        term: "NOP",
                        description: "takes up space but no operation"
                    },
                    {
                        term: "HLT",
                        description: "stops execution and halt state"
                    },
                    {
                        term: "WAIT",
                        description: "repeatedly checks/handles pending floating-point exceptions before proceeding"
                    },
                    {
                        term: "INT Nr",
                        description: "interrupts current program and runs specified interrupt program"
                    }
                ]
            ),

            multiple(
                "The Intel x86 instruction set is known for being:",
                [
                    "Simple and minimal",
                    "Complex with specialized instructions",
                    "limited arithmetic",
                    "only memory storage"
                ],
                "Complex with specialized instructions"
            ),

            multiple(
                "Procedural instructions in Intel x86 include:",
                [
                    "CALL, ENTER, LEAVE, RETURN",
                    "MOV/PUSH/POP/XCHG",
                    "JMP/Jcc/NOP/HLT",
                    "ADD/SUB/MUL/DIV"
                ],
                "CALL, ENTER, LEAVE, RETURN"
            ),

            multiple(
                "Memory management instructions are executed only by:",
                [
                    "operating system",
                    "user program",
                    "cache controller",
                    "arithmetic unit"
                ],
                "operating system"
            ),

            multiple(
                "Status flags are bits in a special register that:",
                [
                    "can be set by certain operations and used in conditional branch instructions",
                    "store memory addresses",
                    "hold operands",
                    "control cache size"
                ],
                "can be set by certain operations and used in conditional branch instructions"
            ),

            multiple(
                "The compare operation in Intel x86:",
                [
                    "subtracts two operands and sets status flags",
                    "adds and stores",
                    "moves data",
                    "loads memory"
                ],
                "subtracts two operands and sets status flags"
            ),

            multiple(
                "Condition codes in Intel x86 refer to:",
                [
                    "setting of one or more status flags",
                    "storage memory addresses",
                    "execution arithmetic",
                    "loading operands"
                ],
                "setting of one or more status flags"
            ),

            matching(
                "Match the condition codes with their descriptions.",
                [
                    {
                        term: "A, NBE",
                        description: "C = 0 AND Z = 0 (Above; Not below or equal, unsigned greater than)"
                    },
                    {
                        term: "B, NAE, C",
                        description: "C = 1 (Below; Not above or equal, unsigned less than; Carry set)"
                    },
                    {
                        term: "NP, PO",
                        description: "P = 0 (No parity; Parity odd)"
                    },
                    {
                        term: "S",
                        description: "S = 1 (Sign flag set; negative)"
                    }
                ]
            ),

            multiple(
                "In ARM, only which instructions can access memory locations?",
                [
                    "Load and store instructions",
                    "arithmetic",
                    "logical",
                    "branch"
                ],
                "Load and store instructions"
            ),

            multiple(
                "Arithmetic and logical instructions in ARM operate on:",
                [
                    "Registers and immediate values",
                    "memory directly",
                    "cache blocks",
                    "control registers"
                ],
                "Registers and immediate values"
            ),

            multiple(
                "Branch instructions in ARM support conditional branching:",
                [
                    "Forward or backward up to 32MB",
                    "only forward 16MB",
                    "only backward 64MB",
                    "unlimited"
                ],
                "Forward or backward up to 32MB"
            ),

            multiple(
                "Subroutine calls in ARM are performed by:",
                [
                    "A variant of the standard branch instruction",
                    "RET",
                    "CALL",
                    "JMP"
                ],
                "A variant of the standard branch instruction"
            ),

            multiple(
                "Data processing instructions in ARM include:",
                [
                    "Logical (AND, OR, XOR), add/subtract, test, compare",
                    "load/store only",
                    "branch only",
                    "interrupt handling"
                ],
                "Logical (AND, OR, XOR), add/subtract, test, compare"
            ),

            multiple(
                "Multiply instructions in ARM operate on:",
                [
                    "Word or halfword operands",
                    "byte only",
                    "cache",
                    "control regs"
                ],
                "Word or halfword operands"
            ),

            multiple(
                "Parallel addition and subtraction instructions are useful in:",
                [
                    "Image processing applications",
                    "arithmetic in registers",
                    "memory segmentation",
                    "interrupt handling"
                ],
                "Image processing applications"
            ),

            multiple(
                "Extended instructions in ARM are used for:",
                [
                    "Unpacking data by sign/zero and extending bytes/halfwords",
                    "branch",
                    "cache",
                    "privilege"
                ],
                "Unpacking data by sign/zero and extending bytes/halfwords"
            ),

            multiple(
                "The ARM instruction set relies on register addressing because:",
                [
                    "It is based on a reduced instruction set computer (RISC) design",
                    "eliminates registers",
                    "memory segmentation",
                    "privileged only"
                ],
                "It is based on a reduced instruction set computer (RISC) design"
            ),

            multiple(
                "In ARM data processing instructions, the S bit signifies:",
                [
                    "Whether instruction updates condition flags",
                    "accesses memory",
                    "performs multiplication",
                    "branches forward"
                ],
                "Whether instruction updates condition flags"
            )
        ]
    },


    // ========================================================
    // CAO4
    // ========================================================

    {
        id: "cao4",
        topic: "CAO4",
        title: "CAO4",
        description: "Computer Architecture and Organization 4",

        questions: [

            multiple(
                "Machines generally provide the basic arithmetic operations such as:",
                [
                    "Add, subtract, multiply, divide",
                    "Load, store, branch, halt",
                    "Push, pop, move, exchange",
                    "Compare, test, jump, call"
                ],
                "Add, subtract, multiply, divide"
            ),

            multiple(
                "These basic arithmetic operations are usually performed on:",
                [
                    "Signed integer (fixed-point) numbers",
                    "Floating-point only",
                    "Cache blocks",
                    "Control registers"
                ],
                "Signed integer (fixed-point) numbers"
            ),

            multiple(
                "This takes the absolute value of the oprand.",
                [
                    "Absolute",
                    "Negate",
                    "Increment",
                    "Decrement"
                ],
                "Absolute"
            ),

            multiple(
                "This negates the operand.",
                [
                    "Absolute",
                    "Negate",
                    "Increment",
                    "Decrement"
                ],
                "Negate"
            ),

            multiple(
                "This substracts 1 from the operand.",
                [
                    "Absolute",
                    "Negate",
                    "Increment",
                    "Decrement"
                ],
                "Decrement"
            ),

            multiple(
                "This adds 1 to the operand.",
                [
                    "Absolute",
                    "Negate",
                    "Increment",
                    "Decrement"
                ],
                "Increment"
            ),

            matching(
                "Match the instruction with its description.",
                [
                    {
                        term: "ADD Dest, Source",
                        description: "Adds destination and source, stores result in destination"
                    },
                    {
                        term: "SUB Dest, Source",
                        description: "subtracts source from destination, stores result"
                    },
                    {
                        term: "MUL Op",
                        description: "unsigned integer multiplication with AL/AX/EAX"
                    },
                    {
                        term: "IMUL Op",
                        description: "signed integer multiplication"
                    },
                    {
                        term: "DIV Op",
                        description: "divides unsigned values in AX, DX:AX, EDX:EAX, or RDX:RAX by source operand"
                    },
                    {
                        term: "IDIV Op",
                        description: "signed integer division"
                    },
                    {
                        term: "INC Op",
                        description: "adds 1, preserves CF"
                    },
                    {
                        term: "DEC Op",
                        description: "subtracts 1, preserves CF"
                    },
                    {
                        term: "NEG Op",
                        description: "replaces operand with (0 – operand) using two’s complement"
                    },
                    {
                        term: "CMP Op1, Op2",
                        description: "compares by subtracting Op2 from Op1, sets flags"
                    }
                ]
            ),

            multiple(
                "Determines if the destination operand is greater than, equal to, or less than the source operand.",
                [
                    "CMP",
                    "cache",
                    "privileged",
                    "divisible by 2"
                ],
                "CMP"
            ),

            multiple(
                "CMP updates flags: ",
                [
                    "C, P, A, Z, S, O",
                    "only Z/S",
                    "CF/PF",
                    "none"
                ],
                "C, P, A, Z, S, O"
            ),

            multiple(
                "CMP alters ________ operands",
                [
                    "neither",
                    "either",
                    "maybe",
                    "both"
                ],
                "neither"
            ),

            multiple(
                "CMP may be followed by: ",
                [
                    "conditional jump or set condition",
                    "load/store",
                    "halt",
                    "push/pop"
                ],
                "conditional jump or set condition"
            ),

            multiple(
                "CMP does not use decimal mode if what?",
                [
                    "D flag is set",
                    "Z/S/O",
                    "C flag is set",
                    "P flag is set"
                ],
                "D flag is set"
            ),

            multiple(
                "CMP does not affect what?",
                [
                    "V flag",
                    "Z/S/C",
                    "P flag",
                    "A flag"
                ],
                "V flag"
            ),

            multiple(
                "CMP supports what?",
                [
                    "all addressing modes",
                    "only register/immediate/memory",
                    "only register",
                    "only memory"
                ],
                "all addressing modes"
            ),

            multiple(
                "CMP compares by sdoing what?",
                [
                    "subtracting source from destination",
                    "adding",
                    "multiplying",
                    "dividing"
                ],
                "subtracting source from destination"
            ),

            multiple(
                "Logic and shift instructions, including rotate instructions, are commonly called?",
                [
                    "bit manipulation instructions",
                    "arithmetic/control/memory mgmt",
                    "arithmetic instructions",
                    "memory instructions"
                ],
                "bit manipulation instructions"
            ),

            multiple(
                "Logic instructions operate _____________",
                [
                    "bit-by-bit",
                    "cache blocks",
                    "only registers",
                    "only addresses"
                ],
                "bit-by-bit"
            ),

            multiple(
                "Main usage logical instructions:",
                [
                    "set, clear, complement/invert, isolate operands",
                    "multiply",
                    "cache",
                    "flow"
                ],
                "set, clear, complement/invert, isolate operands"
            ),

            multiple(
                "Some processors use entire content of ____________________",
                [
                    "operand as a whole flag",
                    "cache block",
                    "address",
                    "opcode"
                ],
                "operand as a whole flag"
            ),

            multiple(
                "All logic instructions affect flag bits except: ",
                [
                    "NOT",
                    "AND/OR/XOR",
                    "TEST",
                    "SHIFT"
                ],
                "NOT"
            ),

            matching(
                "Match the logic instructions with their descriptions.",
                [
                    {
                        term: "NOT Op",
                        description: "inverts each bit"
                    },
                    {
                        term: "AND Dest, Source",
                        description: "bitwise AND store destination"
                    },
                    {
                        term: "OR",
                        description: "bitwise OR"
                    },
                    {
                        term: "XOR",
                        description: "bitwise XOR"
                    },
                    {
                        term: "TEST",
                        description: "bitwise AND sets S,Z,P flags, operands unchanged"
                    }
                ]
            ),

            multiple(
                "In this operation, the bits of a word are shifted left or right, wherein on one end, the bit shifted out is lost, and on the other end, a zero (0) is shifted in. Useful in isolating fields within a word",
                [
                    "Logical Shift",
                    "Arithmetic Shift",
                    "Cycling Shift",
                    "Negate"
                ],
                "Logical Shift"
            ),

            multiple(
                "This operation treats data as a signed integer and does not shift the sign bit. On a right arithmetic shift, the sign bit is replicated into the bit position to its right. On a left arithmetic shift, a logical left shift is performed on all bits except for the sign bit, which is retained as is. This generally helps in speeding up certain operations",
                [
                    "Logical Shift",
                    "Arithmetic Shift",
                    "Cycling Shift",
                    "Increment"
                ],
                "Arithmetic Shift"
            ),

            multiple(
                "This operation preserves all of the bits being operated on. One use of this operation is to bring each bit successively into the leftmost bit, where it can be identified by testing the sign of the data, treated as a number.",
                [
                    "Logical Shift",
                    "Arithmetic Shift",
                    "Cycling Shift",
                    "Decrement"
                ],
                "Cycling Shift"
            ),

            matching(
                "Match the shift and rotate instructions with their descriptions.",
                [
                    {
                        term: "SAL Op, Qty",
                        description: "shifts source operand left 1–31 positions, empty bits cleared, CF loaded with last bit shifted out"
                    },
                    {
                        term: "SAR",
                        description: "shifts right 1–31, empty bits cleared if positive and set if negative, CF last bit"
                    },
                    {
                        term: "SHR",
                        description: "shifts right 1–31, empty bits cleared"
                    },
                    {
                        term: "ROL",
                        description: "rotate left wraparound, CF last shifted bit"
                    },
                    {
                        term: "ROR",
                        description: "rotate right wraparound"
                    },
                    {
                        term: "RCL",
                        description: "rotate left including CF, CF as 1-bit extension upper end"
                    },
                    {
                        term: "RCR",
                        description: "rotate right including CF, CF as 1-bit extension lower end"
                    }
                ]
            ),

            multiple(
                "Input 10100110 → 00010100:",
                [
                    "Logical right shift (3 bits)",
                    "Logical left shift (3 bits)",
                    "Arithmetic right shift (3 bits)",
                    "Arithmetic left shift (3 bits)"
                ],
                "Logical right shift (3 bits)"
            ),

            multiple(
                "Input 10100110 → 00110000:",
                [
                    "Logical left shift (3 bits)",
                    "Logical right shift (3 bits)",
                    "Arithmetic right shift (3 bits)",
                    "Arithmetic left shift (3 bits)"
                ],
                "Logical left shift (3 bits)"
            ),

            multiple(
                "Input 10100110 → 11110100:",
                [
                    "Arithmetic right shift (3 bits)",
                    "Logical right shift (3 bits)",
                    "Logical left shift (3 bits)",
                    "Arithmetic left shift (3 bits)"
                ],
                "Arithmetic right shift (3 bits)"
            ),

            multiple(
                "Input 10100110 → 10110000:",
                [
                    "Arithmetic left shift (3 bits)",
                    "Logical right shift (3 bits)",
                    "Logical left shift (3 bits)",
                    "Arithmetic right shift (3 bits)"
                ],
                "Arithmetic left shift (3 bits)"
            ),

            multiple(
                "Input 10100110 → 11010100:",
                [
                    "Right rotate (3 bits)",
                    "Left rotate (3 bits)",
                    "Logical right shift (3 bits)",
                    "Arithmetic right shift (3 bits)"
                ],
                "Right rotate (3 bits)"
            ),

            multiple(
                "Input 10100110 → 00110101:",
                [
                    "Left rotate (3 bits)",
                    "Right rotate (3 bits)",
                    "Logical left shift (3 bits)",
                    "Arithmetic left shift (3 bits)"
                ],
                "Left rotate (3 bits)"
            )
        ]
    },


    // ========================================================
    // RAP3
    // ========================================================

    {
        id: "rap3",
        title: "RAP3",
        description: "Robotics and Autonomous Systems 3",

        questions: [

            multiple(
                "What is automation?",
                [
                    "Technology that performs tasks or processes that were previously manual",
                    "A method of manually controlling every movement",
                    "A type of computer memory",
                    "A method of storing programs"
                ],
                "Technology that performs tasks or processes that were previously manual"
            ),

            multiple(
                "What does autonomy mean in an autonomous system?",
                [
                    "The machine or system can perform tasks or make decisions without human intervention",
                    "The human must control every action",
                    "The machine cannot use sensors",
                    "The machine can only store data"
                ],
                "The machine or system can perform tasks or make decisions without human intervention"
            ),

            multiple(
                "Autonomous systems commonly use sensors, AI, and what else?",
                [
                    "Decision algorithms",
                    "Printers",
                    "Monitors only",
                    "Keyboards only"
                ],
                "Decision algorithms"
            ),

            multiple(
                "A plan cannot be executed unless what happens first?",
                [
                    "The plan is generated",
                    "The robot is turned off",
                    "The sensor is removed",
                    "The memory is erased"
                ],
                "The plan is generated"
            ),

            multiple(
                "What can a human use to construct a robot plan?",
                [
                    "A teach pendant",
                    "A printer",
                    "A speaker",
                    "A monitor cable"
                ],
                "A teach pendant"
            ),

            multiple(
                "What does a deterministic finite-state system produce for a state and input?",
                [
                    "One output",
                    "Several random outputs",
                    "No output",
                    "Only an error"
                ],
                "One output"
            ),

            multiple(
                "What can a non-deterministic system have?",
                [
                    "Multiple possible outputs depending on factors or events",
                    "Only one possible output",
                    "No possible output",
                    "Only manual outputs"
                ],
                "Multiple possible outputs depending on factors or events"
            ),

            multiple(
                "What is a world model?",
                [
                    "A computational representation of the environment",
                    "A physical robot body",
                    "A motor controller",
                    "A battery"
                ],
                "A computational representation of the environment"
            ),

            multiple(
                "What is a closed-world assumption?",
                [
                    "The environment is fully observable or known",
                    "The environment is completely unknown",
                    "The robot cannot use information",
                    "The robot has no sensors"
                ],
                "The environment is fully observable or known"
            ),

            multiple(
                "What is an open-world assumption?",
                [
                    "Information may not yet be available or known",
                    "Everything is completely known",
                    "No new information can exist",
                    "Only one sensor is allowed"
                ],
                "Information may not yet be available or known"
            ),

            multiple(
                "What are symbols?",
                [
                    "Abstract representations that have meaning",
                    "Physical motors",
                    "Battery cells",
                    "Wheels"
                ],
                "Abstract representations that have meaning"
            ),

            multiple(
                "What are signals?",
                [
                    "Physical phenomena that convey information",
                    "Only software programs",
                    "Only robot wheels",
                    "Only memory locations"
                ],
                "Physical phenomena that convey information"
            ),

            multiple(
                "What is the substitution myth?",
                [
                    "The belief that a machine can perfectly replace a human",
                    "The belief that robots need batteries",
                    "The belief that sensors detect signals",
                    "The belief that programs use memory"
                ],
                "The belief that a machine can perfectly replace a human"
            ),

            multiple(
                "What does human out-of-the-loop mean?",
                [
                    "A human may be expected to intervene but may not react or understand quickly enough",
                    "A human controls every motor directly",
                    "A human has no responsibility for a system",
                    "A human builds every sensor"
                ],
                "A human may be expected to intervene but may not react or understand quickly enough"
            ),

            multiple(
                "Which stage involves sensing the environment?",
                [
                    "SENSE",
                    "PLAN",
                    "ACT",
                    "LEARN"
                ],
                "SENSE"
            ),

            multiple(
                "Which stage involves deciding what should be done?",
                [
                    "SENSE",
                    "PLAN",
                    "ACT",
                    "LEARN"
                ],
                "PLAN"
            ),

            multiple(
                "Which stage involves carrying out an action?",
                [
                    "SENSE",
                    "PLAN",
                    "ACT",
                    "LEARN"
                ],
                "ACT"
            ),

            multiple(
                "Which stage involves acquiring or improving behavior from experience?",
                [
                    "SENSE",
                    "PLAN",
                    "ACT",
                    "LEARN"
                ],
                "LEARN"
            ),

            multiple(
                "What is perceptual ability?",
                [
                    "The ability to directly perceive or recognize information",
                    "The ability to manufacture motors",
                    "The ability to store batteries",
                    "The ability to print reports"
                ],
                "The ability to directly perceive or recognize information"
            ),

            multiple(
                "Which planning horizon focuses on the present?",
                [
                    "Present",
                    "Past and present",
                    "Future only",
                    "Past only"
                ],
                "Present"
            ),

            multiple(
                "Why does the planning horizon matter?",
                [
                    "It constrains the data structures and algorithms used",
                    "It determines the battery voltage",
                    "It changes the robot color",
                    "It removes the sensors"
                ],
                "It constrains the data structures and algorithms used"
            ),

            multiple(
                "Which type of response is very fast?",
                [
                    "Reflex",
                    "Reasoning",
                    "Long-term planning",
                    "Deliberation"
                ],
                "Reflex"
            ),

            multiple(
                "Which function selects actions relatively quickly?",
                [
                    "Action selection",
                    "Long-term storage",
                    "File printing",
                    "Network setup"
                ],
                "Action selection"
            ),

            multiple(
                "Which function is relatively slow compared with reflexes?",
                [
                    "Reasoning",
                    "Reflex",
                    "Immediate sensing",
                    "Simple reaction"
                ],
                "Reasoning"
            ),

            multiple(
                "What is reactive functionality?",
                [
                    "A reactive loop that responds to situations using behavior and motor responses",
                    "A file storage system",
                    "A programming language",
                    "A display device"
                ],
                "A reactive loop that responds to situations using behavior and motor responses"
            ),

            multiple(
                "In reactive functionality, SENSE and ACT are what?",
                [
                    "Tightly coupled into behaviors",
                    "Completely separated",
                    "Not used",
                    "Only used for learning"
                ],
                "Tightly coupled into behaviors"
            ),

            multiple(
                "What is deliberative functionality associated with?",
                [
                    "A cognitive loop or cortex",
                    "Only a motor",
                    "Only a battery",
                    "Only a wheel"
                ],
                "A cognitive loop or cortex"
            ),

            multiple(
                "Which deliberative function generates plans?",
                [
                    "GENERATING",
                    "SELECTING",
                    "IMPLEMENTING",
                    "MONITORING"
                ],
                "GENERATING"
            ),

            multiple(
                "Which deliberative function selects resources?",
                [
                    "GENERATING",
                    "SELECTING",
                    "IMPLEMENTING",
                    "MONITORING"
                ],
                "SELECTING"
            ),

            multiple(
                "Which deliberative function executes a plan?",
                [
                    "GENERATING",
                    "SELECTING",
                    "IMPLEMENTING",
                    "MONITORING"
                ],
                "IMPLEMENTING"
            ),

            multiple(
                "Which deliberative function checks execution against the goal?",
                [
                    "GENERATING",
                    "SELECTING",
                    "IMPLEMENTING",
                    "MONITORING"
                ],
                "MONITORING"
            ),

            multiple(
                "What is interactive functionality concerned with?",
                [
                    "People, robots, and software agents interacting",
                    "Only robot motors",
                    "Only memory",
                    "Only batteries"
                ],
                "People, robots, and software agents interacting"
            ),

            multiple(
                "What does a system with no autonomy generally depend on?",
                [
                    "Rigid programming",
                    "Self-created goals",
                    "Independent decision making",
                    "Autonomous planning"
                ],
                "Rigid programming"
            ),

            multiple(
                "What is process autonomy?",
                [
                    "The ability to choose an algorithm or process",
                    "The ability to change wheels",
                    "The ability to change batteries",
                    "The ability to change the display"
                ],
                "The ability to choose an algorithm or process"
            ),

            multiple(
                "What is systems-state autonomy?",
                [
                    "The ability to generate or select options",
                    "The ability to remove sensors",
                    "The ability to stop all processes",
                    "The ability to erase memory"
                ],
                "The ability to generate or select options"
            ),

            multiple(
                "What is intentional autonomy?",
                [
                    "The ability to change goals according to role or team intent",
                    "The ability to change a battery",
                    "The ability to change a display",
                    "The ability to change a wheel"
                ],
                "The ability to change goals according to role or team intent"
            ),

            multiple(
                "What is constraint autonomy?",
                [
                    "The ability to create its own roles or goals",
                    "The ability to remove all constraints",
                    "The ability to turn off sensors",
                    "The ability to store files"
                ],
                "The ability to create its own roles or goals"
            ),

            multiple(
                "What is the purpose of a telesystem?",
                [
                    "To allow separated humans and robots to interact for a task",
                    "To eliminate communication",
                    "To remove sensors",
                    "To prevent human interaction"
                ],
                "To allow separated humans and robots to interact for a task"
            ),

            multiple(
                "What is a taskable agent?",
                [
                    "A robot that receives a complex task and executes it without continuous supervision",
                    "A robot that cannot act",
                    "A robot controlled only by buttons",
                    "A robot without sensors"
                ],
                "A robot that receives a complex task and executes it without continuous supervision"
            ),

            multiple(
                "What is remote presence?",
                [
                    "A human and robot share task execution in a blended way",
                    "A robot operates with no human interaction",
                    "A human operates with no robot",
                    "A robot has no communication"
                ],
                "A human and robot share task execution in a blended way"
            ),

            matching(
                "Match the automation and autonomy concepts.",
                [
                    {
                        term: "Automation",
                        description: "Technology performing previously manual tasks"
                    },
                    {
                        term: "Autonomy",
                        description: "Ability to act or decide without human intervention"
                    },
                    {
                        term: "Closed-world",
                        description: "Environment is fully observable or known"
                    },
                    {
                        term: "Open-world",
                        description: "Information may still be unknown"
                    }
                ]
            ),

            matching(
                "Match the basic autonomous-system stages.",
                [
                    {
                        term: "SENSE",
                        description: "Perceive information from the environment"
                    },
                    {
                        term: "PLAN",
                        description: "Decide what should be done"
                    },
                    {
                        term: "ACT",
                        description: "Carry out an action"
                    },
                    {
                        term: "LEARN",
                        description: "Acquire or improve behavior"
                    }
                ]
            ),

            matching(
                "Match the autonomy levels.",
                [
                    {
                        term: "Process autonomy",
                        description: "Choose an algorithm or process"
                    },
                    {
                        term: "Systems-state autonomy",
                        description: "Generate or select options"
                    },
                    {
                        term: "Intentional autonomy",
                        description: "Change goals according to role or team intent"
                    },
                    {
                        term: "Constraint autonomy",
                        description: "Create roles or goals"
                    }
                ]
            ),

            multiple(
                "Which local telesystem component presents data to the operator?",
                [
                    "Display",
                    "Sensor",
                    "Effector",
                    "Mobility"
                ],
                "Display"
            ),

            multiple(
                "Which local telesystem component is used to operate or control?",
                [
                    "Control mechanism",
                    "Sensor",
                    "Effector",
                    "Display"
                ],
                "Control mechanism"
            ),

            multiple(
                "Which remote component detects information?",
                [
                    "Sensor",
                    "Display",
                    "Control mechanism",
                    "Operator"
                ],
                "Sensor"
            ),

            multiple(
                "Which remote component performs an action?",
                [
                    "Effector",
                    "Display",
                    "Sensor",
                    "Operator"
                ],
                "Effector"
            ),

            multiple(
                "What does mobility refer to?",
                [
                    "The ability to move or travel",
                    "The ability to display information",
                    "The ability to store data",
                    "The ability to create symbols"
                ],
                "The ability to move or travel"
            ),

            matching(
                "Match the supervisory-control concepts.",
                [
                    {
                        term: "Remote Control",
                        description: "Operator sees the robot and provides direct control"
                    },
                    {
                        term: "Manual Control",
                        description: "Operator controls a remote robot with little intelligence"
                    },
                    {
                        term: "Semi-Autonomy",
                        description: "Robot has intelligence but may not fully substitute for a human"
                    },
                    {
                        term: "Social Interactions",
                        description: "Human can see and interact with the robot without directly controlling it"
                    }
                ]
            )
        ]
    },


    // ========================================================
    // RAP4
    // ========================================================

    {
        id: "rap4",
        title: "RAP4",
        description: "Robotics: Reactive Functionality, Schemas, Perception, and Locomotion",

        questions: [

            {
                type: "multiple",
                question: "Reactive functionality in robotics refers to:",
                options: [
                    "A robot’s ability to react to changes in its environment in real time using sensors",
                    "A robot’s reliance only on pre-programmed instructions",
                    "A robot’s ability to reason about future problems",
                    "A robot’s capacity for social interaction with humans"
                ],
                answer: "A robot’s ability to react to changes in its environment in real time using sensors"
            },

            {
                type: "multiple",
                question: "A behavior is defined as:",
                options: [
                    "A mapping of sensory inputs to a pattern of motor actions used to achieve a task",
                    "A fixed sequence of programmed instructions",
                    "A robot’s ability to reason about future problems",
                    "A human operator’s direct control of actuators"
                ],
                answer: "A mapping of sensory inputs to a pattern of motor actions used to achieve a task"
            },

            {
                type: "multiple",
                question: "Which type of behavior responds automatically to a specific stimulus without internal processing?",
                options: [
                    "Reflexive Behavior",
                    "Reactive Behavior",
                    "Conscious Behavior",
                    "Semi-Autonomy"
                ],
                answer: "Reflexive Behavior"
            },

            {
                type: "multiple",
                question: "In reflexive behavior, which response lasts only as long as the stimulus and is proportional to its intensity?",
                options: [
                    "Reflexes",
                    "Taxes",
                    "Fixed-action patterns",
                    "Conscious reasoning"
                ],
                answer: "Reflexes"
            },

            {
                type: "multiple",
                question: "Which reflexive response involves moving to a particular orientation?",
                options: [
                    "Reflexes",
                    "Taxes",
                    "Fixed-action patterns",
                    "Monitoring"
                ],
                answer: "Taxes"
            },

            {
                type: "multiple",
                question: "Which reflexive response continues for a longer duration than the stimulus itself?",
                options: [
                    "Reflexes",
                    "Taxes",
                    "Fixed-action patterns",
                    "Generating"
                ],
                answer: "Fixed-action patterns"
            },

            {
                type: "multiple",
                question: "Which type of behavior responds directly to the environment using feedback mechanisms and pre-programmed behaviors?",
                options: [
                    "Reflexive Behavior",
                    "Reactive Behavior",
                    "Conscious Behavior",
                    "Supervisory Control"
                ],
                answer: "Reactive Behavior"
            },

            {
                type: "multiple",
                question: "Which type of behavior involves an internal representation of the environment and reasoning about actions?",
                options: [
                    "Reflexive Behavior",
                    "Reactive Behavior",
                    "Conscious Behavior",
                    "Remote Control"
                ],
                answer: "Conscious Behavior"
            },

            {
                type: "matching",
                question: "Match the following, Column A (Definitions) → Column B (Terms):",
                pairs: [
                    {
                        term: "Focuses on what the system does and why it does it, identifying the goal or function of the system and the problem it aims to solve",
                        description: "Computational Level (L1)"
                    },
                    {
                        term: "Focuses on how the system solves the computational problem, involving step-by-step algorithms or procedures",
                        description: "Algorithmic Level (L2)"
                    },
                    {
                        term: "Focuses on the physical implementation of the algorithm in hardware, explaining how neurons, circuits, or other components perform the computations",
                        description: "Implementational Level (L3)"
                    }
                ]
            },

            {
                type: "multiple",
                question: "What is a schema in robotics and cognitive science?",
                options: [
                    "Knowledge organized into small, reusable units that can be combined to create complex behaviors",
                    "A fixed sequence of programmed instructions",
                    "A direct reflex response to stimuli",
                    "A supervisory control loop"
                ],
                answer: "Knowledge organized into small, reusable units that can be combined to create complex behaviors"
            },

            {
                type: "multiple",
                question: "Which part of a schema contains knowledge of how to act and/or perceive, including data structures and models?",
                options: [
                    "Knowledge component",
                    "Computational process component",
                    "Motor schema",
                    "Perceptual schema"
                ],
                answer: "Knowledge component"
            },

            {
                type: "multiple",
                question: "Which part of a schema refers to the algorithm or procedure used to accomplish the activity?",
                options: [
                    "Knowledge component",
                    "Computational process component",
                    "Motor schema",
                    "Reflexes"
                ],
                answer: "Computational process component"
            },

            {
                type: "multiple",
                question: "Which schema represents the template for physical activity, such as feed or flee behavior?",
                options: [
                    "Motor schema",
                    "Perceptual schema",
                    "Algorithmic schema",
                    "Supervisory schema"
                ],
                answer: "Motor schema"
            },

            {
                type: "multiple",
                question: "Which schema embodies the stimulus and any fixed-action delays?",
                options: [
                    "Perceptual schema",
                    "Motor schema",
                    "Computational schema",
                    "Conscious behavior"
                ],
                answer: "Perceptual schema"
            },

            {
                type: "multiple",
                question: "What does the action-perception cycle refer to?",
                options: [
                    "The continuous process of perceiving and acting on the environment",
                    "A fixed sequence of programmed robot actions",
                    "A one-time reaction to sensory input",
                    "A purely cognitive reasoning process"
                ],
                answer: "The continuous process of perceiving and acting on the environment"
            },

            {
                type: "multiple",
                question: "Who introduced the “ecological approach” to perception?",
                options: [
                    "J.J. Gibson",
                    "Alan Turing",
                    "Isaac Asimov",
                    "Norbert Wiener"
                ],
                answer: "J.J. Gibson"
            },

            {
                type: "multiple",
                question: "What are affordances in the context of perception?",
                options: [
                    "Perceivable potentialities of the environment for an action",
                    "Pre-programmed reflexes",
                    "Stored memory patterns",
                    "Motor commands"
                ],
                answer: "Perceivable potentialities of the environment for an action"
            },

            {
                type: "multiple",
                question: "Which perception system uses low brain structures and accounts for affordances?",
                options: [
                    "Direct Perception",
                    "Recognition",
                    "Reflexive Perception",
                    "Conscious Perception"
                ],
                answer: "Direct Perception"
            },

            {
                type: "multiple",
                question: "Which perception system uses internal models to distinguish objects like “your coffee cup” from “my coffee cup”?",
                options: [
                    "Recognition",
                    "Direct Perception",
                    "Reflexive Behavior",
                    "Conscious Behavior"
                ],
                answer: "Recognition"
            },

            {
                type: "multiple",
                question: "What is the most basic biological model of how behaviors convert perception into action?",
                options: [
                    "Innate Releasing Mechanism (IRM)",
                    "Supervisory Control",
                    "Schema Theory",
                    "Motor Reflex"
                ],
                answer: "Innate Releasing Mechanism (IRM)"
            },

            {
                type: "multiple",
                question: "Which category of concurrent behaviors describes when behaviors balance each other out?",
                options: [
                    "Equilibrium",
                    "Dominance of one",
                    "Cancellation",
                    "Reflexive"
                ],
                answer: "Equilibrium"
            },

            {
                type: "multiple",
                question: "Which function of perception involves detecting relevant stimuli in the environment?",
                options: [
                    "Stimulus Detection",
                    "Stimulus Classification",
                    "Recognition",
                    "Affordance Mapping"
                ],
                answer: "Stimulus Detection"
            },

            {
                type: "multiple",
                question: "Which function of perception involves classifying detected stimuli based on their significance for behavior?",
                options: [
                    "Stimulus Classification",
                    "Stimulus Detection",
                    "Direct Perception",
                    "Conscious Reasoning"
                ],
                answer: "Stimulus Classification"
            },

            {
                type: "multiple",
                question: "What is steering in robot locomotion?",
                options: [
                    "The process by which a robot adjusts its motion to achieve a desired trajectory or direction",
                    "The ability of a robot to rotate in place",
                    "The vibration of limbs to move forward",
                    "The use of sensors to detect obstacles"
                ],
                answer: "The process by which a robot adjusts its motion to achieve a desired trajectory or direction"
            },

            {
                type: "multiple",
                question: "Which type of locomotion allows a robot to move in any direction without changing its orientation?",
                options: [
                    "Holonomic locomotion",
                    "Nonholonomic locomotion",
                    "Biomimetic locomotion",
                    "Differential locomotion"
                ],
                answer: "Holonomic locomotion"
            },

            {
                type: "multiple",
                question: "In holonomic locomotion, which mechanism uses linked wheels that turn together, approximating turning in place?",
                options: [
                    "Synchro-drive",
                    "Ackerman steering",
                    "Skid steering",
                    "Mecanum wheels"
                ],
                answer: "Synchro-drive"
            },

            {
                type: "multiple",
                question: "Which type of wheel allows a robot to move sideways by adjusting the relative speeds of forward and lateral wheels?",
                options: [
                    "Omnidirectional (Mecanum) wheels",
                    "Synchro-drive wheels",
                    "Ackerman wheels",
                    "Differential wheels"
                ],
                answer: "Omnidirectional (Mecanum) wheels"
            },

            {
                type: "multiple",
                question: "Which type of locomotion requires changes in orientation to change direction?",
                options: [
                    "Nonholonomic locomotion",
                    "Holonomic locomotion",
                    "Biomimetic locomotion",
                    "Reflexive locomotion"
                ],
                answer: "Nonholonomic locomotion"
            },

            {
                type: "multiple",
                question: "Which steering method is used in cars, where the inside wheel turns more than the outside wheel during a turn?",
                options: [
                    "Ackerman steering",
                    "Skid steering",
                    "Synchro-drive",
                    "Omnidirectional steering"
                ],
                answer: "Ackerman steering"
            },

            {
                type: "multiple",
                question: "Which steering method is used in tanks or bulldozers, where tracks on each side are controlled independently?",
                options: [
                    "Skid steering (Differential steering)",
                    "Ackerman steering",
                    "Synchro-drive",
                    "Omnidirectional steering"
                ],
                answer: "Skid steering (Differential steering)"
            },

            {
                type: "multiple",
                question: "What is the central concept in biomimetic locomotion?",
                options: [
                    "Periodic or repetitive motion",
                    "Continuous rotation of wheels",
                    "Fixed-action patterns",
                    "Supervisory control"
                ],
                answer: "Periodic or repetitive motion"
            },

            {
                type: "multiple",
                question: "Which biomimetic locomotion occurs when the agent overcomes friction through longitudinal vibration or movement, like a caterpillar?",
                options: [
                    "Crawling",
                    "Sliding",
                    "Running",
                    "Jumping"
                ],
                answer: "Crawling"
            },

            {
                type: "multiple",
                question: "Which biomimetic locomotion occurs when the agent overcomes friction through transverse vibrations, like a snake?",
                options: [
                    "Sliding",
                    "Crawling",
                    "Running",
                    "Jumping"
                ],
                answer: "Sliding"
            },

            {
                type: "multiple",
                question: "Which biomimetic locomotion occurs when the agent overcomes kinetic energy with oscillatory movement of a multi-link pendulum?",
                options: [
                    "Running",
                    "Jumping",
                    "Crawling",
                    "Sliding"
                ],
                answer: "Running"
            },

            {
                type: "multiple",
                question: "Which biomimetic locomotion produces a predominantly vertical motion through oscillatory movement of the legs?",
                options: [
                    "Jumping",
                    "Running",
                    "Crawling",
                    "Sliding"
                ],
                answer: "Jumping"
            },

            {
                type: "multiple",
                question: "What do legged robots mimic?",
                options: [
                    "The movement and behavior of animals that use legs",
                    "The rolling motion of wheeled vehicles",
                    "The oscillation of pendulums",
                    "The vibration of motors"
                ],
                answer: "The movement and behavior of animals that use legs"
            },

            {
                type: "multiple",
                question: "What does static balance rely on?",
                options: [
                    "The notion of a support polygon",
                    "Active sensor feedback",
                    "Oscillatory limb movement",
                    "Dynamic gait patterns"
                ],
                answer: "The notion of a support polygon"
            },

            {
                type: "multiple",
                question: "What is static stability?",
                options: [
                    "The ability of a robot to remain upright without active control",
                    "The ability to adjust balance using sensors",
                    "The ability to move diagonally with paired legs",
                    "The ability to climb surfaces"
                ],
                answer: "The ability of a robot to remain upright without active control"
            },

            {
                type: "multiple",
                question: "What is dynamic balance?",
                options: [
                    "The ability of a robot to maintain stability through active control and movement",
                    "The ability to remain upright with a wide base",
                    "The ability to crawl close to the ground",
                    "The ability to gallop with four beats"
                ],
                answer: "The ability of a robot to maintain stability through active control and movement"
            },

            {
                type: "multiple",
                question: "What is dynamic stability?",
                options: [
                    "The ability of a robot to maintain balance by actively adjusting motion and behavior",
                    "The ability to remain upright without sensors",
                    "The ability to move in a slow crawl",
                    "The ability to hop with paired legs"
                ],
                answer: "The ability of a robot to maintain balance by actively adjusting motion and behavior"
            },

            {
                type: "multiple",
                question: "What does gait refer to in robotics?",
                options: [
                    "A limb movement pattern characterized by sequence, timing, and coordination",
                    "A fixed-action reflex",
                    "A supervisory control loop",
                    "A locomotion schema"
                ],
                answer: "A limb movement pattern characterized by sequence, timing, and coordination"
            },

            {
                type: "multiple",
                question: "Which gait is slow and steady, with at least one foot always in contact with the ground?",
                options: [
                    "Walk",
                    "Trot",
                    "Gallop",
                    "Bound"
                ],
                answer: "Walk"
            },

            {
                type: "multiple",
                question: "Which gait is a two-beat pattern where diagonal legs move together?",
                options: [
                    "Trot",
                    "Walk",
                    "Gallop",
                    "Crawl"
                ],
                answer: "Trot"
            },

            {
                type: "multiple",
                question: "Which gait is a four-beat pattern where one foot lands ahead of the others, followed quickly by the rest?",
                options: [
                    "Gallop",
                    "Trot",
                    "Walk",
                    "Bound"
                ],
                answer: "Gallop"
            },

            {
                type: "multiple",
                question: "Which gait is a hopping pattern where both legs on one side move together, followed by both legs on the other side?",
                options: [
                    "Bound",
                    "Gallop",
                    "Crawl",
                    "Climb"
                ],
                answer: "Bound"
            },

            {
                type: "multiple",
                question: "Which gait is slow and creeping, with the robot or animal close to the ground?",
                options: [
                    "Crawl",
                    "Walk",
                    "Bound",
                    "Gallop"
                ],
                answer: "Crawl"
            },

            {
                type: "multiple",
                question: "Which gait is used for climbing surfaces, with legs alternately lifted and lowered in coordination?",
                options: [
                    "Climb",
                    "Crawl",
                    "Walk",
                    "Trot"
                ],
                answer: "Climb"
            }
        ]
    }

];
