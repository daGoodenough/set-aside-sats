import { Col, Row } from 'react-bootstrap';

const Mission2 = () => {
  return (
    <>
      <Row className='justify-content-center mt-3'>

        <Col xs={12} lg={8}>
          <ol className="mission">
            <li>
              Create a new cold wallet address and label it with intent and purpose: <br />
              <ul>
                <li>Future kid 1 - $25</li>
                <li>Future person 2 - $50</li>
              </ul>

            </li>
            <li>
              Purchase NEW Bitcoin so that it is taken off the market before large entities scoop it all up. Send to the newly created/ labeled wallet. HODL.
            </li>
            <li>
              Sign the pledge, with name (or remain anon)
              AND the date and amount purchased
            </li>
            <li>
              Spread the word far and wide!! And come back as many times, create as many wallets, for as many people as you can as often as you feel driven to.
            </li>
          </ol>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col xs={12} md={6} className='d-flex align-items-center my-3'>
          <p className="mission">Let's see how much bitcoin we can save for the next generations!  We have the power as a collective to make an unselfish act turn into millions and millions of sats saved for the best reason and purpose possible. Pledge with me, Genz4btc, to SET ASIDE SATS all over the world! <br />
          </p>
        </Col>
        <Col xs={12} md={6} className="d-flex align-items-center my-3">
          <img src="/img/bubble_blower.jpg" alt="person being set free from handcuffs" width='100%' style={{ borderRadius: "0.375rem" }} />
        </Col>
        <Col xs={{span: 12, order: 6}} md={{ span: 6, order: "last"}} className="d-flex align-items-center my-3">
          <p className='mission'>Save Bitcoin for the <strong>people</strong> of the world. Adopt a future individual's first Satoshis and save them for their own chance at freedom.
            Become someone's hero then...by setting aside sats today!
          </p>
        </Col>
        <Col xs={12} md={6} className="d-flex align-items-center my-3">
          <img src="/img/tree_climbers.jpg" alt="person being set free from handcuffs" width='100%' style={{ borderRadius: "0.375rem" }} />
        </Col>
      </Row>
    </>
  );
}

export default Mission2;
