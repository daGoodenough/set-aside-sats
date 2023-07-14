import { Col } from 'react-bootstrap';

const Mission1 = () => {
  return (
    <>
      <Col className='mission1 mission d-flex align-items-center'>
        <p>
          GenZ4btc has a passion for Bitcoin and it's principles.
          Keeping Bitcoin available and attainable to better the lives of <strong>individuals</strong> around the world!
          For this reason GenZ4btc is encouraging all Bitcoiners to <strong>SET ASIDE SATS</strong>!
        </p>
      </Col>
      <Col lg={6}>
        <img src="/img/cuffs_free.jpg" alt="person being set free from handcuffs" width='100%' style={{ borderRadius: "0.375rem" }} />
      </Col>
    </>
  );
}

export default Mission1;
