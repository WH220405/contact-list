import { useState } from "react";
import ContactList from "./components/ContactList.jsx";
import SelectedContact from "./components/SelectedContact";
import "./App.css";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      { selectedContactId ? (
        <SelectedContact
          selectedContactId={selectedContactId}
          onSelect={setSelectedContactId}
        />
      ) : (
        <ContactList onSelect={setSelectedContactId} />
      )}
    </>
  );
}