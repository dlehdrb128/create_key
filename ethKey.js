import Web3 from "web3";

const web3 = new Web3();

const privateKey = "0x3AA92E1D25B1EBF7BC33D1DB4E1A33E3DFD48A3228767F35A0CD0DF5C293B09E"
const account = web3.eth.accounts.privateKeyToAccount(privateKey);

console.log(account);