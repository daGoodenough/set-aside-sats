import { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import TopNav from './TopNav'
import Count from './Count'
import PledgeButton from './PledgeButton';
import PledgesTable from './PledgesTable';
import fetchSheetData from './utils/fetchSheetData';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchSheetData();
        // setData({ total_sats: 500, entries: [{ name: 'bob', date: '05/5/2', amount_sats: 25 }, { name: 'bob', date: '05/5/2', amount_sats: 25 }] });
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
        <Row className='justify-content-center mt-5'>
          <Count count={data.total_sats} />
        </Row>
        <Row className="mt-5">
          <PledgeButton/>
        </Row>
        <Row className="mt-5">
          <PledgesTable  entries={data.entries} />
        </Row>
      </Container>
    </>
  );
}

export default App;
