var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "fish maximum age love few market supreme identify guess unit must hammer";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/tPNyqnWI32IepQh2lrMf")
      },
      gas: 2900000,
      network_id: 3
    }   
  }
};
