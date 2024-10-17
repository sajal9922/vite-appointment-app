import React, { useRef } from 'react';

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);

  const handleNameChange = () => setName(nameRef.current.value);

  const handlePhoneChange = () => setPhone(phoneRef.current.value);

  const handleEmailChange = () => setEmail(emailRef.current.value);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          ref={nameRef}
          value={name}
          onChange={handleNameChange}
          required
        />
      </label>
      <label>
        Phone:
        <input
          type="tel"
          ref={phoneRef}
          value={phone}
          onChange={handlePhoneChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          ref={emailRef}
          value={email}
          onChange={handleEmailChange}
          required
        />
      </label>
      <input type="submit" value="Add Contact" />
    </form>
  );
};
