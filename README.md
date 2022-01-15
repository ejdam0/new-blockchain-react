# Getting Started with Create React App

This application was made as a part of master's thesis. The web application allows the user to manage his tasks list. It is possible to

- add new task
- rename existing task
- change progress of existing task
- toggle completion of existing task

The application uses Node.js, React, Redux and Bootstrap. The application utilizes a [smart contract](/contracts/TaskList.sol) deployed on Ethereum blockchain. In order to run this application you have to download and run a blockchain (Ganache preferably) locally or alter the url inside [blockchainApi](/src/api/blockchainApi.js):

```
const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
```

Metamask browser extension is required for this application to work correctly.

## Run the application

Open the project and run:

### `npm install`

Start Ganache and setup blockchain, import one of the existing accounts to the Metamask.

In the project directory run:

### `truffle migrate`

Copy the contract address and abi stored inside `/build/TaskList.json`, paste them into [config.js](/src/config.js).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
