import React, { forwardRef } from 'react';

export const ContactPicker = forwardRef(
  ({ contacts, onChange, value, name }, ref) => {
    return (
      <select onChange={onChange} value={value} name={name} ref={ref}>
        <option value="">No Contact Selected</option>
        {contacts.map((contact, index) => (
          <option key={index} value={contact.name}>
            {contact.name}
          </option>
        ))}
      </select>
    );
  }
);
