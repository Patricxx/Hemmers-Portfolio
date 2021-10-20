import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && email && message) {
      const serviceId = "3b1b6adad06eee59f2e17f136132bb55";
      const templateId = "template_id";
      const userId = "user_1nl9ln13H5i2CExy439BE";
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <Container>
      <h1>
        <div className="title">Contact</div>
      </h1>
      <div className="contact-form">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button onClick={submit}>Send Message</button>

        <span className={emailSent ? "visible" : null}>
          <i>Thank you for your message, we will be in touch in no time!</i>
        </span>
      </div>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  margin-left: 15%;
  margin-right: 15%;
  height: 20vh;
  align-items: center;
  justify-content: center;
  .title {
    opacity: 0.8;
    color: #fff;
    text-align: center;
  }

  h1 {
    font-size: 3rem;
    padding-top: 6rem;
    padding-bottom: 2rem;

    @media (max-width: 40rem) {
      font-size: 2.5rem;
      padding: 1.5rem;
      padding-top: 3rem;
    }
  }
  i {
    color: #fff;
    opacity: 0.8;
    font-size: 0.8rem;
    font-weight: 200;
  }

  .contact-form {
    opacity: 0.8;
    position: absolute;
    background: #000000;
    font-family: sans-serif;
    padding: 20px;
    top: 50%;
    left: 50%;
    border-radius: 10px;
    transform: translate(-50%, -50%);
    box-shadow: 0 5px 20px rgba(255, 255, 255, 0.3);
    @media (max-width: 40rem) {
      margin-top: 1rem;
      width: 15rem;
    }

    input,
    textarea {
      background: #000000;
      color: #fff;
      width: 100%;
      border: 0;
      padding: 10px 20px;
      border-radius: 10px;
      box-sizing: border-box;
      margin-bottom: 15px;
      border: solid 1px #ed6a5a;
      /* box-shadow: 0 5px 20px rgba(255, 255, 255, 0.3); */
    }
    a textarea {
      height: 100px;
      resize: vertical;
    }

    button {
      width: 100%;
      padding: 10px;
      border: 0;
      cursor: pointer;
      background: #000000;
      font-weight: bold;
      color: #fff;
      font-size: 18px;
      margin-bottom: 5px;
      border-radius: 10px;
      border: solid 1px #ed6a5a;
      text-transform: uppercase;
      &:hover {
        background-color: #ed6a5a;
        color: #000000;
      }

      span {
        color: #fff;
        display: none;
        text-align: center;

        &.visible {
          color: #fff;
          display: block;
        }
      }
    }
  }
`;

export default Contact;
