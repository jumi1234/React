import React from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import PhoneList from "./components/PhoneList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as inputFunc from "./store/modules/input";
import * as dataFunc from "./store/modules/data";

const App = ({ name, phone, data, inputFunc, dataFunc }) => {

  const handleChange = e => {
    const { name, value } = e.target;
    inputFunc.setInputValue({ name, value });
  }

  const handleSubmit = () => {
    if (name === "" || phone === "") return;

    dataFunc.appendData({
      name, phone
    });
    inputFunc.setInputValue({
      name: 'name',
      value: ''
    });
    inputFunc.setInputValue({
      name: 'phone',
      value: ''
    });
  }

  const handleRemove = id => {
    dataFunc.removeData(id);
  }

  return(
    <div className="container">
      <InputBox name={name} phone={phone} onChange={handleChange} onSubmit={handleSubmit}/>
      <PhoneList list={data} deleteItem={handleRemove}/>
    </div>
  )
}

export default connect(
    state => ({
      name: state.input.name,
      phone: state.input.phone,
      data: state.data
    }),
    dispatch => ({
      inputFunc: bindActionCreators(inputFunc, dispatch),
      dataFunc: bindActionCreators(dataFunc, dispatch)
    })
)(App);
