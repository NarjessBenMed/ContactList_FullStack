import React, { Component } from "react";
import './ModalAddContact.css'
import { Button, Modal } from "react-bootstrap";
import { addContact } from "../actions/actions"
import { connect } from "react-redux";

class ModalAddContact extends Component {
  state = {
    show: false,
    name: "",
    phoneNumber:"",
    email: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleClose = () => this.setState({ show: !this.state.show });

  render() {
    return (
      <div>
        <Button onClick={this.handleClose}>
          Add new Contact
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add new contact</Modal.Title>
          </Modal.Header>
          <Modal.Body className="ModalBody">
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
              placeholder="contact's name"
            />

            <input
              type="text"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
              placeholder="contact 's email"
            />

            <input
              type="text"
              name="phoneNumber"
              onChange={this.handleChange}
              value={this.state.phoneNumber}
              placeholder="contact 's phone number"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={e => {
                this.props.addContact({
                  _id: Date.now(),
                  name: this.state.name,
                  email: this.state.email,
                  phoneNumber: this.state.phoneNumber
                });
                this.setState({ name:"", email: "", phoneNumber:""});

                this.handleClose();
              }}
            >
              Add contact
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default connect(null, { addContact })(ModalAddContact)