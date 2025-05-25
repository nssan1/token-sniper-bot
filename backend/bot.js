const ethers = require('ethers');
require('dotenv').config();

const provider = new ethers.WebSocketProvider(process.env.RPC_WSS);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

// Placeholder for bot logic
console.log("Bot initialized with wallet:", wallet.address);
