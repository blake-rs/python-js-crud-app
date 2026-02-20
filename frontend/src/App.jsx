import { useState, useEffect } from "react";
import "./App.css";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";

function App() {
  const [contacts, setContacts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const response = await fetch("http://127.0.0.1:5000//contacts");
    const data = await response.json();
    setContacts(data.contacts);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openCreateModal = () => {
    if (!isModalOpen) setIsModalOpen(true);
  };

  return (
    <>
      <ContactList contacts={contacts} />
      <button onClick={openCreateModal}>Create New Contact</button>
      {isModalOpen && (
        <div class="modal">
          <div class="modal-content">
            <span class="close" onClick={closeModal}>&times;</span>
            <ContactForm />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
