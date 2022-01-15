// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract TaskList {
    struct Task {
        string taskName;
        uint256 progress;
        bool isDone;
    }

    mapping(address => Task[]) private Tasks;

    constructor() {
        createTask("Zadanie 1");
        createTask("Zadanie 2");
        createTask("Zadanie 3");
    }

    function getTaskCount() public view returns (uint256) {
        return Tasks[msg.sender].length;
    }

    function createTask(string memory _task) public {
        Tasks[msg.sender].push(Task(_task, 0, false));
    }

    function getTask(uint256 _taskIndex) public view returns (Task memory) {
        Task storage task = Tasks[msg.sender][_taskIndex];
        return task;
    }

    function updateTask(string memory _newTask, uint256 _taskIndex) public {
        Task memory _task = Tasks[msg.sender][_taskIndex];
        _task.taskName = _newTask;
        Tasks[msg.sender][_taskIndex] = _task;
    }

    function updateProgress(uint256 _progress, uint256 _taskIndex) public {
        Task memory _task = Tasks[msg.sender][_taskIndex];
        _task.progress = _progress;
        Tasks[msg.sender][_taskIndex] = _task;
        if (_progress == 100 && _task.isDone == false) {
            toggleTaskCompletion(_taskIndex);
        }
    }

    function toggleTaskCompletion(uint256 _taskIndex) public {
        Task memory _task = Tasks[msg.sender][_taskIndex];
        _task.isDone = !_task.isDone;
        Tasks[msg.sender][_taskIndex] = _task;
    }
}
