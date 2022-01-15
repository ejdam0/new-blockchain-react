export const TASK_LIST_ADDRESS = "0x673613c44cEA39042a12D7eA2aE7d0762c4294E2";

export const TASK_LIST_ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "completed",
        type: "bool",
      },
    ],
    name: "TaskCompleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "content",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "completed",
        type: "bool",
      },
    ],
    name: "TaskCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "progress",
        type: "uint256",
      },
    ],
    name: "TaskProgressUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "content",
        type: "string",
      },
    ],
    name: "TaskUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tasks",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
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
    stateMutability: "view",
    type: "function",
    constant: true,
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
