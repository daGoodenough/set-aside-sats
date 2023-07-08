import { useState, useEffect, Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';

export default function Count({ count, numEntries }) {
  console.log(count)

  return (
    <>
    <div>
      <span className='pledge-count count'>
      {count + " "} 
      </span>
      <span className='pledge-count'>
        sats
      </span>
    </div>
    <div>
      pledged by {numEntries} contributors
    </div>
    </>
  );
}