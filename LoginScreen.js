import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Alert, AsyncStorage } from 'react-native';

const LOGIN_TOKEN = 'login_token';
const LOGIN_ID = 'login_id';

class LoginScreen extends Component {
  static navigationOptions = {
    headerShown: false
  }
  constructor(props) {
    super(props);
    this.state = {
      //HARD CODED FOR TESTING. CHANGE BACK LATER
      logInemail: 'sulav2009@live.com',
      logInPassword: 'password',
      logInResponse: [],
      loggedIn: false,
      userID: '',
      userToken: '',
    };
  }

/**sync storeToken(userToken) {
    try {
      await AsyncStorage.setItem(LOGIN_TOKEN, userToken);
      //this.getToken();
    } catch (error) {
      console.log("Error in storing the token")
    }
  }

  async getToken() {
    try {
      let userToken = await AsyncStorage.getItem(userToken);
      console.log("token is:" + userToken);
    } catch (error) {
      console.log("Error in storing the token")
    }
  }

  async removeToken() {
    try {
      let userToken = await AsyncStorage.removeItem(userToken);
      this.getToken();
    } catch (error) {
      console.log("Error")
    }
  }**/



  login() {
    return fetch("http://10.0.2.2:3333/api/v0.0.5/login",
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
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
          logInResponse: responseJson,
          //userID : logInResponse[0], //get the first array which will be the userID
          //userToken : logInResponse[1], //get the second array whihc will be the token
          isLoggedIn: true,
        });
        Alert.alert("Succesfully logged in !");
      })
      .catch((error) => {
        console.error(error);
      });
  }


  render() {
    const loggedStatus = this.state.isLoggedIn;
    if (loggedStatus == true) {
      this.props.navigation.navigate('LoggedIn')
      //this.storeToken(userToken) //storing response
    }
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
          <Text style={styles.ButtonText}> Log in </Text>
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
