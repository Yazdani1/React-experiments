import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const singleurl = "https://jsonplaceholder.typicode.com/users/";

  const [alldata, setAlldata] = useState([]);
  const [singleuser, setSingleuser] = useState([]);

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

    fetch(singleurl+e.target.value, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        setSingleuser(result);
        console.log("Our Data from api is:" + result);
      })
      .catch((err) => {
        console.log(err);
      });
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


        <p>{JSON.stringify(singleuser)}</p>

      </div>
    </React.Fragment>
  );
}

export default App;
