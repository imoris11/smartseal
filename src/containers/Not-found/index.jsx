import React,{useEffect} from 'react';
import './not-found.css';
import { Link } from 'react-router-dom';

export default function NotFound() {
   useEffect(() => {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
   }, []);
  return (
    <div className='not-found border-none'>
      <h1>Not Found</h1>
      <h4>
        Go Back <Link to='/'>Home</Link>
      </h4>
    </div>
  );
}
