import { useState } from "react";
import { useForm } from "@formspree/react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    useForm("mvgqwzwg");

    // Reset form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      comments: "",
    });
  };

  return (
    <div className='contact-page'>
      <div className='contact-container'>
        <header className='contact-header'>
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Send us a message!</p>
        </header>

        <form
          className='contact-form'
          onSubmit={handleSubmit}
          method='POST'
          action='https://formspree.io/f/mvgqwzwg'
        >
          <div className='form-row'>
            <div className='form-group'>
              <label htmlFor='firstName' className='form-label'>
                First Name
              </label>
              <input
                type='text'
                id='firstName'
                name='firstName'
                value={formData.firstName}
                onChange={handleInputChange}
                className='form-input'
                placeholder='Enter your first name'
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor='lastName' className='form-label'>
                Last Name
              </label>
              <input
                type='text'
                id='lastName'
                name='lastName'
                value={formData.lastName}
                onChange={handleInputChange}
                className='form-input'
                placeholder='Enter your last name'
                required
              />
            </div>
          </div>

          <div className='form-group'>
            <label htmlFor='email' className='form-label'>
              Email Address
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              className='form-input'
              placeholder='Enter your email address'
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor='comments' className='form-label'>
              Comments
            </label>
            <textarea
              id='comments'
              name='comments'
              value={formData.comments}
              onChange={handleInputChange}
              className='form-textarea'
              placeholder='Enter your message or comments'
              rows='5'
              required
            />
          </div>

          <button
            type='submit'
            className='submit-btn'
            disabled={
              !formData.firstName ||
              !formData.lastName ||
              !formData.email ||
              !formData.comments
            }
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
