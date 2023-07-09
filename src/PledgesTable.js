import { Table } from 'react-bootstrap';
const PledgesTable = ({ entries }) => {
  return (
    <>
      <h2 className='text-center contributors mb-3'>Contributors</h2>
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
                        <a href={`https://twitter.com/${entry.twitter}`} target="__blank">
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
    </>
  );
}

export default PledgesTable;
