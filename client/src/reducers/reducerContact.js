import {
  ADD_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT,
  GET_CONTACTS,
  CONTACT_LOADING
} from "../actions/actionsType";

const initialState = {
  contacts: [],
  loading: false
};

const reducerContact = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return { ...state, contacts: [action.payload, ...state.contacts] };

    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(el => el._id !== action.payload),
        loading: false
      };

    case GET_CONTACTS:
      return { ...state, contacts: action.payload, loading: false };
    case CONTACT_LOADING:
      return { ...state, loading: true };
    case EDIT_CONTACT:
      return state.contacts.map(el =>
        el._id == action.payload.id
          ? {
              ...action.payload.newContact
            }
          : el
      );

    default:
      return state;
  }
};

export default reducerContact;
