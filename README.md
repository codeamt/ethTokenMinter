<h1 align="center">ethTokenMinter</h1>

<p>This is a simple React.js decentralized app (dApp) to demonstrate token minting/the creation of <b>Non-Fungible Tokens</b> on the Ethereum blockchain. The dApp utilizes Truffle, Open-Zeppelin, Metamask and Ganache to deploy and test contracts:</p> 

<p align="center">
<img src="https://ucarecdn.com/b787bba8-3f2d-47b3-8073-76c830fc023e/" width="40%" height="30%" />
</p>


## Demo on Ganache or Ropsten Network

<p align="center">
  <img src="https://ucarecdn.com/d7f96463-5eed-4330-b611-8a2edbb5842f/" width="70%" height="60%" />
</p>

To demo this project, you will need Ganache or a local blockchain running. To test on the Ropsten Network, install the Metamask browser extension. 


## Running and Testing 
Once Metamask and Ganache are installed and running: <br>

<b>1. Clone this repo:</b><br>

```
git clone https://github.com/codeamt/ethTokenMinter.git
```
<br>

<b>2. Install dependencies:</b> <br>

(Contract development dependencies)<br>
```
yarn install
cd front && yarn install
```
<br>

(Optionally, you can use npm) 

<b>3. Compile and Migrate Contracts:</b><br>

```
truffle console 

//for local blockchain or ganache
compile
migrate

//or for ropsten network 
compile --network ropsten
migrate --network ropsten
```
<br>
Migrating the contracts will populate a json file <i><b>addresses.json</i></b> in the frontend for the react app to access.<br>

<b>4. Run the dapp</b>

(from the front directory)<br>
```
//if you haven't already
cd front 

//then
yarn start 
```

<b>5. Optional: Running Tests</b><br>

This project uses Chai and Mocha for contract testing along with Jest to test react ui components. 

(For backend tests)

```
cd ..
truffle test
```

(For frontend tests)

```
cd front
yarn test 
```





