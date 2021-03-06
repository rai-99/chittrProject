import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, TextInput, AsyncStorage } from 'react-native';


class AllUsersScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            userDetails: [],
            id: ''
        }
    }


    storeUserClicked (id) {
        try {
            AsyncStorage.setItem('@searchDetails', this.state.id);
            let searchInfo =  AsyncStorage.getItem('@searchDetails');
            console.log("Search info  is :"+ '@searchDetails');
        } catch (e) {
            console.log("Set function error : ", e); //error message catch
        }
    }


    showAllUsers() {
        return fetch('http://10.0.2.2:3333/api/v0.0.5/search_user/?q=@')
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
                <Text style={styles.TitleText}>Current users </Text>
                <FlatList
                    refreshing={this.state.refresh}
                    data={this.state.userDetails}
                    keyExtractor={({ user_id }) => user_id}
                    renderItem={({ item }) =>
                        <View style={styles.list}>
                            <Text style={styles.ListText}>{'Name :  ' + item.given_name + " " + item.family_name + " Email :" + item.email}</Text>
                            <TouchableOpacity onPress = {() => this.storeUserClicked(item.user_id)}>
                                <Text style={styles.ButtonText2}> MORE DETAIL</Text>
                            </TouchableOpacity>
                        </View>} />
            </View>
        );
    }
}

export default AllUsersScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    
    ButtonText2: {
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
        margin: 5,
        borderRadius: 15,
    },

    list: {
        margin: 5,
        backgroundColor: '#233947',
        borderRadius: 15,
        justifyContent: 'space-around',
        elevation: 1
    },
});