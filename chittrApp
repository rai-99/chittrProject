import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { FlatList, ActivityIndicator, Text, View, Button,TouchableOpacity, StyleSheet, TextInput, Alert,} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';
import ChitsScreen from './screens/ChitsScreen';


const AppTabNav = createBottomTabNavigator({
 Home: {screen: HomeScreen},
 Users: {screen: UserScreen},
 Chits: {screen: ChitsScreen},
});

const AppContainer = createAppContainer(AppTabNav);
export default AppContainer;

const styles = StyleSheet.create({
  container: {
     flex: 1,
     justifyContent: 'center',
  },
});
