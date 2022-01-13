import React, { useEffect, useState } from "react";
import Web3 from "web3";
import "./App.css";

const App = () => {
  const [account, setAccount] = useState();
  useEffect(() => {
    async function load() {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
      const accounts = await web3.eth.requestAccounts();

      setAccount(accounts[0]);
    }

    load();
  }, []);
  return <div>This is your account: {account}</div>;
};

export default App;
