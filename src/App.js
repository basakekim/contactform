import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import ContactForm from "./components/ContactForm";
import ListItem from "./components/ListItem";

const Defaultcontacts = [
  {
    name: "Test Contact Info",
    email: "Test.com",
    city: "Istanbul",
    country: "Turkey",
    address: "Test  ",
    mesage: "Test"
  }
];

function App() {
  const [filledContacts, setFilledContacts] = React.useState(Defaultcontacts);

  function handleChange(newValue) {
    setFilledContacts([...filledContacts, newValue]);
  }
  const contactList = filledContacts.map((item, index) => (
    <ListItem key={index} contactObject={item} />
  ));
  return (
    <div>
      <h1 className="text-center m-5"> Contact Form </h1>
      <ContactForm onChange={handleChange} />
      {contactList}
    </div>
  );
}

export default App;
