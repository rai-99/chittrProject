import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert, FlatList, ActivityIndicator } from 'react-native';

const SearchUrl = 'http://10.0.2.2:3333/api/v0.0.5/search_user';

class MyFollowerScreen extends Component {
    static navigationOptions = {
        headerShown: false
    }
    constructor(props) {
        super(props);
        this.state = {
            searchUserDetail: ' ',
            userDetails: [],
        }
    }

    searchUser() {
        return fetch(SearchUrl + '?q=' + this.state.searchUserDetail, //is this okay?
            {
                method: 'GET',
            })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    userDetails: responseJson,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        {
            return (
                <View style={styles.container}>
                    <Text style={styles.TitleText}>Search of a user to follow: </Text>
                    <TextInput style={styles.ListText}
                        underlineColorAndroid="transparent"
                        placeholder="Enter the user's name"
                        autoCapitalize="none"
                        onChangeText={text => this.setState({ searchUserDetail: text })}
                    />

                    <TouchableOpacity
                        style={styles.Button}
                        onPress=
                        {
                            () => this.searchUser()
                        }>
                        <Text style={styles.ButtonText}> Search </Text>
                    </TouchableOpacity>

                    <FlatList
                        data={this.state.recentChits}
                        keyExtractor={({ id }) => id}
                        renderItem={({ item }) => <View style={styles.list}>
                            <Text style={styles.ListText}>{item.user_id}</Text>
                            <Text style={styles.ListText}>{item.given_name}</Text>
                            <Text style={styles.ListText}>{item.family_name}</Text>
                            <Text style={styles.ListText}>{item.email}</Text></View>
                        } />

                </View>
            );
        }
    }
}



export default MyFollowerScreen
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
        margin: 5,
        textAlign: "center"
    },

    ListText: {
        color: 'black',
        fontSize: 18,
        textAlign: "center",
        margin: 10,
        borderRadius: 15,
        backgroundColor: "#FFFFFF",
        borderColor: 'black',
        borderWidth: 2,
    },

    Button: {
        backgroundColor: '#008080',
        padding: 5,
        alignItems: 'center',
        margin: 15,
        borderRadius: 15,
        height: 50,
    },
});