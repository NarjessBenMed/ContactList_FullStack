import React, { Component } from "react";
import Contact from "./Contact";
import "./ContactList.css";
import { getContacts } from "../actions/actions";
import { connect } from "react-redux";

class ContactList extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    return (
      <div className="ContactList">
        {this.props.contacts.map(el => (
          <Contact contact={el} key={el._id} id={el._id} />
        ))}
      </div>
    );
  }
}
const mapStatetoProps = state => ({
  contacts: state.contacts
});

export default connect(mapStatetoProps, { getContacts })(ContactList);
