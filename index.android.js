/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry } from "react-native";
import App from "./src/app";

export default class MobxLearnings extends Component {
  render() {
    return <App />;
  }
}
AppRegistry.registerComponent("MobxLearnings", () => MobxLearnings);
