import { Col } from 'react-bootstrap';

import Count from './Count';
import PledgeButton from './PledgeButton';

const CountContainer = ({count, numEntries}) => {
  return (
    <>
      <Col xs={8}>
        <Count count={count} numEntries={numEntries} />
      </Col>
      <Col xs={4}>
        <PledgeButton />
      </Col>
    </>
  );
}

export default CountContainer;
