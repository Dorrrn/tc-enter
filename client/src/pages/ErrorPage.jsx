import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
   return (
      <div className="ErrorPage">
         <h1>Sorry, something is messed up :-/ </h1>
         <Link to="/">Home</Link>
      </div>
   );
}
