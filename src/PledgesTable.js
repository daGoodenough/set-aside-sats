import { Table } from 'react-bootstrap';
const PledgesTable = ({ entries }) => {
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
              <td>
                <span>
                  {entry.name + ' '}
                </span> 
                <span>
                  {
                    entry.twitter && (
                      <a href={`https://twitter.com/${entry.twitter}`}>
                        <i class="fa-brands fa-twitter"></i>
                      </a>
                    )
                  }
                </span>
              </td>
              <td>{entry.date}</td>
              <td>{entry.amount_sats}</td>
            </tr>
          ))
          ) :
          "Loading"
        }
      </tbody>
    </Table >
  );
}

export default PledgesTable;
