import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { getLastSync } from "../../utils/helpers";
import API from "../../utils/API";
import { useNavigate, useLocation } from "react-router-dom";
import "./Memos.css"

function Memos({ setCurrentMemoInfo }) {
  const [memos, setMemos] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    API.Get("/api/memos").then((response) => {
      setMemos(response.data.reverse());
    });
  }, []);

  const memoList = memos.map((memo, index) => {
    return (
      <ListGroupItem key={index} className="text-light bg-dark border-info">
        <strong>{memo.title}</strong>
        <div>
          <div>
            <small>Unique Id: {memo["_id"]}</small>
          </div>
          <div>
            <small>
              {location.pathname === "/"
                ? getLastSync(memo.createdAt)
                : getLastSync(memo.updatedAt)}
            </small>
          </div>
        </div>
      </ListGroupItem>
    );
  });
  return (
    <aside
      style={{ height: "110vh", width: "35vw" }}
      className="border border-info"
    >
      <ListGroup>
        {memos.length !== 0 ? (
          memos.map((memo) => {
            return (
              <ListGroupItem
                key={memo["_id"]}
                className="text-light bg-dark border-info"
                onClick={() => {
                  if (location.pathname === "/edit") {
                    setCurrentMemoInfo({
                      id: memo["_id"],
                      title: memo.title,
                      content: memo.content
                    });
                  }
                  if (location.pathname === "/") {
                    navigate("/edit", {
                      state: {
                        id: memo["_id"],
                        content: memo.content,
                        title: memo.title
                      }
                    });
                  }
                }}
              >
                <strong>{memo.title}</strong>
                <div>
                  <div>
                    <small>Unique Id: {memo["_id"]}</small>
                  </div>
                  <div>
                    <small>{getLastSync(memo.updatedAt)}</small>
                  </div>
                </div>
              </ListGroupItem>
            );
          })
        ) : (
          <ListGroupItem className="text-light bg-dark">
            Create a memo to get started!
          </ListGroupItem>
        )}
      </ListGroup>
    </aside>
  );
}

export default Memos;
