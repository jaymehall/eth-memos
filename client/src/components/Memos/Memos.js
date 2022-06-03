import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

function Memos({ memos }) {
  const memoList = memos.map((memo, index) => {
    return (
      <ListGroupItem key={index} className="text-light bg-dark border-info">
        <strong>{memo.title}</strong>
        <div>
          <small>Unique Id: {memo["_id"]}</small>
          <small>{memo.date}</small>
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
          memoList
        ) : (
          <ListGroupItem className="text-light bg-dark">Create a memo to get started!</ListGroupItem>
        )}
      </ListGroup>
    </aside>
  );
}

export default Memos;
