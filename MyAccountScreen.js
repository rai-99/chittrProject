import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class MyAccount extends Component {
   static navigationOptions = {
      header: false
   }
   constructor(props) {
      super(props);
      this.state = {
         //HARD CODED FOR TESTING. CHANGE BACK LATER
         given_name: 'Sulav1',
         family_name: 'Rai1',
         email: 'sulav2009@live.com1',
         password: 'password1',
         TOKEN: ''
      };
   }

 getToken = async () => {
      try {
         await AsyncStorage.getItem('@logInResponse'.token);
         this.setState({
            TOKEN : ('@logInResponse'.token)
         })
         console.log("token is:" + '@logInResponse'.token);
      } catch (error) {
         alert(error)
      }
   }

   getID = async () => {
      try {
         const userID = await AsyncStorage.getItem('@logInResponse'.id);
         console.log("id is:" + userID);
      } catch (error) {
         alert(error)
      }
   }


   async editAccount() {
      try {
         fetch("http://10.0.2.2:3333/api/v0.0.5/user" + this.getID(), {
            method: 'PATCH',
            headers: {
               'Accept': 'application/json',
               'X-Authorization': this.getToken(),
            },
            body: JSON.stringify({
               given_name: this.state.given_name,
               family_name: this.state.family_name,
               email: this.state.email,
               password: this.state.password,
            })
         });
      }
      catch (error) {
         console.error(error);
      }
   }


   async logout() {
      try {
         fetch("http://10.0.2.2:3333/api/v0.0.5/logout", {
            method: 'POST',
            headers: {
               'Accept': 'application/json',
               'X-Authorization' : this.getToken()
            },
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
               onChangeText={text => this.setState({ given_name: text })}
            />

            <TextInput style={styles.ListText}
               underlineColorAndroid="transparent"
               placeholder="Enter your new family name here"
               autoCapitalize="none"
               onChangeText={text => this.setState({ family_name: text })}
            />

            <TextInput style={styles.ListText}
               underlineColorAndroid="transparent"
               placeholder="Enter your new email here"
               autoCapitalize="none"
               onChangeText={text => this.setState({ email: text })}
            />

            <TextInput style={styles.ListText}
               underlineColorAndroid="transparent"
               placeholder="Enter your new password here"
               autoCapitalize="none"
               secureTextEntry={true}
               onChangeText={text => this.setState({ password: text })}
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
                  () => this.logout(this.state.TOKEN)
               }>
               <Text style={styles.ButtonText}> Logout </Text>
            </TouchableOpacity>

         </View>

      );
   }
}

export default MyAccount
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#B0E0E6'
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
      fontSize: 18,
      textAlign: "center",
      backgroundColor: "#FFFFFF",
      alignItems: 'center',
      margin: 10,
      borderRadius: 15,
      borderColor: 'black',
      borderWidth: 2,
   },

   Button: {
      backgroundColor: '#008080',
      padding: 5,
      borderRadius: 15,
      alignItems: 'center',
      margin: 15,
      height: 50,
   },
});
