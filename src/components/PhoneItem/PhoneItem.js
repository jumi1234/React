import React from "react";
import "./PhoneItem.css";

const PhoneItem = ({ id, name, phone, onClick }) => {
  return (
    <div className="phone_item">
      <div cassName="phone_item_left">
        <div cassName="phone_item_name">{name}</div>
        <div cassName="phone_item_phone">{phone}</div>
      </div>
      <div className="phone_item_right">
        <button onClick={() => onClick(id)}>삭제</button>
      </div>
    </div>
  )
}

export default PhoneItem;
