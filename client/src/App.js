import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import SelectOption from "react-select/async";

function App() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const [alldata, setAlldata] = useState([]);

  //to work with select option

  const [inputvalue, setInputvalue] = useState("");
  const [selectedValue, setSelectedvalue] = useState(null);

  const handleInputchange = (value) => {
    setInputvalue(value);
  };

  const handleChange = (value) => {
    setSelectedvalue(value);
  };

  const loadData = () => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        setAlldata(result);
        console.log("Our Data from api is:" + result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <React.Fragment>
      <div className="main-container">
        <h5>Selete List Items</h5>
        <select>
          {alldata.map((item, index) => (
            <>
              <option value={item.id}>{item.title}</option>
            </>
          ))}
        </select>
      </div>
    </React.Fragment>
  );
}

export default App;
