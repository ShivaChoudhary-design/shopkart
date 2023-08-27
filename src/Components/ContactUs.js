import React from "react";
import send from "./images/Button.png";
import { FormProvider } from "react-hook-form";

const ContactUs = () => {
  return (
    <FormProvider>
      <div className="form">
        <div className="form-upper">
          <div className="new">
            <p id="news">Newslleter</p>
            <p className="news-content">
              Get news about articles and updates in
            </p>
            <p>your inbox.</p>
          </div>
          <div>
            <form className="inputs" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="NAME" />
              <input id="email" type="email" placeholder="EMAIL" />
              <input id="message" type="text" placeholder="MESSAGE" />
            </form>
          </div>
        </div>
        <div className="get-in">
          <div className="first">
            <h1 className="in-touch">
              GET <br></br>IN TOUCH
            </h1>
          </div>
          <button className="send">
            <img src={send}></img>
          </button>
        </div>
      </div>
    </FormProvider>
  );
};

export default ContactUs;
