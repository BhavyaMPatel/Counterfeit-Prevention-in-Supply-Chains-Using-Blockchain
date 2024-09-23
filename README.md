# Supply Chain Management on Blockchain

This project is a blockchain-based supply chain management system implemented using Solidity, Hardhat, and Ethers.js on the Ethereum blockchain. The system allows manufacturers, suppliers, and customers to add, update, and verify products on a decentralized ledger. The frontend is built with React and Tailwind CSS, and it interacts with smart contracts deployed on the blockchain network.

## Table of Contents

- [Project Overview](#project-overview)
- [Pre-requisites](#pre-requisites)
- [Setup and Installation](#setup-and-installation)

---

## Project Overview

This project tracks the life cycle of a product from manufacture to distribution, ensuring transparency and trust in the supply chain. Three key roles interact with the system:

1. **Manufacturer**: Adds products to the blockchain.
2. **Supplier**: Updates the location of products.
3. **Customer**: Verifies the authenticity of products by retrieving product details from the blockchain.

---

- **contracts**: Contains the Solidity smart contract `SupplyChain.sol`.
- **frontend**: React components to interact with the blockchain (Manufacturer, Supplier, Customer).
- **scripts**: Script to deploy the smart contract (`deploy.js`).
- **test**: Test cases for the smart contract (`Lock.js`).
- **artifacts**, **cache**, **node_modules**: Auto-generated folders excluded in `.gitignore`.

---

## Pre-requisites

To run this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v16 or later)
- [Hardhat](https://hardhat.org/getting-started/)
- [MetaMask](https://metamask.io/) (for blockchain interaction)

---

## Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/BhavyaMPatel/Counterfeit-Prevention-in-Supply-Chains-Using-Blockchain
   cd Counterfeit-Prevention-in-Supply-Chains-Using-Blockchain

2. **Run the command**:
  ```bash
  npx hardhat compile
  npx hardhat node
  **open another terminal**
  npx hardhat run scripts/deploy.js --network localhost
  **U WILL FIND CONTRACT ADDRESS COPY THAT**
  **OPEN web3.js in frontend folder**
