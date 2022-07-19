
import React, { useEffect, useState } from 'react';
import Beers from './components/Beers';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
    <div className="container">
      <h1>BEERS</h1>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Image</th>
          </tr>
        </thead>
          <Beers />
      </table>
    </div>
  );
}

export default App;
