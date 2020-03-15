import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Alert, TouchableOpacity, AsyncStorage } from 'react-native';


class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //HARD CODED FOR TESTING. CHANGE BACK LATER
      Newgiven_name: 'Sulav',
      Newfamily_name: 'Rai',
      Newemail: 'sulav2009@live.com',
      Newpassword: 'password',
      isLoading: true,
      TOKEN: '',
      ID: ''
    };
  }

  componentDidMount() {
    this.getToken()
  }

  getToken = async () => {
    try {
      let res = await AsyncStorage.getItem('@logInResponse:token');
      let res2 = await AsyncStorage.getItem('@logInResponse:id');
      console.log("Token is  :", res + "     id is :" + res2);
      this.setState({
        TOKEN : res,
        ID : res2});   
    } catch (error) {
      console.log("GET TOKEN ERROR : " + error);
    }
  }

  async logout() {
    try {
      fetch("http://10.0.2.2:3333/api/v0.0.5/logout", 
      {
        method: 'POST',
        headers: {
          'X-Authorization': this.state.TOKEN
        },
      });
      navigation.navigate('Home')
    }
    catch (error) {
      console.error(error);
    }
  }

  editAccount() {
    try{
      fetch("http://10.0.2.2:3333/api/v0.0.5/user/"+this.state.ID,
      {
        method: 'PATCH',
        headers: {
          'X-Authorization': this.state.TOKEN
        },
        body: JSON.stringify({
          given_name: this.state.Newgiven_name,
          family_name: this.state.Newfamily_name,
          email: this.state.Newemail,
          password: this.state.Newpassword
        })
        });
      }
    catch (error) {
        console.error(error);
      }
}
  


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.TitleText}> Edit my acount: </Text>
        <TextInput style={styles.ListText}
          underlineColorAndroid="transparent"
          placeholder="Enter your new given name here"
          autoCapitalize="none"
          onChangeText={text => this.setState({ Newgiven_name: text })}
        />

        <TextInput style={styles.ListText}
          underlineColorAndroid="transparent"
          placeholder="Enter your new family name here"
          autoCapitalize="none"
          onChangeText={text => this.setState({ Newfamily_name: text })}
        />

        <TextInput style={styles.ListText}
          underlineColorAndroid="transparent"
          placeholder="Enter your new email here"
          autoCapitalize="none"
          onChangeText={text => this.setState({ Newemail: text })}
        />

        <TextInput style={styles.ListText}
          underlineColorAndroid="transparent"
          placeholder="Enter your new password here"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={text => this.setState({ Newpassword: text })}
        />

        <TouchableOpacity
          style={styles.Button}
          onPress=
          {
            () => this.editAccount()
          }>
          <Text style={styles.ButtonText}> Edit </Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress=
          {
            () => this.logout()
          }>
          <Text style={styles.ButtonText}> Logout </Text>
        </TouchableOpacity>

      </View>
    );
  }
}



export default UserPage

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