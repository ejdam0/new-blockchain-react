import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import "./App.css";
import { fetchData } from "./blockchainApi";

const App = () => {
  const dispatch = useDispatch()
  const account = useSelector(state => state.appReducer.account)

  useEffect(() => {
    fetchData(dispatch);
  }, []);
  return <div>This is your account: {account}</div>;
};

export default App;
