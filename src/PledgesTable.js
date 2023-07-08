import {Table} from 'react-bootstrap';
const PledgesTable = ({entries}) => {
  console.log(entries);
  return (
   <Table striped variant='dark'>
    <thead>
      <tr>
        <th>Name</th>
        <th>Date Pledged</th>
        <th>Amount (sats)</th>
      </tr>
    </thead>
    <tbody>
      {entries ? 
        (entries.map((entry, index) => (
          <tr key={index}>
            <td><div>{entry.name}</div><div>{entry.twitter ? entry.twitter : null}</div></td>
            <td>{entry.date}</td>
            <td>{entry.amount_sats}</td>
          </tr>
        ))
        ) :
        "Loading"
      }
    </tbody>
   </Table>
  );
}

export default PledgesTable;
