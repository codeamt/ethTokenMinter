//var GradientToken = artifacts.require("GradientToken");
const GradientToken = artifacts.require("./GradientToken.sol");
//const TokenAuction = artifacts.require("./TokenAuction.sol");
const util = require("util");
const promisify = require("util.promisify");
const fs = require("fs");
const path = require("path");
const writeFile = promisify(fs.writeFile);
const addressFile = path.join(__dirname, "..", "front", "src", "addresses.json");

module.exports = async function(deployer) {
  const gradientToken = await deployer.deploy(GradientToken);
  //const auctionContract = await deployer.deploy(TokenAuction, GradientToken.address);
  const addresses = {
    tokenAddress: GradientToken.address,
    //auctionAddress: TokenAuction.address
  };

  await writeFile(
    path.join(__dirname, "..", "front", "src", "addresses.json"),
    JSON.stringify(addresses)
  );
};