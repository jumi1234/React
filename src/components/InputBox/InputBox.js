import React from "react";
import "./InputBox.css";

const InputBox = ({ name, phone, onChangeName, onChangePhone, onSubmit }) => {
  return (
    <div className="input_boxes">
      <div className="input_box">
        <div cassName="input_box_name">
          이름
        </div>
        <input type="text" placeholder="이름" name="name" className="input_box_input" onChange={onChangeName} value={name} />
      </div>
      <div className="input_box">
        <div cassName="input_box_name">
          전화번호
        </div>
        <input type="text" placeholder="전화번호" name="phone" className="input_box_input" onChange={onChangePhone} value={phone} />
      </div>
      <button className="input_box_button" onClick={onSubmit}>저장</button>
    </div>
  );
}

export default InputBox;
