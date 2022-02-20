import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import Select from "./Select";
import Navbar from "./Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ReducerHooks from "./ReducerHooks";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact  path={"/"} component={Select} />
        <Route path={"/usereducer-hooks"} component={ReducerHooks} />
      </Switch>
    </BrowserRouter>

    // <React.Fragment>
    //   <Navbar />
    //   <Select />
    // </React.Fragment>
  );
}

export default App;
