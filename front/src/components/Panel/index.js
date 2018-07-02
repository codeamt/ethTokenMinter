import React from "react";
import { PageHeader } from "react-bootstrap";
import "./Panel.css";

class Panel extends React.Component {
  render() {
    return (
    /*<div className="Panel">
      <h2>
        Mint Your Own Tokens
      </h2>
      <h4>
      This is an example Ethereum dApp that manages the creation and storing of non-fungible assets on the blockchain (similar to popular dApp CryptoKitties).
      </h4>
    </div>*/
    <PageHeader>
      Mint Your Own Tokens <small>Asset Creation on the Blockchain</small>
    </PageHeader>
    );
  }
}
export default Panel;