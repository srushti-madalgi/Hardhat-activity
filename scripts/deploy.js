// Import Hardhat runtime environment
const hre = require("hardhat");
async function main() {

const contract = await hre.ethers.getContractFactory("contracts/votingsystem.sol:votingsystem");

const Contract = await contract.deploy();
await Contract.deployed();
console.log("Contract deployed to:", Contract.address);
}

main().catch((error) => { 
    console.error(error); 
    process.exit(1); 
});