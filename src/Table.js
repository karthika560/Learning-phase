import React from 'react'

import "./Table.css";

function Table() {
  return (
    <div className="table-container">
      <h2 className="title">Difference Between State and Props</h2>
      <table className="comparison-table">
        <thead>
          <tr>
            <th>No</th>
            <th>State</th>
            <th>Props</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>State is managed within the component.</td>
            <td>Props are passed from parent to child component.</td>
          </tr>
          <tr>
            <td>2</td>
            <td>State can be changed using setState or useState.</td>
            <td>Props are read-only and cannot be modified.</td>
          </tr>
          <tr>
            <td>3</td>
            <td>State is mutable.</td>
            <td>Props are immutable.</td>
          </tr>
          <tr>
            <td>4</td>
            <td>State is used to manage dynamic data.</td>
            <td>Props are used to pass data and event handlers.</td>
          </tr>
          <tr>
            <td>5</td>
            <td>State belongs to the component itself.</td>
            <td>Props belong to the parent component.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;