import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import TopNav from './TopNav'
import Count from './Count'
import PledgeButton from './PledgeButton';
import PledgesTable from './PledgesTable';
import fetchSheetData from './utils/fetchSheetData';
import Mission1 from './Mission1';
import Mission2 from './Mission2';
import Footer from './Footer';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetchSheetData();
        const response = { total_sats: 500, entries: [{ name: 'bob', date: '05/5/2', amount_sats: 25, twitter: 'da_goodenough' }, { name: 'bob', date: '05/5/2', amount_sats: 25 }] };
        setData(response);
      } catch (error) {
        console.warn(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <TopNav />
      <Container>
        <Row className='text-center mt-3'>
          <Mission1 />
        </Row>
        <Row className='align-items-center justify-content-center mt-2 text-center pledge-count'>
          <Col xs={8}>
            <Count count={data.total_sats} numEntries={data.entries?.length} />
          </Col>
          <Col xs={4}>
            <PledgeButton />
          </Col>
        </Row>
        <Row className='justify-content-center mt-3'>
          <Mission2 />
        </Row>
        <Row className="mt-5">
          <PledgesTable entries={data.entries} />
        </Row>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
