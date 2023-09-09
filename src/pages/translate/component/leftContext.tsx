import React from "react";
import { Input } from "antd";
const { TextArea } = Input;

function leftContext() {
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e);
  };

  return (
    <div className="leftContextContent">
      <TextArea
        placeholder="Please enter a word or a long sentence"
        allowClear
        onChange={onChange}
      />
    </div>
  );
}
export default leftContext;
