import { useState, useEffect } from "react";
//import ContactList from "./components/ContactList";
//import ContactRow from "./ContactRow";
import './SelectedContact.module.css'

export default function SelectedContact({ selectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    fetchContact();
  }, [selectedContactId]);

    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        console.log(response)
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  
    function handleClick(){
      setContact(null)
    }

  return (
    <div className="contact">
    {contact ? (
      <div>
        <h3>Contact: {contact.name}</h3>
        <ul>
            <li>Address: {contact.address}</li>
            <li>Email: {contact.email}</li>
            <li>Phone: {contact.phone}</li>
            <li>Website: {contact.website}</li>
        </ul>
      </div>
    ) : (
      ""
    )}
    <button onClick={handleClick}>Close</button>
    </div>
    
  );
}