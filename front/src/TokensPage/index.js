import React from "react";
import MintButton from "../components/Button";
import PropTypes from "prop-types";
import WithLoader from "../components/WithLoader";
import TokensList from "./TokensList";
import { inject, observer } from "mobx-react";
import "./TokensPage.css";

const TokensPage = ({ gradientTokenStore: { mintToken, isLoading } }) => {
  return (
    <div className="TokensPage">
      <MintButton onClick={mintToken} label="Mint New Token" />
      <div className="TokensPage-tokens">
        <WithLoader isLoading={isLoading}>
          <TokensList />
        </WithLoader>
      </div>
    </div>
  );
};

TokensPage.propTypes = {
  gradientTokenStore: PropTypes.shape({
    mintToken: PropTypes.func
  }).isRequired
};

export default inject("gradientTokenStore")(observer(TokensPage));