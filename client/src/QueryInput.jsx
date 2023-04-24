import { useState } from "react";
import "./QueryInput.css";
import Results from "./Results";
import Pagination from "./Pagination";

// Functional Component for Input of Query 
const QueryInput = () => {
    // State Variables for Query Input
  const [query, setQuery] = useState("0");
  const [querynumber, setQueryNumber] = useState(null);

    // Function to handle submit of query
  const handleSubmit = async (e) => {
    e.preventDefault();
    setQueryNumber(query);
  };

  
  return (
    <div>
      <div className="input-section d-flex justify-content-center align-items-center flex-wrap">
        <h1 className="h1 text-white">Find in</h1>
        <div className="bg-white d-flex align-items-center my-3 px-3 rounded mx-3">
          <p className="bg-white fw-bold py-1">Users</p>
        </div>
        <h1 className="h1 text-white">which</h1>

        <select
          name=""
          className="bg-white my-3 px-3 rounded mx-3 py-1"
          onChange={(e) => setQuery(e.target.value)}
        >
          <option className="bg-white" value="0">
            have income lower than $5 and have a BMW or Mercedes car
          </option>
          <option className="bg-white" value="1">
            {" "}
            have phone price greater than 10,000 and are Male
          </option>
          <option className="bg-white" value="2">
            {" "}
            have quote character length &gt; 15 and email including last name
            starting with 'M'
          </option>
          <option className="bg-white" value="3">
            {" "}
            have a “BMW”, “Mercedes” or “Audi” car and whose email does not
            include any digit.
          </option>
          <option className="bg-white" value="4">
            {" "}
            cities have the highest number of users showing their average income
            (Top 10).
          </option>
        </select>

        <button className="btn btn-success" onClick={handleSubmit}>
          Run
        </button>
      </div>
      <Pagination query={querynumber} />
    </div>
  );
};

export default QueryInput;
