export const TASK_LIST_ADDRESS = "0xe2b3e6314131d0e0fa197BE9c53407115Cf8d25E";

export const TASK_LIST_ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getTaskCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_task",
        type: "string",
      },
    ],
    name: "createTask",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_taskIndex",
        type: "uint256",
      },
    ],
    name: "getTask",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "taskName",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "progress",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isDone",
            type: "bool",
          },
        ],
        internalType: "struct TaskList.Task",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_newTask",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_taskIndex",
        type: "uint256",
      },
    ],
    name: "updateTask",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_progress",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_taskIndex",
        type: "uint256",
      },
    ],
    name: "updateProgress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_taskIndex",
        type: "uint256",
      },
    ],
    name: "toggleTaskCompletion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
