// Import Hardhat runtime environment explicitly
const hre = require("hardhat");

async function main() {
    // Get the contract factory
    const SupplyChain = await hre.ethers.getContractFactory("SupplyChain");
    
    // Deploy the contract
    const supplyChain = await SupplyChain.deploy();
    
    // Wait for the contract to be mined
    await supplyChain.deployed();
    
    console.log("SupplyChain contract deployed to:", supplyChain.address);
}

main()
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });
