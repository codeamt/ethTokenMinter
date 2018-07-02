import contract from "truffle-contract";
import getProvider from "./getProvider.js";
import GradientTokenArtifact from "../contracts/GradientToken.json";
//import GradientTokenArtifact from "../src/contracts/GradientToken.json";
import addresses from "../addresses.json";

const { tokenAddress } = addresses;

export default async function getGradientContractInstance() {
  const gradientTokenContract = contract(GradientTokenArtifact);
  gradientTokenContract.setProvider(getProvider());
  const gradientTokenInstance = await gradientTokenContract.at(tokenAddress);
  return gradientTokenInstance;
}