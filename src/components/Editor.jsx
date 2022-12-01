import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";

import "codemirror/theme/the-matrix.css";
import "codemirror/theme/night.css";

import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closetag";

import { Controlled as EditorComponent } from "react-codemirror2";

const Editor = ({ language, value, setEditorState }) => {
  const [theme, setTheme] = useState("dracula");
  const handleChange = (editor, data, value) => {
    setEditorState(value);
  };

  const themeArray = ["dracula", "the-matrix", "night"];

  return (
    <div className="editor-head">
      <div className="editor-container">
        <div className="sp">Choose a theme : </div>
        <select
          className="dropdown"
          onChange={(e) => {
            setTheme(e.target.value);
          }}
        >
          {themeArray.map((theme) => (
            <option value={theme}>{theme}</option>
          ))}
        </select>
      </div>
      <div className="code-input">
        <EditorComponent
          onBeforeChange={handleChange}
          value={value}
          options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            lineNumbers: true,
            theme: theme,
            autoCloseTags: true,
            autoCloseBrackets: true,
          }}
        />
      </div>
    </div>
  );
};

export default Editor;
