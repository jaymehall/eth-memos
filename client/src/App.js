import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EditMemo from "./pages/EditMemo";

function App() {
  //rebuild heroku packages trigger
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
