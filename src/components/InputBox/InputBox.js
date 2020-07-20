import React from "react";
import "./InputBox.css";

const InputBox = () => {
  return (
    <div className="input_boxes">
      <div className="input_box">
        <div cassName="input_box_name">
          이름
        </div>
        <input type="text" placeholder="이름" name="name" className="input_box_input"/>
      </div>
      <div className="input_box">
        <div cassName="input_box_name">
          전화번호
        </div>
        <input type="text" placeholder="전화번호" name="phone" className="input_box_input"/>
      </div>
      <button className="input_box_button">저장</button>
    </div>
  );
}

export default InputBox;
