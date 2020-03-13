import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, } from 'react-native';

class MyFollowerScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }
  
    render() {
      if (this.state.isLoading) {
        return (
          <View>
            <ActivityIndicator/>
          </View>)
      }
  
      return (
        <View style={styles.container}>
          <Text style={styles.TitleText}>My Followers</Text>
        </View>
      );
    }
  }
  
  
  
  export default MyFollowerScreen
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#FC9D9A'
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
      backgroundColor: '#FE4365',
      padding: 5,
      borderRadius: 15,
      alignItems: 'center',
      margin: 15,
      height: 50,
    },
  });