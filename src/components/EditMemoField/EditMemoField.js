import React from "react";
import { Form } from "react-bootstrap";

function EditMemoField({ input, setInput }) {
  return (
    <Form className="bg-dark text-light">
      <Form.Group>
        <Form.Control
          style={{
            background: "#212529",
            border: "none",
            width: "70vw",
            height: "100vh",
            color: "whitesmoke"
          }}
          as="textarea"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </Form.Group>
    </Form>
  );
}

export default EditMemoField;
