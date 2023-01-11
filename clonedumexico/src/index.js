import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import Home from "../src/pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<Home />}></Route>
        <Route path="/about" exact={true} element={<About />}></Route>
        <Route path="/contact" exact={true} element={<Contact />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
