import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Header/Navbar";
import News from "./Components/Body/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<News pagesize={6} newsname="ukrain" />} />
            <Route
              path="/business"
              element={<News pagesize={6} newsname="business" />}
            />
            <Route
              path="/science"
              element={<News pagesize={6} newsname="science" />}
            />
            <Route
              path="/apple"
              element={<News pagesize={6} newsname="apple" />}
            />
            <Route
              path="/football"
              element={<News pagesize={6} newsname="football" />}
            />
            <Route
              path="/politics"
              element={<News pagesize={6} newsname="politics" />}
            />
          </Routes>
        </Router>
      </>
    );
  }
}
