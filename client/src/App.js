import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import ContactList from "./Composants/ContactList";
import ModalAddContact from "./Composants/ModalAddContact";
import { Route } from "react-router-dom";
import {Redirect} from 'react-router-dom'
function App() {
  return (
    <div className="App">
    
      <Redirect to="/">
        <h1>Contact App</h1>
      </Redirect>
      <Link to="/" >

        <h1>Contact App</h1>
      </Link>
      <div className="appButt">
        <Link to={"/ContactList"}>
          <button className="contactList">Contact List </button>
        </Link>

        <ModalAddContact />
      </div>
      <Route exact path="/contactList" component={ContactList} />
    </div>
  );
}

export default App;
