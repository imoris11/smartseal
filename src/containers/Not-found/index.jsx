import React from 'react';
import './not-found.css';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='not-found border-none'>
      <h1>Not Found</h1>
      <h4>
        Go Back <Link to='/'>Home</Link>
      </h4>
    </div>
  );
}
