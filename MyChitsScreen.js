import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

class MyChits extends Component {
   static navigationOptions = {
      headerShown: false
   }
   constructor(props) {
      super(props);
      this.state = {
        chit: 'debug chit',
      };
    }

    postChit() {
      return fetch("http://10.0.2.2:3333/api/v0.0.5/chits",
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
            isLoggedIn: true,
          });
          Alert.alert("Succesfully logged in !");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  

      render() {
         return (
            <View style={styles.container}>
               <Text style={styles.TitleText}>Post a new chit: </Text>

               <TextInput style={styles.chitText}
                  underlineColorAndroid="transparent"
                  autoCapitalize="none"
                  onChangeText={text => this.setState({ chit: text })}
               />
               <TouchableOpacity
                  style={styles.Button}
                  onPress=
                  {
                     () => this.postChit()
                  }>
                  <Text style={styles.ButtonText}> Post chit</Text>
               </TouchableOpacity>
            </View>
         );
      }
    }


export default MyChits
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
      fontSize: 24,
      textAlign: "center",
      fontWeight: 'bold',
      margin: 5
   },
   chitText: {
      color: 'black',
      fontSize: 18,
      height: 100,
      margin: 10,
      borderRadius: 15,
      backgroundColor: "#FFFFFF",
      borderColor: 'black',
      borderWidth: 2,
   },

   ListText: {
      color: 'white',
      fontSize: 16,
   },

   Button: {
      backgroundColor: '#008080',
      padding: 10,
      borderRadius: 15,
      alignItems: 'center',
      margin: 15,
      height: 60,
   },

   list: {
      margin: 5,
      backgroundColor: '#008080',
      flex: 1,
      borderRadius: 15,
      justifyContent: 'space-around',
      padding: 5,
      elevation: 1
   },
});
