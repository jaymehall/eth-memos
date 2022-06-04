import React, { useState } from "react";
import Memos from "../components/Memos/Memos";
import MemoField from "../components/MemoField/MemoField";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  const [currentMemoInfo, setCurrentMemoInfo] = useState({
    id: "",
    title: "",
    content: ""
  });
  return (
    <div style={{ display: "flex" }}>
      <Memos setCurrentMemoInfo={setCurrentMemoInfo} />
      <MemoField currentMemoInfo={currentMemoInfo} location={location} />
    </div>
  );
}

export default Home;
