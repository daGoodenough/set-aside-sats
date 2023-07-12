import { useState } from 'react';
import { Row, Col, Container, Toast, ToastContainer } from 'react-bootstrap';

const Footer = () => {
  const [toastShow, setToastShow] = useState(false);

  const handleCopy = async (type) => {
    const btcAddr = "bc1qqq8fxfgffdxs0d5egc357aetqxqqtvd3crct32";
    const lnUrl = "lnurl1dp68gurn8ghj7ampd3kx2ar0veekzar0wd5xjtnrdakj7tnhv4kxctttdehhwm30d3h82unvwqhkwetw0g6xyarrpesl2p";

    let textToCopy = "";

    if (type === "btc") {
      textToCopy = btcAddr;
    }

    if (type === "ln") {
      textToCopy = lnUrl;
    }

    try {
      await navigator.clipboard.writeText(textToCopy);
      setToastShow(true);
    } catch (err) {
      console.log('Error in copy: ', err);
    }
  }

  return (
    <>

      <footer className='footer py-5 mt-5'>
        <Container fluid>
          <Row className='justify-content-around text-center'>
            <Col xs={12} sm={10} md={6} lg={4}>
              <Row className='text-center'>
                <Col xs={6}>
                  <img src='/img/donate_onchain.png' width="100%" />
                  <p onClick={() => handleCopy('btc')} className='donation'>On-Chain <i className="fa-solid fa-copy"></i></p>
                </Col>
                <Col xs={6}>
                  <img src='/img/donate_ln.png' width="100%" />
                  <p onClick={() => handleCopy('ln')} className='donation'>Lightning <i className="fa-solid fa-copy"></i></p>
                </Col>
              </Row>
              <Row>
                <p style={{ textAlign: 'justify' }}>
                  If you'd like to support GenZ4btc in his mission on educating youth about bitcoin and monetary systems or building his future platform <a href="https://www.genz4btc.com" target='__blank__'>www.genz4btc.com</a>, then donate on-chain or over LN.
                </p>
              </Row>
            </Col>
            <Col sm={12} md={3} className='d-flex align-items-center justify-content-center'>
              <div>
                <p>
                  Twitter: <a href="https://twitter.com/genZ4btc" target='__blank__'>@genZ4btc</a>
                </p>
              </div>
            </Col>
            <Col sm={12} md={3} className='d-flex align-items-center justify-content-center'>
              <div>
                <p>
                  Website: <a href="https://genz4btc.com" target="__blank__">genz4btc.com</a>
                </p>
              </div>
            </Col>
          </Row>
          <Row className='justify-content-center'>
            <img
              src="/img/genz_logo_banner.jpeg"
              className="d-inline-block align-top banner"
              alt="GenZ4BTC logo and banner"
            />
          </Row>
        </Container>
        <ToastContainer
          className="p-3 text-center"
          position="top-center"
          style={{ zIndex: 10 }}

        >
          <Toast onClose={() => setToastShow(false)} show={toastShow} delay={3000} autohide bg="success">
            <Toast.Body>Address Copied to Clipboard!</Toast.Body>
          </Toast>
        </ToastContainer>
      </footer>
    </>
  );
}

export default Footer;
