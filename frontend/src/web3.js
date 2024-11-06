import { ethers } from "ethers";
import SupplyChainABI from './SupplyChain.json'; // ABI from the compiled contract

// Replace this with your actual deployed contract address
const contractAddress = "UR ADDRESS"; 
const contractABI = SupplyChainABI.abi; // ABI from the JSON file

// Load blockchain data and get the contract
export const loadBlockchainData = async () => {
  if (window.ethereum) {
    // Request access to the user's MetaMask account
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const supplyChainContract = new ethers.Contract(contractAddress, contractABI, signer);

    return supplyChainContract;
  } else {
    console.error("No Ethereum provider found. Install MetaMask!");
  }
};

