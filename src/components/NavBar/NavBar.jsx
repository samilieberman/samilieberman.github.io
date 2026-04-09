import { NavWrapper } from "./styles";
import resume from '../../assets/Resume.pdf';

function NavBar() {
  return (
    <NavWrapper>
      <div style={{ margin: '0 auto' }}>
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'white', textDecoration: 'none' }}
        >
          Resume
        </a>
      </div>
    </NavWrapper>
  );
}

export default NavBar;
