import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, } from 'react-native';

class ExploreScreen extends Component {
  static navigationOptions = {
    header: false
  }
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      recentChits: []
    }
  }

  componentDidMount() {
    this.getData();
  }


  getData() {
    return fetch('http://10.0.2.2:3333/api/v0.0.5/chits')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          recentChits: responseJson,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

 
  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator />
        </View>)
    }

    return (
      <View style={styles.container}>
        <Text style={styles.TitleText}>Recent chits: </Text>
        <FlatList
          data={this.state.recentChits}
          keyExtractor={({ chit_id }) => chit_id}
          renderItem={({ item }) => <View style={styles.list}>
            <Text style={styles.ListText}>{item.chit_content}</Text>
            </View>} />
      </View>
    );
  }
}



export default ExploreScreen
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