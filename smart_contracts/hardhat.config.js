require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/B6NH-HrZkeG3P4JhrYGbzdfn4n8RvloZ",
      accounts: [
        "2e414e742c3c7bdd09c4c4e24257c5e2325854d405d3c596e5cd90cfd1e694ac",
      ],
    },
  },
};
