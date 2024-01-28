import React, { useState } from 'react';
import './Form.css';

const Forms = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNo: ""
  });

  const [focus, setFocus] = useState({
    firstname: false,
    lastname: false,
    email: false,
    phoneNo: false
  });

  const [alert, setAlert] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNo: ""
  });

  const [register, setRegister] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleFocus = (name) => {
    setFocus(prevFocus => ({ ...prevFocus, [name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const messageBox = {};

    if (!formData.firstname) messageBox.firstname = "Please enter your first name";
    if (!formData.lastname) messageBox.lastname = "Please enter your last name";
    if (!formData.email) messageBox.email = "Please enter your email";
    if (!formData.phoneNo) {
      messageBox.phoneNo = "Please enter your phone number";
    } else if (!/^\d{10}$/.test(formData.phoneNo)) {
      messageBox.phoneNo = "Please enter a 10-digit number";
    }

    setAlert(messageBox);

    if (Object.keys(messageBox).length === 0) {
      setRegister(true);
    }
  };

  return (
    <div className='cont'>
      {register && <div className='registration-success'>Registration Successful!</div>}
      <form onSubmit={handleSubmit} className='form'>
        <label>
          First Name:
          <input
            type="text"
            name='firstname'
            value={formData.firstname}
            onChange={handleChange}
            onFocus={() => handleFocus("firstname")}
            style={{ borderColor: focus.firstname ? "blue" : "gray", outline: "none" }}
            placeholder='Enter your first name'
          />
          <div className="error">{alert.firstname}</div>
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name='lastname'
            value={formData.lastname}
            onChange={handleChange}
            onFocus={() => handleFocus("lastname")}
            style={{ borderColor: focus.lastname ? "blue" : "gray", outline: "none" }}
            placeholder='Enter your last name'
          />
          <div className="error">{alert.lastname}</div>
        </label>
        <label>
          Email:
          <input
            type="email"
            name='email'
            value={formData.email}
            onChange={handleChange}
            onFocus={() => handleFocus("email")}
            style={{ borderColor: focus.email ? "blue" : "gray", outline: "none" }}
            placeholder='Enter your email'
          />
          <div className="error">{alert.email}</div>
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            name='phoneNo'
            value={formData.phoneNo}
            onChange={handleChange}
            onFocus={() => handleFocus("phoneNo")}
            style={{ borderColor: focus.phoneNo ? "blue" : "gray", outline: "none" }}
            placeholder='Enter your phone number'
          />
          <div className="error">{alert.phoneNo}</div>
        </label>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Forms;
