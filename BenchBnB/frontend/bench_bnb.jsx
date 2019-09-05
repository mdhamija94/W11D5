import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionUtil from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.signup = SessionUtil.signup;
  window.login = SessionUtil.login;
  window.logout = SessionUtil.logout;
  
  ReactDOM.render( <h1>Welcome to BenchBnB</h1>, root )
});