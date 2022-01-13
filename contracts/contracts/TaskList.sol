// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract TaskList {
    struct Task {
        string taskName;
        bool isDone;
    }

    mapping(address => Task[]) private Users;

    // external ->  can be accessed only externally, uses less gas than public
    // calldata -> data comes from external calls
    function addTask(string calldata _task) external {
        Users[msg.sender].push(Task({taskName: _task, isDone: false}));
    }

    // memory -> data comes from internal memory
    // view -> function does not modify state of block
    function getTask(uint256 _taskIndex) external view returns (Task memory) {
        Task storage task = Users[msg.sender][_taskIndex];
        return task;
    }

    function updateStatus(uint256 _taskIndex, bool _status) external {
        Users[msg.sender][_taskIndex].isDone = _status;
    }

    function deleteTask(uint256 _taskIndex) external {
        delete Users[msg.sender][_taskIndex];
    }
}
