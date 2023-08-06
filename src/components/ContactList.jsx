import { useState, useEffect } from "react";
import ContactRow from "./ContactRow.jsx";

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

export default function ContactList({ onSelect }) {
  const [contacts, setContacts] = useState(dummyContacts);
  //const [error, setError] = useState(null);


  useEffect(() => {
    async function fetchContacts() {
      try {
        setError(null)
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/"
          );
        const result = await response.json();
        setContacts(result);
      } catch (error) {
        console.log(error)
        //setError(error);
      }
    }
    fetchContacts();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr className="row-titles">
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.map((contact) => (
          <ContactRow contact={contact} key={contact.id} onSelect={onSelect} />
        ))}
      </tbody>
    </table>
  );
}