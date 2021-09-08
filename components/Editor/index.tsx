import React, { FC, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type EditorProps = {
  value: string;
  onChange: (v: string) => void;
};

export const Editor: FC<EditorProps> = ({ value, onChange }) => {
  return (
    <div data-testid="editor">
      <ReactQuill theme="snow" value={value} onChange={onChange} />{" "}
    </div>
  );
};
