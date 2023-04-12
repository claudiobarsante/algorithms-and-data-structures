/*
We provided some simple React template code. Your goal is to create a simple form at the top that allows the user to enter in a first name, last name, and phone number and there should be a submit button. Once the submit button is pressed, the information should be displayed in a list below (automatically sorted by last name) along with all the previous information that was entered. This way the application can function as a simple phone book. When your application loads, the input fields (not the phone book list) should be prepopulated with the following values already:

First name = Coder
Last name = Byte
Phone = 8885559999

You are free to add classes and styles, but make sure you leave the element ID's as they are. Submit your code once it is complete and our system will validate your output.*/

import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border: 'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
};

const INITIAL_STATE = {
  userFirstname: 'Coder',
  userLastname: 'Byte',
  userPhone: '8885559999'
};

function PhoneBookForm({ addEntryToPhoneBook }) {
  const [contact, setContact] = useState(INITIAL_STATE);

  function handleInputChange(e) {
    const field = e.target.name;
    const value = e.target.value;
    setContact(previous => ({ ...previous, [field]: value }));
  }
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        addEntryToPhoneBook(contact);
      }}
      style={style.form.container}
    >
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userFirstname"
        name="userFirstname"
        type="text"
        value={contact.userFirstname}
        onChange={e => handleInputChange(e)}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userLastname"
        name="userLastname"
        type="text"
        value={contact.userLastname}
        onChange={e => handleInputChange(e)}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userPhone"
        name="userPhone"
        type="text"
        value={contact.userPhone}
        onChange={e => handleInputChange(e)}
      />
      <br />
      <input
        style={style.form.submitBtn}
        className="submitButton"
        type="submit"
        value="Add User"
      />
    </form>
  );
}

function InformationTable({ contacts }) {
  return (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>
        {contacts.length > 0 &&
          contacts.map(d => (
            <tr key={d.userFirstname}>
              <td style={style.tableCell}>{d.userFirstname}</td>
              <td style={style.tableCell}>{d.userLastname}</td>
              <td style={style.tableCell}>{d.userPhone}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

function Application(props) {
  const [data, setData] = useState([]);

  function addEntryToPhoneBook(contact) {
    setData(previous => {
      previous.push(contact);
      const updated = [...previous];
      updated.sort((a, b) => a.userLastname.localeCompare(b.userLastname));
      return updated;
    });
  }

  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook} />
      <InformationTable contacts={data} />
    </section>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Application />);
