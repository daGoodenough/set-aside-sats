import { useRef, forwardRef, useImperativeHandle } from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const TopNav = forwardRef(function TopNav(props, ref) {
  const navbarRef = useRef(null);

  useImperativeHandle(ref, () => ({
    getNavbarHeight: () => {
      return navbarRef.current.offsetHeight;
    },
  }));

  return (
    <Navbar ref={navbarRef} className="bg-background" expand="lg" variant="dark" sticky="top">
      <Container fluid className='justify-content-center'>
        <Navbar.Brand href="#home" className='text-center'>
        <img
              src="/img/SVGLogo.svg"
              width="100%"
              className="d-inline-block align-top banner"
              alt="Banner and logo"
            />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
})

export default TopNav;