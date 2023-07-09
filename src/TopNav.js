import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function TopNav() {
  return (
    <Navbar className="bg-background" expand="lg" variant="dark" sticky="top">
      <Container fluid className='justify-content-center'>
        <Navbar.Brand href="#home" className='text-center'>
        <img
              src="/img/SVGLogo.svg"
              width="75%"
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