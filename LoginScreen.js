import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
import { AsyncStorage } from '@react-native-community/async-storage';


class LoginScreen extends Component {
  static navigationOptions = {
    header: false
  }
  constructor(props) {
    super(props);
    this.state = {
      //HARD CODED FOR TESTING. CHANGE BACK LATER
      logInemail: 'sulav2009@live.com',
      logInPassword: 'password',
      res: ''
    };
  }

  setLoginResponse = async () => {
    try {
      console.log("RESPONSE :", this.state.res);
      await AsyncStorage.setItem('@logInResponse', this.state.res)
    } catch (e) {
    }
    console.log('Done')
  }

  login() {
    //console.log("Login function");
    return fetch("http://10.0.2.2:3333/api/v0.0.5/login",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.state.logInemail,
          password: this.state.logInPassword
        })
      })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          res: responseJson,
        });
        this.setLoginResponse();
        // debug //console.log("Func Res: ", this.state.res);
        this.props.navigation.navigate('LoggedIn')
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.TitleText}>LOG IN</Text>
        <TextInput style={styles.ListText}
          underlineColorAndroid="transparent"
          placeholder="Enter your email here"
          autoCapitalize="none"
          onChangeText={text => this.setState({ logInemail: text })}
        />
        <TextInput style={styles.ListText}
          underlineColorAndroid="transparent"
          placeholder="Enter password here"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={text => this.setState({ logInPassword: text })}
        />
        <TouchableOpacity
          style={styles.Button}
          onPress=
          {
            () => this.login()
          }>
          <Text style={styles.ButtonText}> Log In </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.Button}
          onPress=
          {
            () => this.props.navigation.navigate('Account')
          }>
          <Text style={styles.ButtonText}> Back to Create account </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#B0E0E6'
  },

  ButtonText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold'
  },

  TitleText: {
    color: 'black',
    fontSize: 34,
    fontWeight: 'bold',
    margin: 15,
    textAlign: "center"
  },

  ListText: {
    color: 'black',
    fontSize: 18,
    textAlign: "center",
    margin: 10,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    borderColor: 'black',
    borderWidth: 2,
  },

  Button: {
    backgroundColor: '#008080',
    padding: 5,
    alignItems: 'center',
    margin: 15,
    borderRadius: 15,
    height: 50,
  },
});
