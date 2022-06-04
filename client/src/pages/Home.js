import React from "react";
import Memos from "../components/Memos/Memos";
import MemoField from "./MemoField";
import { useLocation } from "react-router-dom";

function Home({ memos }) {
  const location = useLocation();
  return (
    <div style={{ display: "flex" }}>
      <Memos memos={memos} />
      <MemoField memos={memos} location={location} />
    </div>
  );
}

export default Home;
