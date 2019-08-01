import { hot } from 'react-hot-loader/root';

import React from 'react';
import '../css/App.css';
import Login from './Login';


function App() {
  return (
      <section className="login-background-container">

              <Login />
      </section>

  );
}

export default hot(App);
