/**
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Button } from "react-native";

import { observable } from "mobx";
import { observer, inject } from "mobx-react";

@inject("userStore", "counterStore")
export default class Home extends Component {
  constructor(props: Object) {
    super(props);
  }

  render() {
    console.log("Render home");
    return (
      <View style={styles.container}>
        <View style={styles.topRow}>
          <Counter />
        </View>
        <View style={styles.bottomRow}>
          <View style={styles.twoRowsContainer}>
            <View
              style={[styles.gridContainer, { backgroundColor: "#A8CF85" }]}
            >
              <FirstName />
            </View>
            <View
              style={[styles.gridContainer, { backgroundColor: "#7BC4BC" }]}
            >
              <LastName />
            </View>
          </View>
          <View style={styles.twoRowsContainer}>
            <View
              style={[styles.gridContainer, { backgroundColor: "#FBB569" }]}
            >
              <Email />
            </View>
            <View
              style={[styles.gridContainer, { backgroundColor: "#4D6AD0" }]}
            >
              <Phone />
            </View>
          </View>
        </View>
        <View style={styles.fullName}>
          <FullName />
        </View>
        <View style={styles.actionsRow}>
          <Actions />
        </View>
      </View>
    );
  }
}

@inject("counterStore")
@observer
class Counter extends Component {
  render() {
    console.log("Render Counter");
    return <Text>Count: {this.props.counterStore.count}</Text>;
  }
}

@inject("userStore")
@observer
class FirstName extends Component {
  render() {
    console.log("Render First Name");
    return <Text>FirstName: {this.props.userStore.firstName}</Text>;
  }
}

@inject("userStore")
@observer
class LastName extends Component {
  render() {
    console.log("Render Last Name");
    return <Text>LastName: {this.props.userStore.lastName}</Text>;
  }
}

@inject("userStore")
@observer
class Email extends Component {
  render() {
    console.log("Render Email");
    return <Text>Email: {this.props.userStore.email}</Text>;
  }
}

@inject("userStore")
@observer
class Phone extends Component {
  render() {
    console.log("Render Phone");
    return <Text>Phone: {this.props.userStore.phone}</Text>;
  }
}

@inject("userStore")
@observer
class FullName extends Component {
  render() {
    console.log("Render Fullname");
    return <Text>FullName: {this.props.userStore.fullName}</Text>;
  }
}

@inject("userStore", "counterStore")
class Actions extends Component {
  firstNames = ["John", "Ron", "Sam"];
  lastNames = ["Dovers", "Movers", "Rovers"];
  emails = ["hello1@gmail.com", "hello2@gmail.com", "hello3@gmail.com"];
  phones = ["2211335544", "32211445566", "4455663322"];
  firstNameIndex = 0;
  lastNameIndex = 0;
  emailIndex = 0;
  phoneIndex = 0;
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              onPress={() => this.props.counterStore.increment()}
              title="Increment Counter"
              color="#805841"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              onPress={() => this.props.counterStore.decrement()}
              title="Decrement Counter"
              color="#805841"
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              onPress={() => this.changeFirstName()}
              title="Change First Name"
              color="#445665"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              style={styles.button}
              onPress={() => this.changeLastName()}
              title="Change Last Name"
              color="#445665"
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => this.changeEmail()}
              title="Change Email"
              color="#445665"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => this.changePhone()}
              title="Change Phone"
              color="#445665"
            />
          </View>
        </View>
      </View>
    );
  }

  changeFirstName() {
    let firstName = this.firstNames[
      this.firstNameIndex % this.firstNames.length
    ];
    this.firstNameIndex++;
    this.props.userStore.data({ firstName: firstName });
  }

  changeLastName() {
    let lastName = this.lastNames[this.lastNameIndex % this.lastNames.length];
    this.lastNameIndex++;
    this.props.userStore.data({ lastName: lastName });
  }

  changeEmail() {
    let email = this.emails[this.emailIndex % this.emails.length];
    this.emailIndex++;
    this.props.userStore.data({ email: email });
  }

  changePhone() {
    let phone = this.phones[this.phoneIndex % this.phones.length];
    this.phoneIndex++;
    this.props.userStore.data({ phone: phone });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  topRow: {
    flex: 1,
    backgroundColor: "#D4456A",
    alignItems: "center",
    justifyContent: "center"
  },
  bottomRow: {
    flex: 3,
    backgroundColor: "#006E60"
  },
  fullName: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5A2A2"
  },
  actionsRow: {
    flex: 2,
    padding: 16
  },
  twoRowsContainer: {
    flex: 1,
    backgroundColor: "#445665",
    flexDirection: "row"
  },
  gridContainer: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  },
  row: {
    flex: 1,
    flexDirection: "row"
  },
  buttonContainer: {
    flex: 1,
    padding: 4
  }
});
