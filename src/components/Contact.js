// Contact.js
import React, { useState, useEffect } from "react";
import "../assests/styling/Contact.css";
import { useForm, ValidationError } from '@formspree/react';
import { FaPhone } from 'react-icons/fa'; // Import the Envelope icon from Font Awesome

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [state, handleSubmit] = useForm("xkndwrpv");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      console.log("Success");
      setShowSuccessMessage(true);

      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch("http://localhost:3001/send-email", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       console.log("Email sent successfully");
  //     } else {
  //       console.error("Failed to send email");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div id="contact-section">
      <h1>CONTACT <FaPhone /></h1>
      {showSuccessMessage && (
        <div>
          <div className="backdrop"></div>
          <div className="success-popup">
            <p>Message Sent Successfully!</p>
          </div>
        </div>
      )}
      <form action="https://formspree.io/f/xkndwrpv" method="POST" onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          placeholder="Name"
          onChange={handleChange}
          required
        />

        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Email"
        />

        <label htmlFor="message"></label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Message"
        ></textarea>
        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

        <button type="submit" className="success-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
