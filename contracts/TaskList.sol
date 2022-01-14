// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract TaskList {
    uint256 private taskCount = 0;
    struct Task {
        uint256 id;
        string taskName;
        uint256 progress;
        bool isDone;
    }

    event TaskCreated(uint256 id, string content, bool completed);
    event TaskUpdated(uint256 id, string content);
    event TaskCompleted(uint256 id, bool completed);
    event TaskProgressUpdated(uint256 id, uint256 progress);

    mapping(uint256 => Task) public tasks;

    constructor() {
        createTask("First task");
        createTask("Second task");
        createTask("Third task");
    }

    function getTaskCount() public view returns (uint256) {
        return taskCount;
    }

    function createTask(string memory _task) public {
        taskCount++;
        tasks[taskCount] = Task(taskCount, _task, 0, false);
        emit TaskCreated(taskCount, _task, false);
    }

    function updateTask(string memory _newTask, uint256 _taskIndex) public {
        Task memory _task = tasks[_taskIndex];
        _task.taskName = _newTask;
        tasks[_taskIndex] = _task;
        emit TaskUpdated(_taskIndex, _task.taskName);
    }

    function updateProgress(uint256 _progress, uint256 _taskIndex) public {
        if (_progress == 100) {
            Task memory _task = tasks[_taskIndex];
            _task.progress = _progress;
            tasks[_taskIndex] = _task;
            toggleTaskCompletion(_taskIndex);
        } else {
            Task memory _task = tasks[_taskIndex];
            _task.progress = _progress;
            tasks[_taskIndex] = _task;
        }
        emit TaskProgressUpdated(_taskIndex, _progress);
    }

    function toggleTaskCompletion(uint256 _taskIndex) public {
        Task memory _task = tasks[_taskIndex];
        _task.isDone = !_task.isDone;
        _task.progress = 100;
        tasks[_taskIndex] = _task;
        emit TaskCompleted(_taskIndex, _task.isDone);
    }
}
