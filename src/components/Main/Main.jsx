import React, { useState } from "react";
import "./Main.css";
const bot_Token = "6714877771:AAHjhYSI1QCXr74V76owsIhEJN-FA_pjvhE";
const chatId = "1976708153";

const initialState = {
  fname: "",
  lname: "",
  other: "",
};

const Kontakt = () => {
  const [data, setData] = useState(initialState);
  const [messageStatus, setMessageStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fname, lname, order, other } = data;

    if (!fname || !lname) {
      alert("Please fill out first name and last name.");
      return;
    }

    const text = `First Name: ${fname}\nLast Name: ${lname}\nOrder: ${order}\nOther: ${other}`;
    const url = `https://api.telegram.org/bot${bot_Token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
      text
    )}`;

    fetch(url)
      .then((response) => {
        if (response.ok) {
          setMessageStatus("success");
          console.log(setMessageStatus("success"));
          setData(initialState); // Clear form fields
        } else {
          setMessageStatus("error");
          console.log(setMessageStatus("error"));
        }
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        setMessageStatus("error");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="continer">
      <form onSubmit={handleSubmit}>
        <input
          value={data.fname}
          onChange={handleChange}
          type="text"
          name="fname"
          placeholder="First Name"
        />
        <input
          value={data.lname}
          onChange={handleChange}
          type="text"
          name="lname"
          placeholder="Last Name"
        />
        <input
          value={data.order}
          onChange={handleChange}
          type="text"
          name="order"
          placeholder="Order"
        />
        <textarea
          value={data.other}
          onChange={handleChange}
          name="other"
          placeholder="Other"
        ></textarea>

        <button className="all" type="submit">
          Buy now
        </button>
      </form>
      {messageStatus === "success" && (
        <p className="success-message">Message sent successfully!</p>
      )}
      {messageStatus === "error" && (
        <p className="error-message">
          Failed to send message. Please try again later.
        </p>
      )}
    </div>
  );
};

export default Kontakt;
