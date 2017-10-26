import React, { Component } from "react";
import { Provider } from "react-redux";

import "./App.css";
import store from "./store";
import Main from "./Main";
import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div class="container-fluid">
          <NavBar />
          <Main />
        </div>
      </Provider>
    );
  }
}

export default App;
