import React, { useEffect, useState } from "react";
import "./App.css";
import EditMemoField from "./components/EditMemoField/EditMemoField";
import Memos from "./components/Memos/Memos";
import NavBar from "./components/NavBar/NavBar";
import API from "./utils/API";

function App() {
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    API.Get("/api/memos").then((response) => {
      console.log(response);
      setMemos(response.data);
    });
  }, []);

  return (
    <div className="App bg-dark">
      <NavBar />
      <div style={{ display: "flex" }}>
        <Memos memos={memos} />
        <EditMemoField />
      </div>
    </div>
  );
}

export default App;
