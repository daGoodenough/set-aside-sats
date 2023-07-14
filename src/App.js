import { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import TopNav from './TopNav'
import PledgesTable from './PledgesTable';
import CountContainer from './CountContainer';
import fetchSheetData from './utils/fetchSheetData';
import Mission1 from './Mission1';
import Mission2 from './Mission2';
import Footer from './Footer';

function App() {
  const [data, setData] = useState({});

  const topNavRef = useRef(null);
  const pledgeRef = useRef(null);

  const handleResize = () => {
    console.log("Resisize handled")
    const navbarHeight = topNavRef.current.getNavbarHeight();
    console.log(navbarHeight)
    pledgeRef.current.style.top = `${navbarHeight - 3}px`;
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    
    const timeoutId = setTimeout(handleResize, 3000); // Initial setup

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

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
      <TopNav ref={topNavRef}/>
      <Container>
        <Row className='text-center mt-3'>
          <Mission1 />
        </Row>
        <Row ref={pledgeRef} style={{top: pledgeRef.current?.style.top}} className='align-items-center justify-content-center mt-2 text-center pledge-count'>
          <CountContainer count={data.total_sats} numEntries={data.entries?.length}/>
        </Row>
          <Mission2 />
        <Row className="mt-5">
          <PledgesTable entries={data.entries} />
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
