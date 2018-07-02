import React from "react";
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
    /*<nav className="Nav">
      <div className="Nav-menus">
        <div className="Nav-brand">
          <a href="/">
            ethTokenMinter
          </a>
        </div>
      </div>
    </nav>*/
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <h1><a href="#home">EthTokenMinter</a></h1>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">
          <h4>View Source on Github</h4>
        </NavItem>
      </Nav>
    </Navbar>
    );
  }
}
export default Header;