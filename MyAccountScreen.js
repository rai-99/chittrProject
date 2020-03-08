import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Alert, AsyncStorage } from 'react-native';

class MyAccount extends Component {
   static navigationOptions = {
      header: null
   }
   constructor(props) {
      super(props);
      this.state = {
         //HARD CODED FOR TESTING. CHANGE BACK LATER
         given_name: 'Sulav',
         family_name: 'Rai',
         email: 'sulav2009@live.com',
         password: 'password',
      };
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
                  () => this.logout()
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
