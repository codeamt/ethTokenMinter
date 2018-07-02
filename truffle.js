/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() {
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>')
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */
var HDWalletProvider = require("truffle-hdwallet-provider");
//create a .env file and add your own credentials
var mnemonic = process.env.MNEMONIC_PHRASE;
var infura_key = process.env.INFURA_KEY;


require("babel-register")({
  ignore: /node_modules\/(?!zeppelin-solidity)/
});
require("babel-polyfill");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
      gas: 6721975,
      gasPrice: 20000000000
    },
     ropsten: {
      provider: function() { return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/" + infura_key);},
      network_id: 3,
      gas: 4500000,
      gasPrice: 20000000000
    }
  }
};
