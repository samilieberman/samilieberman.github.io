import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { NavWrapper } from "./styles";
import { BrowserRouter, Link as DownloadLink } from "react-router-dom";
import resume from '../../assets/Resume.pdf';
import "bootstrap/dist/css/bootstrap.min.css";
class NavBar extends Component {
  render() {
    return (
        <NavWrapper expand="lg" bg="dark" variant="dark">
            <Nav className="m-auto">
            <BrowserRouter>
                <DownloadLink
                  to={resume}
                  target="_blank"
                  className="nav-link"
                >
                  Resume
                </DownloadLink>
              </BrowserRouter>
            </Nav>
        </NavWrapper>
    );
  }
}
export default NavBar;
