import React, { useState } from "react";
import send from "./images/Button.png";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};
    if (name.trim() === "") {
      newErrors.name = "Name is required.";
    }
    if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (message.trim() === "") {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Handle form submission here
      console.log("Form submitted:", name, email, message);
    }
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-upper">
          <div className="new">
            <p id="news">Newslleter</p>
            <p className="news-content">
              Get news about articles and updates in
            </p>
            <p>your inbox.</p>
          </div>
          <div>
            <div className="inputs">
              <input
                type="text"
                placeholder="NAME"
                name="name"
                value={name}
                onChange={handleInputChange}
              />
              {errors.name && <p className="error">{errors.name}</p>}
              <input
                type="email"
                placeholder="EMAIL"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
              <input
                type="text"
                placeholder="MESSAGE"
                name="message"
                value={message}
                onChange={handleInputChange}
              />
              {errors.message && <p className="error">{errors.message}</p>}
            </div>
          </div>
        </div>
        <div className="get-in">
          <div className="first">
            <h1 id="get" className="in-touch">
              GET
            </h1>
            <h1 id="in" className="in-touch">
              IN{"   "}
            </h1>
            <h1 id="touch" className="in-touch">
              TOUCH
            </h1>
          </div>
          <button className="send" type="submit">
            <img src={send} alt="Send" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
