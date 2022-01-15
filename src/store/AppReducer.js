import { createSlice } from "@reduxjs/toolkit";
import {
  alterTaskCompletion,
  alterTaskName,
  alterTaskProgress,
  createTask,
  fetchTaskData,
} from "../api/blockchainApi";

const initialState = {
  isNewTaskModalOpen: false,
  account: "",
  taskCount: 0,
  tasks: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setIsNewTaskModalOpen: (state, action) => {
      state.isNewTaskModalOpen = action.payload;
    },
    setAccount: (state, action) => {
      state.account = action.payload;
    },
    setTaskCount: (state, action) => {
      state.taskCount = action.payload;
    },
    addTask: (state, action) => {
      if (!isTaskAlreadyInStore(state, action)) {
        state.tasks = [...state.tasks, action.payload];
      }
    },
    updateTaskName: (state, action) => {
      state.tasks = state.tasks.map((storeTask) =>
        storeTask.id === action.payload.id
          ? { ...storeTask, taskName: action.payload.taskName }
          : storeTask
      );
    },
    updateTaskProgress: (state, action) => {
      state.tasks = state.tasks.map((storeTask) =>
        storeTask.id === action.payload.id
          ? { ...storeTask, progress: action.payload.progress }
          : storeTask
      );
    },
    toggleTaskCompletion: (state, action) => {
      state.tasks = state.tasks.map((storeTask) =>
        storeTask.id === action.payload.id
          ? { ...storeTask, isDone: !storeTask.isDone }
          : storeTask
      );
    },
  },
});

export const {
  setIsNewTaskModalOpen,
  setAccount,
  setTaskCount,
  addTask,
  updateTaskName,
  updateTaskProgress,
  toggleTaskCompletion,
} = appSlice.actions;

export default appSlice.reducer;

const isTaskAlreadyInStore = (state, action) => {
  return state.tasks.find((stateTask) => stateTask.id === action.payload.id);
};

export const renameTask = (dispatch, taskId, taskName, account) => {
  dispatch(updateTaskName({ id: taskId, taskName: taskName }));
  alterTaskName(taskId, taskName, account).then(() => fetchTaskData(dispatch));
};

export const changeTaskProgress = (
  dispatch,
  taskId,
  progress,
  isDone,
  account
) => {
  dispatch(updateTaskProgress({ id: taskId, progress: progress }));
  alterTaskProgress(taskId, progress, account);
  if (progress === 100 && !isDone) {
    alterTaskCompletion(taskId, account);
    dispatch(toggleTaskCompletion({ id: taskId }));
  } else if (isDone) {
    alterTaskCompletion(taskId, account);
    dispatch(toggleTaskCompletion({ id: taskId }));
  }
};

export const changeTaskCompletion = (dispatch, taskId, isDone, account) => {
  dispatch(toggleTaskCompletion({ id: taskId }));
  alterTaskCompletion(taskId, account);
  console.log(isDone);
  if (isDone) {
    alterTaskProgress(taskId, 100, account);
    dispatch(updateTaskProgress({ id: taskId, progress: 100 }));
  } else {
    alterTaskProgress(taskId, 0, account);
    dispatch(updateTaskProgress({ id: taskId, progress: 0 }));
  }
};

export const addNewTask = (dispatch, taskName, account) => {
  createTask(taskName, account).then(() => fetchTaskData(dispatch));
};
