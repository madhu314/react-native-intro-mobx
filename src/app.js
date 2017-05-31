/**
 * @flow
 */

import React, { Component } from "react";
import { Provider } from "mobx-react";
import Home from "./Home";
import stores from "./stores";

export default class App extends Component {
  constructor(props: Object) {
    super(props);
  }

  render() {
    return (
      <Provider {...stores}>
        <Home />
      </Provider>
    );
  }
}
