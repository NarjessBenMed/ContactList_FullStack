import {
  ADD_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT,
  GET_CONTACTS,
  CONTACT_LOADING
} from "./actionsType";
import axios from "axios";
export const addContact = contact => dispatch => {
  axios.post(`/api/contacts`, contact).then(res => dispatch(getContacts()));
};

export const deleteContact = id => dispatch => {
  axios.delete(`/api/contacts/${id}`).then(res => dispatch(getContacts()));
};

export const editContact = (id, newContact) => dispatch => {
  axios
    .put(`/api/contacts/${id}`, newContact)
    .then(res => dispatch(getContacts()));
};

export const setContactLoading = () => ({
  type: CONTACT_LOADING
});

export const getContacts = () => dispatch => {
  dispatch(setContactLoading());
  axios.get("/api/contacts").then(res =>
    dispatch({
      type: GET_CONTACTS,
      payload: res.data
    })
  );
};
