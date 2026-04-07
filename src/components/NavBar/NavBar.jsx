import { Nav } from "react-bootstrap";
import { NavWrapper } from "./styles";
import resume from '../../assets/Resume.pdf';
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <NavWrapper expand="lg" bg="dark" variant="dark">
      <Nav className="m-auto">
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link text-light"
        >
          Resume
        </a>
      </Nav>
    </NavWrapper>
  );
}

export default NavBar;
