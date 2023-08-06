import { useState, useEffect } from "react";

export default function SelectedContact({ selectedContactId, onSelect }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, []);

  function handleClose() {
    onSelect(null);
    setContact(null);
  }

  return (
    <>
      <div className="contact">
        {contact ? (
          <div>
            <h3>Contact: {contact.name}</h3>
            <ul>
              <li>
                Lives at: {contact.address.suite} {contact.address.street}{" "}
                {contact.address.city} {contact.address.zipcode}
              </li>
              <li>Phone: {contact.phone}</li>
              <li>Works at: {contact.company.name}</li>
            </ul>
          </div>
        ) : (
          ""
        )}
        <button onClick={handleClose}>Return</button>
      </div>
    </>
  );
}