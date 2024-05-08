import React, { useState } from "react";

function TryModel() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setResult(`Result for input: ${input}`);
    setInput("");
  };

  return (
    <div className="try-model center">
      <div className="model-card">
        <h1>Try Model</h1>
        <form onSubmit={handleSubmit} className="try-model-form">
          <input
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="Enter input"
          />
          <button type="submit" className="all-btn">
            Submit
          </button>
        </form>
        {result && <div className="try-model-result">{result}</div>}
        <div style={{ marginTop: "20px" }}>
          <a
            href="#"
            onClick={() => window.history.back()}
            className="all-button"
          >
            Back
          </a>
        </div>
      </div>
    </div>
  );
}

export default TryModel;
