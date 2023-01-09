import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Apod from "./pages/Apod";
import DayPicture from "./pages/DayPicture";
import Developers from "./pages/Developers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<Apod />} />
        <Route path="/developers" exact={true} element={<Developers />} />
        <Route path="/daypicture" exact={true} element={<DayPicture />} />
        <Route path="*" element={<Apod />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
