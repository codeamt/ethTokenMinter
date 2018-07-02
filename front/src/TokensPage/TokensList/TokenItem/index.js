import React from "react";
import PropTypes from "prop-types";
import { Well } from "react-bootstrap";
import { PropTypes as MobxPropTypes } from "mobx-react";


import TokenImage from "../../../components/TokenImage/index.js";
import "./TokenItem.css";

const TokenItem = ({ token, onClick }) => {
  return (
    <Well bsClass="token-card">
      <div className="TokenItem" onClick={onClick}>
        <div className="TokenItem-image_wrapper">
          <TokenImage outer={token[0]} inner={token[1]} />
        </div>
      </div>
      <hr />
      <div className="TokenItem-label">Inner Color: {`${token[0]}`}, Outer Color: {`${token[1]}`}</div>
    </Well>
    );
};

TokenItem.propTypes = {
  token: MobxPropTypes.arrayOrObservableArray,
  onClick: PropTypes.func
};

export default TokenItem;