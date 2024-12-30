// Zeno AI Framework - Core Code
const chalk = require('chalk');
const Web3 = require('web3');
const solanaWeb3 = require('@solana/web3.js');

const ETHEREUM_RPC_URL = "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID";
const SOLANA_CLUSTER_URL = "https://api.mainnet-beta.solana.com";

const ethereumWeb3 = new Web3(new Web3.providers.HttpProvider(ETHEREUM_RPC_URL));
const solanaConnection = new solanaWeb3.Connection(SOLANA_CLUSTER_URL);

async function fetchAnalytics() {
    console.log(chalk.blue("Fetching blockchain analytics..."));
    const ethBlockNumber = await ethereumWeb3.eth.getBlockNumber();
    const solBlockHeight = await solanaConnection.getSlot();
    console.log(chalk.green(`Ethereum Latest Block: ${ethBlockNumber}`));
    console.log(chalk.green(`Solana Latest Slot: ${solBlockHeight}`));
}

fetchAnalytics();
