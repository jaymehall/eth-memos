import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { getLastSync } from "../../utils/helpers";

function Memos({ memos }) {
  // useEffect(() => {

  // }, [memos])
  console.log(memos);
  const memoList = memos.map((memo, index) => {
    return (
      <ListGroupItem key={index} className="text-light bg-dark border-info">
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
  });
  return (
    <aside
      style={{ height: "110vh", width: "35vw" }}
      className="border border-info"
    >
      <ListGroup>
        {memos.length !== 0 ? (
          memos.map((memo, index) => {
            return (
              <ListGroupItem key={index} className="text-light bg-dark border-info">
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
