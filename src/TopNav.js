import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function TopNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary custom-navbar" data-bs-theme="dark" sticky="top">
      <Container fluid className='justify-content-center'>
        <Navbar.Brand href="#home" className='text-center'>
        <img
              src="/img/SVGLogo.svg"
              width="60%"
              // height="auto"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default TopNav;