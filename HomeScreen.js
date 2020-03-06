import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, Button,TouchableOpacity, StyleSheet, TextInput, Alert,} from 'react-native';

class HomeScreen extends Component{
  static navigationOptions = {
   header: null
  }

 render(){
 return(
 <View style = {styles.container}>

 <TouchableOpacity style = {styles.Button}
  onPress=
  {
    () => this.props.navigation.navigate('Users')
  }>
  <Text style = {styles.ButtonText}> Users </Text>
 </TouchableOpacity>


 <TouchableOpacity style = {styles.Button}
  onPress=
  {
    () => this.props.navigation.navigate('Chits')
  }>
  <Text style = {styles.ButtonText}> Chits </Text>
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
  },

  ButtonText:{
     color: 'white',
     fontSize: 28,
     fontWeight: 'bold'
  },

  TitleText:{
     color: 'black',
     fontSize: 24,
     fontWeight: 'bold',
     margin: 15

  },

  ListText:{
     color: 'black',
     fontSize: 20

  },

  Button: {
     backgroundColor: '#008080',
     padding: 10,
     alignItems: 'center',
     margin: 15,
     height: 60,
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
