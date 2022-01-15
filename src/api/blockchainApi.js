import Web3 from "web3";
import { TASK_LIST_ABI, TASK_LIST_ADDRESS } from "../config";
import { addTask, setAccount, setTaskCount } from "../store/AppReducer";

const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
const taskList = new web3.eth.Contract(TASK_LIST_ABI, TASK_LIST_ADDRESS);

export const createTask = async (taskName, account) => {
  return taskList.methods.createTask(taskName).send({ from: account });
};

export const alterTaskName = async (taskId, taskName, account) => {
  return taskList.methods.updateTask(taskName, taskId).send({ from: account });
};

export const alterTaskProgress = async (taskId, progress, account) => {
  return taskList.methods
    .updateProgress(progress, taskId)
    .send({ from: account });
};

export const alterTaskCompletion = async (taskId, account) => {
  return taskList.methods.toggleTaskCompletion(taskId).send({ from: account });
};

export const fetchAccountData = async (dispatch) => {
  const accounts = await web3.eth.requestAccounts();
  dispatch(setAccount(accounts[0]));
  fetchTaskData(dispatch);
};

export const fetchTaskData = async (dispatch) => {
  const taskCount = await taskList.methods.getTaskCount().call();
  dispatch(setTaskCount(parseInt(taskCount)));
  await addTasksToStore(taskCount, taskList, dispatch);
};

async function addTasksToStore(taskCount, taskList, dispatch) {
  let tasksList = [];
  for (let i = 1; i <= taskCount; i++) {
    const taskFromContract = await taskList.methods.tasks(i).call();
    const appTask = {
      id: taskFromContract.id,
      taskName: taskFromContract.taskName,
      progress: parseInt(taskFromContract.progress),
      isDone: taskFromContract.isDone,
    };
    tasksList = [...tasksList, appTask];
    dispatch(addTask(appTask));
  }
}
