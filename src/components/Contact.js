import React, { useState, useRef } from "react";
import emailjs from 'emailjs-com';

export const ContactForm = () => {
  const contactFormRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    const emailData = new FormData();
    emailData.append('firstName', formData.firstName);
    emailData.append('lastName', formData.lastName);
    emailData.append('email', formData.email);
    emailData.append('subject', formData.subject);
    emailData.append('message', formData.message);
    
    emailjs.sendForm('service_tj3kgf3', 'template_y9mfika', contactFormRef.current, 'mILGrRJ5roX2YEXwZ')
    .then((result) => {
      console.log(result.text);
      console.log("Sent successfully!");
      alert("Message sent successfully!");
    }, (error) => {
      console.log(error.text);
      console.log("Failure to send.");
      alert(error.text);
    });
  };

  return (
    <div className="contact-container" id="contactSection">
      <div className="contact-form">
        <h2>Send Message </h2>
        <form ref={contactFormRef} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;