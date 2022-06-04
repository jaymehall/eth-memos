import React, { useEffect, useState } from "react";
import "./App.css";
// import EditMemoField from "./components/EditMemoField/EditMemoField";
// import Memos from "./components/Memos/Memos";
import NavBar from "./components/NavBar/NavBar";
import API from "./utils/API";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EditMemo from "./pages/EditMemo";

function App() {

  return (
    <div className="App bg-dark">
      <NavBar />
      <div style={{ display: "flex" }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit" element={<EditMemo />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
