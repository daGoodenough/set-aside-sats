import { useState, useEffect, Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';

export default function Count({ count }) {
  console.log(count)

  return (
    <>
      {count} satoshis pledged
    </>
  );
}