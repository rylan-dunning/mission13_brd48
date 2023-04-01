import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: 'black' }}>
      <ul
        style={{
          display: 'flex',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          justifyContent: 'center',
        }}
      >
        <li style={{ marginRight: '1rem' }}>
          <Link
            to="/"
            style={{
              color: 'white',
              fontFamily: 'fantasy',
              fontSize: '3rem',
            }}
          >
            Home
          </Link>
        </li>
        <li style={{ marginRight: '1rem' }}>
          <Link
            to="/Podcast"
            style={{
              color: 'white',
              fontFamily: 'fantasy',
              fontSize: '3rem',
            }}
          >
            Podcast
          </Link>
        </li>
        <li style={{ marginRight: '1rem' }}>
          <Link
            to="/Movies"
            style={{
              color: 'white',
              fontFamily: 'fantasy',
              fontSize: '3rem',
            }}
          >
            Movie List
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
