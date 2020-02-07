import React from "react";
import "./Contact.css";
import { connect } from "react-redux";
import { deleteContact } from "../actions/actions";
import ModalEditContact from "./ModalEditContact";
function Contact(props) {
  return (
    <div className="contact">
      <h5 className="contactName"> Name : {props.contact.name} </h5>
      <h5 className="contactTel"> Telephone: {props.contact.phoneNumber} </h5>
      <h5 className="contactEmail"> Email: {props.contact.email} </h5>

      <div className="DeleteModify">
        <button onClick={() => props.deleteContact(props.id)}>Delete </button>
        <ModalEditContact contact={props.contact} />
      </div>
    </div>
  );
}

export default connect(null, { deleteContact })(Contact);
