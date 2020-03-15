import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, TextInput } from 'react-native';


class MyFollowerScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            userDetails2: [],
            userDetails: [],
            searchUser: ''
        }
    }

    gerUserDetail() {
        return fetch('http://10.0.2.2:3333/api/v0.0.5/search_user/q='+this.state.searchUser)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    userDetails2: responseJson,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }


    componentDidMount() {
        this.showAllUsers();
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
                <Text style={styles.TitleText}>SEATCHED USER</Text>                  
            </View>
        );
    }
}

export default MyFollowerScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    chitText: {
        color: 'black',
        fontSize: 18,
        borderRadius: 15,
        height: 70,
        backgroundColor: "#F5F5F5",
        borderColor: 'black',
        borderWidth: 2,
    },

    ButtonText: {
        color: 'white',
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
        backgroundColor: '#233947',
        padding: 5,
        alignItems: 'center',
        margin: 15,
        borderRadius: 15,
        height: 50,
    },

    list: {
        margin: 5,
        backgroundColor: '#233947',
        flex: 1,
        borderRadius: 15,
        justifyContent: 'space-around',
        padding: 10,
        elevation: 1
    },
});