import Web3 from "web3";
import { TASK_LIST_ABI, TASK_LIST_ADDRESS } from "../config";
import { addTask, setAccount, setTaskCount } from "../store/AppReducer";

const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
const contract = new web3.eth.Contract(TASK_LIST_ABI, TASK_LIST_ADDRESS);

export const createTask = async (taskName, account) => {
  return contract.methods.createTask(taskName).send({ from: account });
};

export const alterTaskName = async (taskId, taskName, account) => {
  return contract.methods.updateTask(taskName, taskId).send({ from: account });
};

export const alterTaskProgress = async (taskId, progress, account) => {
  return contract.methods
    .updateProgress(progress, taskId)
    .send({ from: account });
};

export const alterTaskCompletion = async (taskId, account) => {
  return contract.methods.toggleTaskCompletion(taskId).send({ from: account });
};

export const fetchAccountData = async (dispatch) => {
  const accounts = await web3.eth.requestAccounts();
  dispatch(setAccount(accounts[0]));
  fetchTaskData(dispatch, accounts[0]);
};

export const fetchTaskData = async (dispatch, account) => {
  const taskCount = await contract.methods
    .getTaskCount()
    .call({ from: account });
  dispatch(setTaskCount(parseInt(taskCount)));
  await addTasksToStore(taskCount, contract, dispatch, account);
};

async function addTasksToStore(taskCount, contract, dispatch, account) {
  let tasksList = [];
  for (let i = 0; i < taskCount; i++) {
    const taskFromContract = await contract.methods
      .getTask(i)
      .call({ from: account });
    const appTask = {
      id: i,
      taskName: taskFromContract.taskName,
      progress: parseInt(taskFromContract.progress),
      isDone: taskFromContract.isDone,
    };
    tasksList = [...tasksList, appTask];
    dispatch(addTask(appTask));
  }
}
