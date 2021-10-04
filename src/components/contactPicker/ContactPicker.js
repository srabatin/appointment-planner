import React from "react";

export const ContactPicker = ({ contacts, onChange }) => {
  const options = contacts.map((contact) => {
    return (
      <option key={contact.name} value={contact.name}>{contact.name}</option>
    )
  })

  return (
    <select onChange={onChange}>
      <option key="0" value="0" selected="selected">No contact selected</option>
      {options}
    </select>

  );
};
