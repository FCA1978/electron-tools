import React from "react";
import { Input } from "antd";
const { TextArea } = Input;

function rightContext() {
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e);
  };
  return (
    <div className="rightContextContent">
      <TextArea
        disabled
        placeholder="translation result"
        allowClear
        onChange={onChange}
      />
    </div>
  );
}
export default rightContext;
