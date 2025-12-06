const QUESTIONS = [
  {
    "question": "The command used to rename a file in DOS is:",
    "options": [
      "A. COPY", 
      "B. REN", 
      "C. DIR", 
      "D. TYPE" 
    ],
    "answer": "B"
  },
  {
    "question": "UEFI supports partition sizes up to:",
    "options": [
      "A. 9.4 ZB",
      "B. 2.2 TB",
      "C. 4 PB",
      "D. 10 TB"
    ],
    "answer": "A"
  },
  {
    "question": "Which OS structure moves most services to user space?",
    "options": [
      "A. Layered approach",
      "B. Simple structure",
      "C. Microkernel",
      "D. Hybrid"
    ],
    "answer": "C"
  },
  {
    "question": "GRUB is responsible for?",
    "options": [
      "A. Running the BIOS",
      "B. Loading the Linux kernel",
      "C. Testing the CPU",
      "D. Managing RAM"
    ],
    "answer": "B"
  },
  {
    "question": "The DOS command that clears the screen is:",
    "options": [
      "A. DIR",
      "B. CLS",
      "C. VER",
      "D. CD"
    ],
    "answer": "B"
  },
  {
    "question": "An operating system acting as a control program means it:",
    "options": [
      "A. Allocates time to CPUs",
      "B. Manages user logins",
      "C. Prevents improper program use",
      "D. Encrypts data"
    ],
    "answer": "C"
  },
  {
    "question": "The BIOS POST primarily checks:",
    "options": [
      "A. User passwords",
      "B. Hardware integrity",
      "C. CPU pipelines",
      "D. Software versions"
    ],
    "answer": "B"
  },
  {
    "question": "COPY CON is used to:",
    "options": [
      "A. Delete files",
      "B. Create a new text file",
      "C. Copy directories",
      "D. Edit system settings"
    ],
    "answer": "B"
  },
  {
    "question": "Which DOS command displays the version?",
    "options": [
      "A. VER",
      "B. TYPE",
      "C. DATE",
      "D. EDIT"
    ],
    "answer": "A"
  },
  {
    "question": "The kernel is best described as:",
    "options": [
      "A. The entire OS",
      "B. A shell program",
      "C. The program always running on the computer",
      "D. An API"
    ],
    "answer": "C"
  },
  {
    "question": "The bootstrap program is stored in:",
    "options": [
      "A. Cache",
      "B. Hard disk",
      "C. ROM / EPROM",
      "D. Video memory"
    ],
    "answer": "C"
  },
  {
    "question": "The command used to make a directory in DOS is:",
    "options": [
      "A. RD",
      "B. MD",
      "C. CD",
      "D. TREE"
    ],
    "answer": "B"
  },
  {
    "question": "MBR contains boot loader information and is how large?",
    "options": [
      "A. 512 bytes",
      "B. 256 bytes",
      "C. 1 KB",
      "D. 4 KB"
    ],
    "answer": "A"
  },
  {
    "question": "A GUI is characterized by:",
    "options": [
      "A. Text-only interface",
      "B. Icons and windows",
      "C. Command-line prompts",
      "D. Script automation"
    ],
    "answer": "B"
  },
  {
    "question": "Which system call type includes operations like create file and delete file?",
    "options": [
      "A. Device management",
      "B. Protection",
      "C. File management",
      "D. Communications"
    ],
    "answer": "C"
  },
  {
    "question": "Caching is the process of:",
    "options": [
      "A. Storing files permanently",
      "B. Increasing disk capacity",
      "C. Copying information into faster storage",
      "D. Encrypting memory"
    ],
    "answer": "C"
  },
  {
    "question": "Which command compares two text files in DOS?",
    "options": [
      "A. FIND",
      "B. XCOPY",
      "C. FC",
      "D. SORT"
    ],
    "answer": "C"
  },
  {
    "question": "Which memory is volatile and directly accessible by the CPU?",
    "options": [
      "A. Hard disk",
      "B. ROM",
      "C. SSD",
      "D. Main memory"
    ],
    "answer": "D"
  },
  {
    "question": "The first instruction executed by the CPU during boot is read from address:",
    "options": [
      "A. 00000",
      "B. FFFF0",
      "C. A0000",
      "D. F000F"
    ],
    "answer": "B"
  },
  {
    "question": "Which command lists all files in a directory?",
    "options": [
      "A. DIR",
      "B. DEL",
      "C. PATH",
      "D. VOL"
    ],
    "answer": "A"
  },
  {
    "question": "The command used to delete a file in DOS is:",
    "options": [
      "A. RD",
      "B. DEL",
      "C. REMOVE",
      "D. KILL"
    ],
    "answer": "B"
  },
  {
    "question": "Internal DOS commands are loaded from which file?",
    "options": [
      "A. AUTOEXEC.BAT",
      "B. COMMAND.COM",
      "C. IO.SYS",
      "D. MSDOS.SYS"
    ],
    "answer": "B"
  },
  {
    "question": "Which OS service provides mechanisms for communication between processes?",
    "options": [
      "A. Debugging",
      "B. Memory management",
      "C. File manipulation",
      "D. Communications"
    ],
    "answer": "D"
  },
  {
    "question": "Which boot component loads GRUB?",
    "options": [
      "A. Kernel",
      "B. BIOS",
      "C. MBR",
      "D. POST"
    ],
    "answer": "C"
  },
  {
    "question": "Timesharing systems require a response time less than:",
    "options": [
      "A. 10s",
      "B. 5s",
      "C. 1s",
      "D. 0.01s"
    ],
    "answer": "C"
  },
  {
    "question": "Which is NOT a major component of a computer system?",
    "options": [
      "A. Users",
      "B. Firmware",
      "C. Hardware",
      "D. OS"
    ],
    "answer": "B"
  },
  {
    "question": "The command used to view file contents in DOS is:",
    "options": [
      "A. TYPE",
      "B. VIEW",
      "C. SHOW",
      "D. PRINT"
    ],
    "answer": "A"
  },
  {
    "question": "EFI eliminates the need for:",
    "options": [
      "A. a boot sector",
      "B. a video driver",
      "C. RAM access",
      "D. file systems"
    ],
    "answer": "A"
  },
  {
    "question": "The EFI System Partition (ESP) contains:",
    "options": [
      "A. BIOS commands",
      "B. Boot loaders for OSes",
      "C. CPU microcode",
      "D. Partition tables"
    ],
    "answer": "B"
  },
  {
    "question": "Which wildcard represents any number of characters?",
    "options": [
      "A. *",
      "B. ?",
      "C. #",
      "D. %"
    ],
    "answer": "A"
  },
  {
    "question": "Multiprogramming ensures CPU efficiency by:",
    "options": [
      "A. Running the same process twice",
      "B. Keeping the CPU executing some job always",
      "C. Increasing RAM",
      "D. Running BIOS repeatedly"
    ],
    "answer": "B"
  },
  {
    "question": "System calls are typically accessed through a:",
    "options": [
      "A. CPU instruction",
      "B. High-level API",
      "C. Hardware interrupt",
      "D. BIOS table"
    ],
    "answer": "B"
  },
  {
    "question": "What is * and ? in DOS command?",
    "options": [
      "A. Character",
      "B. Wildcard",
      "C. Object",
      "D. Special character"
    ],
    "answer": "B"
  },
  {
    "question": "The UEFI boot manager stores configuration in:",
    "options": [
      "A. CMOS battery",
      "B. NVRAM variables",
      "C. Hard disk only",
      "D. RAM"
    ],
    "answer": "B"
  },
  {
    "question": "Which DOS command displays memory status?",
    "options": [
      "A. MEM",
      "B. SCANDISK",
      "C. LABEL",
      "D. SORT"
    ],
    "answer": "A"
  },
  {
    "question": "Which command is used to sort file contents?",
    "options": [
      "A. SORT",
      "B. TYPE",
      "C. DIR",
      "D. EDIT"
    ],
    "answer": "A"
  },
  {
    "question": "The command to remove a directory is:",
    "options": [
      "A. MD",
      "B. RD",
      "C. ERASE",
      "D. Del"
    ],
    "answer": "B"
  },
  {
    "question": "A trap is generated by:",
    "options": [
      "A. Hardware failure",
      "B. Software request or error",
      "C. BIOS POST",
      "D. Disk failure"
    ],
    "answer": "B"
  },
  {
    "question": "What was the last standalone version of MS-DOS?",
    "options": [
      "A. MS-DOS 4.0",
      "B. MS-DOS 5.0",
      "C. MS-DOS 6.22",
      "D. MS-DOS 7.1"
    ],
    "answer": "C"
  },
  {
    "question": "A microkernel improves system reliability because:",
    "options": [
      "A. It uses only one module",
      "B. Less code runs in kernel mode",
      "C. Drivers run faster",
      "D. It performs POST"
    ],
    "answer": "B"
  },
  {
    "question": "DISKCOPY is used to:",
    "options": [
      "A. Copy file to file",
      "B. Copy entire floppy disk",
      "C. Compare disks",
      "D. Sort disk contents"
    ],
    "answer": "B"
  },
  {
    "question": "Which OS service ensures correct and consistent computing?",
    "options": [
      "A. Error detection",
      "B. Logging",
      "C. GUI management",
      "D. Paging"
    ],
    "answer": "A"
  },
  {
    "question": "DMA allows data transfer:",
    "options": [
      "A. Only through CPU",
      "B. Directly between device and memory",
      "C. Only through disk",
      "D. Through BIOS"
    ],
    "answer": "B"
  },
  {
    "question": "BIOS instructions are stored in:",
    "options": [
      "A. Magnetic disk",
      "B. EEPROM",
      "C. RAM",
      "D. Flash drive"
    ],
    "answer": "B"
  },
  {
    "question": "The DOS EDIT command is used to:",
    "options": [
      "A. Display memory",
      "B. Display text",
      "C. Edit/create ASCII files",
      "D. Repair disks"
    ],
    "answer": "C"
  },
  {
    "question": "Timesharing allows:",
    "options": [
      "A. Multiple processes to share CPU time interactively",
      "B. One process to run indefinitely",
      "C. Direct hardware access",
      "D. Faster ROM access"
    ],
    "answer": "A"
  },
  {
    "question": "The OS component that abstracts storage into files and directories is:",
    "options": [
      "A. Process manager",
      "B. Device driver",
      "C. File-system manager",
      "D. BIOS"
    ],
    "answer": "C"
  },
  {
    "question": "EFI supports CPU-independent:",
    "options": [
      "A. Programs",
      "B. Drivers",
      "C. Memory",
      "D. BIOS modules"
    ],
    "answer": "B"
  },
  {
    "question": "Which command moves files between directories?",
    "options": [
      "A. MOVE",
      "B. MD",
      "C. FC",
      "D. COPY CON"
    ],
    "answer": "A"
  },
  {
    "question": "SWhich structure stores the address of all interrupt service routines?",
    "options": [
      "A. Cache",
      "B. Interrupt Vector",
      "C. Stack",
      "D. ALU"
    ],
    "answer": "B"
  }
];