import { useState } from 'react';
import Link from 'next/link';

const LandingPage = ({ currentUser, tickets, error }) => {
  let ticketList = [];
  if (tickets) {
    ticketList = tickets.map(ticket => {
      return (        
        <tr key={ticket.id}>
          <td>{ticket.title}</td>
          <td>{ticket.price}</td>
          <td>
            <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
              <a href="#">View</a>
            </Link>
          </td>
        </tr>
      )
    })
  }

  return (
    <div>
      <h2>Tickets</h2>
      { error && <p>{error}</p>}
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {ticketList}
        </tbody>
      </table>
    </div>
  );
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
  let error = '';
  try {
    const { data } = await client.get('/api/tickets');
    return { tickets: data, error: null};
  } catch (err) {
    return { tickets: null, error: 'Error while fetching tickets'};
  }
};

export default LandingPage;
