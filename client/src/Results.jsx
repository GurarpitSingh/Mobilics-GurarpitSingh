import React, { Component } from "react";
import { useState, useEffect, memo } from "react";


// Functional Component for displaying results 
const Results = memo((props) => {
// State Variables 
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

//   Effect hook containing Fetch for API 
  useEffect(() => {
    if (props.query !== null) {
      fetch(
        `http://localhost:3001/users${props.query}/page${props.page}/limit10`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }
  }, [props.page, props.query]);


//   If no query is selected 
  if (props.query === null) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <p className="text-white mt-2 h1">Please select a query and Run</p>
      </div>
    );
  }
//   checking query type and displaying conditional results 
  if (props.query === "4") {
    return (
      <div className="d-flex justify-content-center">
        <table className="table rounded text-white" style={{ width: "90%" }}>
          <thead className="table-success">
            <tr>
              <th scope="col">#</th>
              <th scope="col">City</th>
              <th scope="col">Count</th>
              <th scope="col">Average Income</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, key) => {
              return (
                <tr>
                  <th scope="row">{key + 1}</th>
                  <td>{item.city}</td>
                  <td>{item.count}</td>
                  <td>{item.avg_income}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );

    // Different Conditional Formatting for different query
  } else if (
    props.query === "0" ||
    props.query === "1" ||
    props.query === "2" ||
    props.query === "3"
  ) {
    return (
      <div>
        <div className="d-flex justify-content-center">
          <table className="table rounded text-white" style={{ width: "90%" }}>
            <thead className="table-success">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">E-mail</th>
                <th scope="col">Gender</th>
                <th scope="col">Income</th>
                <th scope="col">Car</th>
                <th scope="col">Quote</th>
                <th scope="col">Phone Price</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, key) => {
                return (
                  <tr>
                    <th scope="row">{key + 1}</th>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>{item.gender}</td>
                    <td>{item.income}</td>
                    <td>{item.car}</td>
                    <td>{item.quote}</td>
                    <td>{item.phone_price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
});

export default Results;
