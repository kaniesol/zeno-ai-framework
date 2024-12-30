// Example: Gas Optimization Script
const Web3 = require('web3');
const ETHEREUM_RPC_URL = "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID";
const web3 = new Web3(new Web3.providers.HttpProvider(ETHEREUM_RPC_URL));

async function optimizeGas() {
    const gasPrice = await web3.eth.getGasPrice();
    console.log(`Original Gas Price: ${gasPrice}`);
    const optimizedGasPrice = Math.floor(gasPrice * 0.85);
    console.log(`Optimized Gas Price: ${optimizedGasPrice}`);
}

optimizeGas();
