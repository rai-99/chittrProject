import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, AsyncStorage } from 'react-native';

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

  setLoginResponse = async () => { //sets the login cust id and token in async storage
    try {
      await AsyncStorage.setItem('@logInResponse:token', "" + this.state.res.token);
      await AsyncStorage.setItem('@logInResponse:id', "" + this.state.res.id);
    } catch (e) {
      console.log("SetLoginResponse function error : ", e); //error message catch
    }
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
          res: {
            "token": responseJson.token,
            "id": responseJson.id
          }
        });
        this.setLoginResponse();
        console.log("The login response: ", this.state.res);
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
    backgroundColor: '#FFFFFF'
  },

  ButtonText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold'
  },

  TitleText: {
    color: 'black',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: "center",
    margin: 15
  },

  ListText: {
    color: 'black',
    borderRadius: 15,
    fontSize: 18,
    textAlign: "center",
    backgroundColor: "#F5F5F5",
    alignItems: 'center',
    margin: 10,
    borderColor: 'black',
    borderWidth: 2,
  },

  Button: {
    backgroundColor: '#233947',
    padding: 5,
    borderRadius: 15,
    alignItems: 'center',
    margin: 15,
    height: 50,
  },
});
