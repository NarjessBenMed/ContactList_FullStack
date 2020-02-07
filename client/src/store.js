import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducerContact from "./reducers/reducerContact";

const store = createStore(
  reducerContact,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
