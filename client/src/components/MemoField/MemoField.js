import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import API from "../../utils/API";
import { useNavigate } from "react-router-dom";
import "./MemoField.css";
import BootstrapModal from "../BootstrapModal/BootstrapModal";

function MemoField({ location, currentMemoInfo }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/edit") {
      setTitle(currentMemoInfo.title);
      setContent(currentMemoInfo.content);
    }
  }, [currentMemoInfo]);

  const saveMemo = () => {
    setHasUnsavedChanges(false);
    const memoData = {
      title: title,
      content: content
    };
    if (location.pathname === "/edit") {
      API.Put(`/api/memos/${currentMemoInfo.id}`, memoData).then((response) => {
        const data = response.data;
        navigate("/edit", {
          state: { id: data.id, content: data.content, title: data.title }
        });
        window.location.reload();
      });
    }
    if (location.pathname === "/") {
      API.Post("/api/memos", memoData).then((response) => {
        const data = response.data;
        navigate("/edit", {
          state: { id: data.id, content: data.content, title: data.title }
        });
      });
    }
  };

  const handleNewMemo = () => {
    if (hasUnsavedChanges) {
      setShowModal(true);
    } else {
      navigate("/")
    }
  };

  const handleModalNo = () => {
    setShowModal(false);
    navigate("/");
    setTitle("");
    setContent("");
  };

  const handleModalYes = () => {
    saveMemo();
    setTitle("");
    setContent("");
    setShowModal(false);
  };

  return (
    <Form className="bg-dark text-light">
      <div style={{ display: "flex" }}>
        <BootstrapModal
          noOnClick={handleModalNo}
          yesOnClick={handleModalYes}
          show={showModal}
          setShow={setShowModal}
        />
        <div>
          <Form.Control
            className="bg-dark text-light"
            style={{ width: "55vw" }}
            type="text"
            value={title}
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
              setHasUnsavedChanges(true);
            }}
          />
        </div>
        <div>
          <Button
            disabled={location.pathname === "/" ? !hasUnsavedChanges : false}
            variant="btn-secondary text-light"
            onClick={handleNewMemo}
          >
            New
          </Button>
          <Button
            disabled={!hasUnsavedChanges}
            variant="btn-secondary text-light"
            onClick={saveMemo}
          >
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

export default MemoField;
