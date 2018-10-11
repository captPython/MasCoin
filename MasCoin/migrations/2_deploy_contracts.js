// Get an instance of the contract 
var MasCoinToken = artifacts.require("./MasCoinToken.sol");

module.exports = function (deployer) {
  deployer.deploy(MasCoinToken);
};