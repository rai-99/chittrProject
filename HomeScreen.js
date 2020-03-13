import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';


class HomeScreen extends Component {
   render() {
      return (
         <View style={styles.container}>
            <Image style ={{width: 350, height: 200}}
              source={require('../assests/chittr-logo.png')}
            />
            <TouchableOpacity style={styles.Button}
               onPress=
               {
                  () => this.props.navigation.navigate('Account')
               }>
               <Text style={styles.ButtonText}> Go to Profile </Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.Button}
               onPress=
               {
                  () => this.props.navigation.navigate('Explore')
               }>
               <Text style={styles.ButtonText}> View recent Chits </Text>
            </TouchableOpacity>

         </View>
      );
   }
}
export default HomeScreen
const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#FFFFFF'  
   },

   ButtonText: {
      color: 'white',
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: "center"
   },

   TitleText: {
      color: 'black',
      fontSize: 24,
      fontWeight: 'bold',
      margin: 15,
      textAlign: "center"

   },

   Button: {
      backgroundColor: '#233947',
      padding: 10,
      borderRadius: 15,
      alignItems: 'center',
      margin: 15,
      height: 60,
   },

});
