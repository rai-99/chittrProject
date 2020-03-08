import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, } from 'react-native';

class ChitsScreen extends Component {
  static navigationOptions = {
    headerShown: false
  }
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      recentChits: []
    }
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

  componentDidMount() {
    this.getData();
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
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => <View style={styles.list}>
            <Text style={styles.ListText}>{item.chit_content}</Text></View>} />
      </View>
    );
  }
}



export default ChitsScreen
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
    margin: 15
  },

  ListText: {
    color: 'white',
    fontSize: 16
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
    padding: 10,
    elevation: 1
  },
});
