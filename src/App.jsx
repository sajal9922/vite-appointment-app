import React from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom';
import Root, { ROUTES } from './components/root/Root';
import { AppointmentsPage } from './containers/appointmentsPage/AppointmentsPage';
import { ContactsPage } from './containers/contactsPage/ContactsPage';
import { useState } from 'react';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([
    { name: 'John Doe', phone: '123-456-7890', email: 'john.doe@example.com' },
    {
      name: 'Jane Smith',
      phone: '987-654-3210',
      email: 'jane.smith@example.com',
    },
  ]);
  const [appointments, setAppointments] = useState([
    {
      title: 'Meeting with John',
      contact: 'John Doe',
      date: '2023-10-01',
      time: '10:00',
    },
    {
      title: 'Lunch with Jane',
      contact: 'Jane Smith',
      date: '2023-10-02',
      time: '12:00',
    },
  ]);

  const addContact = (contact) => {
    setContacts([contact, ...contacts]);
  };
  const addAppointment = (appointment) => {
    setAppointments([appointment, ...appointments]);
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
        <Route
          path={ROUTES.CONTACTS}
          element={<ContactsPage addContact={addContact} contacts={contacts} />}
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={
            <AppointmentsPage
              addAppointment={addAppointment}
              appointments={appointments}
              contacts={contacts}
            />
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
