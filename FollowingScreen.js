import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';

class MyFollowerScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchUserDetail: ' ',
            isLoading: true,
            userDetails: [],
        }
    }

    searchUser() {
        return fetch('http://10.0.2.2:3333/api/v0.0.5/search_user/?q=@') //gets all users
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    userDetails: responseJson,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentDidMount() {
        this.searchUser();
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
                <Text style={styles.TitleText}>Current users: </Text>
                <FlatList
                    refreshing={this.state.refresh}
                    data={this.state.userDetails}
                    keyExtractor={({ user_id }) => user_id}
                    renderItem={({ item }) =>
                        <View style={styles.list}>
                            <Text style={styles.ListText}>{'Name :  ' + item.given_name + " " + item.family_name + " Email :" + item.email}</Text>
                            <TouchableOpacity onPress={() => this.deleteItem(item.id)}>
                                <Text style={styles.ButtonText}>MORE INFO</Text>
                            </TouchableOpacity>
                        </View>} />
            </View>
        );
    }
}



export default MyFollowerScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B0E0E6',
        paddingTop: 30
    },

    ButtonText: {
        color: 'black',
        fontSize: 20,
        textAlign: "center",
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
        color: 'white',
        fontSize: 18,
        textAlign: "center",
        margin: 2,
        padding: 2,
    },

    Button: {
        backgroundColor: '#008080',
        padding: 5,
        alignItems: 'center',
        margin: 15,
        borderRadius: 15,
        height: 50,
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