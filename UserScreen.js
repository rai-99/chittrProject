import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, Button,TouchableOpacity, StyleSheet, TextInput, Alert,ScrollView} from 'react-native';


class UserScreen extends Component{
  static navigationOptions = {
   header: null}
  constructor(props){
   super(props);
   this.state ={
  //HARD CODED FOR TESTING. CHANGE BACK LATER
   given_name: 'Sulav',
   family_name: 'Rai',
   email: 'sulav2009@live.com',
   password: 'password',
   logInemail: 'sulav2009@live.com',
   logInPassword: 'password',
   key: '129743404ecdbc9f452d8fb69b7f61af'
   };
  }


  createAccount(){
   return fetch("http://10.0.2.2:3333/api/v0.0.5/user",
   {
  method: 'POST',
  headers:{
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    given_name: this.state.given_name,
    family_name: this.state.family_name,
    email: this.state.email,
    password: this.state.password
  })
   })
   .then((response) => {
   Alert.alert("Item Added!");

   })
   .catch((error) => {
   console.error(error);
   });
  }
  login(){
   return fetch("http://10.0.2.2:3333/api/v0.0.5/login",
   {
  method: 'POST',
  headers:{
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
    this.setState({ key: responseJson});
    //Alert.alert("Succesfully logged in !");
   })
   .catch((error) => {
   console.error(error);
   });
 }

 logout(){
  return fetch("http://10.0.2.2:3333/api/v0.0.5/logout",
  {
 method: 'POST',
 headers: JSON.stringify({
   'Accept': 'application/json',
   token: this.state.key
 })
  })
  .then((response) => {
  Alert.alert("Succesfully logged out !");

  })
  .catch((error) => {
  console.error(error);
  });
}

 render(){
 return(
   <ScrollView>
 <View style = {styles.container}>
<Text style = {styles.TitleText}> New user? Create a new account  </Text>
 <TextInput style = {styles.ListText}
    underlineColorAndroid = "transparent"
    placeholder = "Enter your given name here"
    autoCapitalize = "none"
    onChangeText={text => this.setState({ given_name: text })}
    />

  <TextInput style = {styles.ListText}
    underlineColorAndroid = "transparent"
    placeholder = "Enter your family name here"
    autoCapitalize = "none"
    onChangeText={text => this.setState({ family_name: text }) }
    />

<TextInput style = {styles.ListText}
    underlineColorAndroid = "transparent"
    placeholder = "Enter your email here"
    autoCapitalize = "none"
    onChangeText={text => this.setState({ email: text })}
    />

<TextInput style = {styles.ListText}
    underlineColorAndroid = "transparent"
    placeholder = "Enter password here"
    autoCapitalize = "none"
    secureTextEntry
    onChangeText={text => this.setState({ password: text })}
    />

    <TouchableOpacity
       style = {styles.Button}
       onPress =
       {
         () => this.createAccount()
       }>
       <Text style = {styles.ButtonText}> Create account </Text>
    </TouchableOpacity>

    <Text style = {styles.TitleText}> Already got an account? Log in below: </Text>
        <TextInput style = {styles.ListText}
            underlineColorAndroid = "transparent"
            placeholder = "Enter your email here"
            autoCapitalize = "none"
            onChangeText={text => this.setState({ logInemail: text })}
            />
        <TextInput style = {styles.ListText}
            underlineColorAndroid = "transparent"
            placeholder = "Enter password here"
            autoCapitalize = "none"
            secureTextEntry
            onChangeText={text => this.setState({ logInPassword: text })}
            />
        <TouchableOpacity
           style = {styles.Button}
           onPress=
           {
             () => this.login()
           }>
           <Text style = {styles.ButtonText}> Log in </Text>
        </TouchableOpacity>
        <TouchableOpacity
           style = {styles.Button}
           onPress=
           {
             () => this.logout()
           }>
           <Text style = {styles.ButtonText}> Log out </Text>
        </TouchableOpacity>
  </View>
  </ScrollView>
 );
 }
}

export default UserScreen
const styles = StyleSheet.create({
  container: {
     flex: 1,
     justifyContent: 'center',
  },

  ButtonText:{
     color: 'white',
     fontSize: 20,
     fontWeight: 'bold'
  },

  TitleText:{
     color: 'black',
     fontSize: 20,
     fontWeight: 'bold',
     margin: 15

  },

  ListText:{
     color: 'black',
     fontSize: 16,
     margin: 2,
     backgroundColor: '#A9A9A9',
     alignItems: 'center',
  },

  Button: {
     backgroundColor: '#008080',
     padding: 5,
     alignItems: 'center',
     margin: 15,
     height: 40,
  },

  list: {
    margin: 5,
    backgroundColor: '#008080',
    height: 80,
    justifyContent: 'space-around',
    padding: 10,
    elevation: 1
    },
});
