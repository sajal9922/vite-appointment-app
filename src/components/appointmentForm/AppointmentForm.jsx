import React, { useRef } from 'react';
import { ContactPicker } from '../contactPicker/ContactPicker';

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString('en-US').split('/');
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const titleRef = useRef(null);
  const dateRef = useRef(null);
  const timeRef = useRef(null);
  const contactRef = useRef(null);

  const handleTitleChange = () => setTitle(titleRef.current.value);
  const handleDateChange = () => setDate(dateRef.current.value);
  const handleTimeChange = () => setTime(timeRef.current.value);
  const handleContactChange = () => setContact(contactRef.current.value);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          ref={titleRef}
          value={title}
          onChange={handleTitleChange}
          required
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          ref={dateRef}
          value={date}
          onChange={handleDateChange}
          min={getTodayString()}
          required
        />
      </label>
      <label>
        Time:
        <input
          type="time"
          ref={timeRef}
          value={time}
          onChange={handleTimeChange}
          required
        />
      </label>
      <label>
        Contact:
        <ContactPicker
          contacts={contacts}
          ref={contactRef}
          value={contact}
          onChange={handleContactChange}
          required
        />
      </label>
      <input type="submit" value="Add Appointment" />
    </form>
  );
};
