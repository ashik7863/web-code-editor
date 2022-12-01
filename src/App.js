import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button";
import Editor from "./components/Editor";

function App() {
  const [openedEditor, setOpenedEditor] = useState("html");

  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState(``);

  const onTabClick = (editorName) => {
    setOpenedEditor(editorName);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(
        `
          <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
          </html>
        `
      );
    }, 250);

    return () => clearTimeout(timeOut);
  }, [html, css, js]);

  return (
    <div className="App">
      <h1>Online Code Editor</h1>
      <div className="language-section">
        <div className="sec-head">
          <div className="sp">Select Language : </div>
        </div>
        <Button
          title="HTML"
          onClick={() => {
            onTabClick("html");
          }}
        />
        <Button
          title="CSS"
          onClick={() => {
            onTabClick("css");
          }}
        />
        <Button
          title="JavaScript"
          onClick={() => {
            onTabClick("js");
          }}
        />
      </div>
      <div className="editor-container">
        {openedEditor === "html" ? (
          <Editor
            language="xml"
            displayName="HTML"
            value={html}
            setEditorState={setHtml}
          />
        ) : openedEditor === "css" ? (
          <Editor
            language="css"
            displayName="CSS"
            value={css}
            setEditorState={setCss}
          />
        ) : (
          <Editor
            language="javascript"
            displayName="JS"
            value={js}
            setEditorState={setJs}
          />
        )}
      </div>
      <label htmlFor="">Output :</label>
      <div className="output">
        <iframe id="my_iframe" srcDoc={srcDoc} />
      </div>
    </div>
  );
}

export default App;
