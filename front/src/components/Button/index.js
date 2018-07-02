import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "./Button.css";

const MintButton = ({ onClick, label, disabled }) => (
  <Button bsSize="large" onClick={onClick} className={`MintButton ${disabled && "is-disabled"}`}>
    {label}
  </Button>
);


Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  disabled: PropTypes.bool
};

export default MintButton;