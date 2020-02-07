import React, { Component } from "react";
import "./ModalAddContact.css";
import { Button, Modal } from "react-bootstrap";
import { editContact } from "../actions/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ModalEditContact extends Component {
  state = {
    show: false,
    name: this.props.contact.name,
    phoneNumber: this.props.contact.phoneNumber,
    email: this.props.contact.email
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
        <Button onClick={this.handleClose}>Edit </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit contact</Modal.Title>
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
                this.props.editContact(
                  this.props.contact._id,

                  {
                    name: this.state.name,
                    phoneNumber: this.state.phoneNumber,
                    email: this.state.email
                  }
                );

                this.handleClose();
              }}
            >
              Edit contact
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default connect(null, { editContact })(ModalEditContact);
