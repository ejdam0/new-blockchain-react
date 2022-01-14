import Web3 from "web3";
import { TASK_LIST_ABI, TASK_LIST_ADDRESS } from "./config";
import { addTask, setAccount, setTaskCount } from "./store/AppReducer";

export const fetchData = async (dispatch) => {
  const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
  const accounts = await web3.eth.requestAccounts();
  dispatch(setAccount(accounts[0]));

  // inicjalizacja kontraktu przy użyciu abi i adres
  const taskList = new web3.eth.Contract(TASK_LIST_ABI, TASK_LIST_ADDRESS);
  const taskCount = await taskList.methods.getTaskCount().call();
  dispatch(setTaskCount(taskCount));

  await addTasksToStore(taskCount, taskList, dispatch);
};

async function addTasksToStore(taskCount, taskList, dispatch) {
  let tasksList = [];
  for (let i = 1; i <= taskCount; i++) {
    const taskFromContract = await taskList.methods.tasks(i).call();
    const appTask = {
      id: taskFromContract.id,
      taskName: taskFromContract.taskName,
      isDone: taskFromContract.isDone,
    };
    tasksList = [...tasksList, appTask];
    dispatch(addTask(appTask));
  }
}
