import { createSlice } from "@reduxjs/toolkit";

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
    addTasks: (state, action) => {
      state.tasks = action.payload;
    },
    removeTaskById: (state, action) => {
      state.tasks = state.tasks.filter(
        (storeTask) => storeTask.id !== action.payload
      );
    },
  },
});

export const {
  setIsNewTaskModalOpen,
  setAccount,
  setTaskCount,
  addTask,
  removeTaskById,
  incrementByAmount,
} = appSlice.actions;

export default appSlice.reducer;

const isTaskAlreadyInStore = (state, action) => {
  return state.tasks.find((stateTask) => stateTask.id === action.payload.id);
};
