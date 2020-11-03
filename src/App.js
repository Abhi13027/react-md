import React, { useState } from "react";
import ReactMarkdown from "react-markdown/with-html";
import gfm from "remark-gfm";
import "./App.css";

function App() {
  const [input, setInput] = useState();
  return (
    <div className="App">
      <textarea
        autoFocus
        className="textarea"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <ReactMarkdown
        allowDangerousHtml
        children={input}
        className="markdown"
        plugins={gfm}
      ></ReactMarkdown>
    </div>
  );
}

export default App;
