/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-waffle");

const INFURA_URL =
  "https://rinkeby.infura.io/v3/20cd146cad2745ce86688c8da16913b3";
const PRIVATE_KEY =
  "";

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: INFURA_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};

//commands
// npx hardhat
// npx hardhat compile
//npx hardhat test
// npx hardhat run scripts/deploy.js --network rinkeby/lohalhost
//npx hardhat node
