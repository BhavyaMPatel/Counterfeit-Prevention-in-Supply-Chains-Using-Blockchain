require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.0",
  networks: {
    localhost: {
      url: "http://localhost:8545",
      chainId: 31337
    },
  }
};
