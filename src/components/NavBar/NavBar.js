import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-scroll";
import { BrowserRouter, Link as DownloadLink } from "react-router-dom";
import resume from '../../assets/Resume.pdf';
class NavBar extends Component {
  render() {
    return (
        <Navbar bg="light" variant="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Link to="/" activeClass="active" className="nav-link">
                Home
              </Link>
              {/* <Link
                to="education"
                activeClass="active"
                className="nav-link"
                spy={true}
                smooth={true}
              >
                Education
              </Link>
              <Link
                to="work"
                activeClass="active"
                className="nav-link"
                spy={true}
                smooth={true}
              >
                Work
              </Link> */}
              <Link
                to="contact"
                activeClass="active"
                className="nav-link"
                duration={1000}
                spy={true}
                smooth={true}
              >
                Contact
              </Link>
              <BrowserRouter>
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
          </Navbar.Collapse>
        </Navbar>
    );
  }
}
export default NavBar;
