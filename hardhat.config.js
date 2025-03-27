/** @type import('hardhat/config').HardhatUserConfig */

require("@nomiclabs/hardhat-ethers")

module.exports = {
  solidity: "0.8.28",
  paths:{
    artifacts:"./artifacts"
  },
  networks: {
    localhost : {
      url:"http://127.0.0.1:8545"
    },
    sepolia: {
      url:"https://eth-sepolia.g.alchemy.com/v2/Cy0wWb2qGZo-zZapSbe_Zdm2Da234dDx",
      accounts : ["0x1903e54111a669ebf745ae53ba7c091078c2cc46b1ae3676bc74d1ea886dc56c" ,
        "81f1178506a1576900f06f1becce1264931720c2879d821dfc64d0349fde3b3b"
      ]

      }
}}
