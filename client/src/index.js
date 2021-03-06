import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import axios from "axios";
import reduxThunk from "redux-thunk";
import "./index.css";
import App from "./components/App";
import {unregister} from "./registerServiceWorker";
import reducers from "./reducers/index";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
window.axios = axios;
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
unregister();
