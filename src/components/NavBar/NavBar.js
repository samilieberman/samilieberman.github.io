import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Link as DownloadLink } from "react-router-dom";
import resume from '../../assets/Resume.pdf';
class NavBar extends Component {
  render() {
    return (
        <Navbar expand="lg">
            <Nav className="m-auto">
            <BrowserRouter>
              <DownloadLink to="/" activeClass="active" className="nav-link">
                Home
              </DownloadLink>
                <DownloadLink
                  to={resume}
                  target="_blank"
                  activeClass="active"
                  className="nav-link"
                >
                  Resume
                </DownloadLink>
              </BrowserRouter>
            </Nav>
        </Navbar>
    );
  }
}
export default NavBar;
