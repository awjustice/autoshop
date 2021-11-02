import React, { useState } from "react";
import "../css/Contact.css";

const Contact = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFirstChange = (event) => {
    setFirst(event.target.value);
    console.log("working right, setting the first name state");
  };

  const handleLastChange = (event) => {
    setLast(event.target.value);
    console.log("working right, setting the last name state");
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    console.log("working right, setting the phone state");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    console.log("working right, setting the email state");
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    console.log("working right, setting the message state");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div id="body">
      <div id="form">
        <h3>Book an Appointment</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="first"
            placeholder="First name"
            value={first}
            onChange={handleFirstChange}
          ></input>
          <br />

          <input
            type="text"
            name="last"
            placeholder="Last name"
            value={last}
            onChange={handleLastChange}
          ></input>
          <br />

          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={phone}
            onChange={handlePhoneChange}
          ></input>
          <br />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          ></input>
          <br />

          <textarea
            rows="8"
            cols="40"
            value={message}
            placeholder="What service do you need?"
            onChange={handleMessageChange}
          ></textarea>
          <br />

          <button id="button" type="submit" value="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
