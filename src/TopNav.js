import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function TopNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary custom-navbar" data-bs-theme="dark" sticky="top">
      <Container className='justify-content-center'>
        <Navbar.Brand href="#home">Pledge For GenZ</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default TopNav;