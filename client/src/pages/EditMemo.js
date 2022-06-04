import React from "react";
import Memos from "../components/Memos/Memos";
import MemoField from "./MemoField";
import {useNavigate, useLocation} from "react-router-dom"


function EditMemo({ memos }) {
    
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
  return (
    <div style={{ display: "flex" }}>
      <Memos memos={memos} />
      <MemoField memos={memos} location={location} />
    </div>
  );
}

export default EditMemo;
