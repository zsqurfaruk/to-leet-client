import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "#1490a3d6",
};

function Spinner() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#1490a3d6");

  return (
    <div className="sweet-loading">
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;
