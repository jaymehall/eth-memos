import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import API from "../../utils/API";

function EditMemoField({ memos, setMemos }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const saveMemo = () => {
    setHasUnsavedChanges(false);
    const memoData = {
      title: title,
      content: content
    };
    API.Post("/api/memos", memoData).then((response) => {
      console.log(response);
      window.location.reload();
    });
  };

  const handleNewMemo = () => {
    if (hasUnsavedChanges) {
      let userWantsToSaveChanges = window.confirm(
        "You have unsaved changes! Do you want to save them before creating a new note?"
      );
      if (userWantsToSaveChanges) {
        saveMemo();
      } else {
        window.location.reload();
      }
    }
  };
  return (
    <Form className="bg-dark text-light">
      <div style={{ display: "flex" }}>
        <div>
          <Form.Control
            className="bg-dark text-light"
            style={{ width: "55vw" }}
            type="text"
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
              setHasUnsavedChanges(true);
            }}
          />
        </div>
        <div>
          <Button variant="btn-secondary text-light" onClick={handleNewMemo}>
            New
          </Button>
          <Button disabled={!hasUnsavedChanges} variant="btn-secondary text-light" onClick={saveMemo}>
            Save
          </Button>
        </div>
      </div>
      <div>
        <Form.Group>
          <Form.Control
            className="border-top border-info bg-dark text-light"
            style={{
              border: "none",
              width: "70vw",
              height: "90vh"
            }}
            as="textarea"
            placeholder="Memo content"
            type="text"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
              setHasUnsavedChanges(true);
            }}
          />
        </Form.Group>
      </div>
    </Form>
  );
}

export default EditMemoField;
