import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const singleurl = "https://jsonplaceholder.typicode.com/users/";

  const [alldata, setAlldata] = useState([]);
  const [singleuser, setSingleuser] = useState([]);

  //input filed data

  const [countresult, setCountresult] = useState(0);
  const [inputdata, setInputdata] = useState("");

  //to work with select option

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

  const handleClick = (e) => {
    fetch(singleurl + e.target.value, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setSingleuser(result);
          console.log("Our Data from api is:" + result);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    setCountresult("");
  };

  const addsumTwonumbers = (e) => {
    e.preventDefault();
    var num1 =
      (parseInt(singleuser.id) + parseInt(singleuser.id)) * parseInt(inputdata);
    console.log("Addition result:" + num1);
    setCountresult(num1);
    setInputdata("");
  };

  return (
    <React.Fragment>
      <div className="main-container">
        <h5>Selete List Items</h5>
        <select onChange={handleClick}>
          <option value="0">---Select Username---</option>
          {alldata.map((item, index) => (
            <>
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            </>
          ))}
        </select>
        {/* <p>{singleuser.name}</p> */}
        <p>{singleuser.name}</p>
        <p>{singleuser.email}</p>
        <p>{singleuser.address?.street}</p>

        <p>{singleuser.address?.city}</p>

        <p>Phone:{singleuser.phone}</p>
        <p>{singleuser.website}</p>

        <p>{singleuser.id}</p>

        <p>{parseInt(singleuser.id) * parseInt(singleuser.id)}</p>

        {singleuser.id && <p>Now can show input field</p>}

        {singleuser.id && (
          <form>
            <h1>
              {countresult && <p>Result is:</p>}
              {countresult ? parseFloat(countresult).toFixed(2) : countresult}
            </h1>

            <div>
              <label>Add Change Date: {inputdata}</label>
              <input
                placeholder="add your number"
                type="number"
                step="0.1"
                value={inputdata}
                onChange={(e) => setInputdata(e.target.value)}
              />
            </div>
            <button onClick={addsumTwonumbers}>Add</button>
          </form>
        )}
      </div>
    </React.Fragment>
  );
}

export default App;
