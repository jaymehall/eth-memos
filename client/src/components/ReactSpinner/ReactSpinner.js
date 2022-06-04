import React from "react";
import { SpinnerInfinity } from "spinners-react";

function ReactSpinner() {
  return (
    <div style={{ padding: "20px" }}>
      <SpinnerInfinity
        size="100px"
        thickness={100}
        color="#640064"
        secondaryColor="#0dcaf0"
      />
    </div>
  );
}

export default ReactSpinner;
