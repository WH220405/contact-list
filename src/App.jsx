import { useState } from 'react'
import SelectedContact from './components/SelectedContact'
import ContactList from './components/ContactList'
import './App.css'



function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  

  return (
    <>
      {selectedContactId ? (
        <SelectedContact
        selectedContactId={selectedContactId}
        onSelect={selectedContactId}
        />
      ) : (
        <ContactList onSelect={setSelectedContactId}/>
      )}
    </>
  );
}


export default App
