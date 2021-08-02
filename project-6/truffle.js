
const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "4d3a9ef2fa4546c5b77a8e98f028879c";
const mnemonic = "capital key cream tilt like ancient enough notice brand parade pair ask";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    }, 
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,
        gas: 4500000,
        gasPrice: 10000000000
    }
  }
};