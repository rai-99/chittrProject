import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, AsyncStorage } from 'react-native';


class MyAccount extends Component {
   constructor(props) {
      super(props);
      this.state = {
      };
   }

   render() {
      return (
         <View style={styles.container}>
            <Text style={styles.TitleText}> My account: </Text>
         </View>

      );
   }
}

export default MyAccount
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