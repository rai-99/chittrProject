import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert, AsyncStorage, FlatList } from 'react-native';

class MyChits extends Component {
   static navigationOptions = {
      header: false
   }
   constructor(props) {
      super(props);
      this.state = {
         timeStamp: 1583755144,//current time stamp
         chitContent: '',
         TOKEN: '',
         ID: '',
         photoURI: 'https://ibb.co/2sfqZmL',
         isLoading: true,
         recentChits: []
      };
   }

   getToken = async () => {
      try {
         let res = await AsyncStorage.getItem('@logInResponse:token');
         let res2 = await AsyncStorage.getItem('@logInResponse:id');
         console.log("Token is  :", res + "     id is :" + res2);
         this.setState({
            TOKEN: res,
            ID: res2
         });
      } catch (error) {
         console.log("GET TOKEN ERROR : " + error);
      }
   }


   getRecentChits() {
      return fetch('http://10.0.2.2:3333/api/v0.0.5/chits')
         .then((response) => response.json())
         .then((responseJson) => {
            this.setState({
               recentChits: responseJson,
            });
         })
         .catch((error) => {
            console.log(error);
         });
   }

   postChit() {
      return fetch("http://10.0.2.2:3333/api/v0.0.5/chits",
         {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               'X-Authorization': this.state.TOKEN,
            },
            body: JSON.stringify({
               timestamp: this.state.timeStamp,
               chit_content: this.state.chitContent
            })
         })
         .then((response) => response.json())
         .then((responseJson) => {
            this.setState({
               logInResponse: responseJson,
            });
            this.getRecentChits()
            Alert.alert("Chit posted!" );
         })
         .catch((error) => {
            console.error(error);
         });
   }


   getRecentChits() {
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

   postPhoto() {
      return fetch("http://10.0.2.2:3333/api/v0.0.5/chits/" + this.state.ID + "/photo",
         {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               'X-Authorization': this.state.TOKEN,
            },
            body: this.state.photoURI
         })
         .then((response) => {
            Alert.alert("Photo posted!");
         })
         .catch((error) => {
            console.error(error);
         });
   }


   componentDidMount() {
      this.getToken()
      this.getRecentChits()
   }


   render() {


      return (
         <View style={styles.container}>
            <Text style={styles.TitleText}>Start chitting</Text>

            <TextInput style={styles.chitText}
               underlineColorAndroid="transparent"
               autoCapitalize="none"
               onChangeText={text => this.setState({ chitContent: text })}
            />

            <TouchableOpacity
               style={styles.Button}
               onPress=
               {
                  () => this.postChit()
               }>
               <Text style={styles.ButtonText}> Post</Text>
            </TouchableOpacity>

            <TouchableOpacity
               style={styles.Button}
               onPress=
               {
                  () => this.postPhoto()
               }>
               <Text style={styles.ButtonText}> Post photo </Text>
            </TouchableOpacity>
            <Text style={styles.TitleText}>Recent chits:</Text>
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


export default MyChits
const styles = StyleSheet.create({
   container: {
      flex: 1,
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
   },

   ListText: {
      color: 'black',
      borderRadius: 15,
      fontSize: 18,
      textAlign: "center",
      backgroundColor: "#F5F5F5",
      alignItems: 'center',
      margin: 5,
      borderColor: 'black',
      borderWidth: 2,
   },

   chitText: {
      color: 'black',
      fontSize: 18,
      height: 150,
      margin: 10,
      borderRadius: 15,
      backgroundColor: "#F5F5F5",
      borderColor: 'black',
      borderWidth: 2,
   },

   Button: {
      backgroundColor: '#233947',
      borderRadius: 15,
      alignItems: 'center',
      margin: 5,
      height: 50,
   },
});