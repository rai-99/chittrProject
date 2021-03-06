import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import AccountScreen from './screens/AccountScreen';
import LoginScreen from './screens/LoginScreen';
import ExploreScreen from './screens/ExploreScreen';
import LoggedInNav from './screens/LoggedInNav';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';

const MainTabNav = createBottomTabNavigator(
  {
    Home: { 
      screen: HomeScreen,
      navigationOptions: () => ({
        tabBarOptions:{
          activeBackgroundColor:'#233947',
          inactiveBackgroundColor: '#D0D0D0',
          activeTintColor: 'white',
          inactiveTintColor: '#2d2d2d'
        },
        tabBarIcon: ({tintColor}) => (
            <Icon
                name="ios-home"
                color={tintColor}
                size={26}
            />
        )
    })
  },
    Account: { screen: AccountScreen, 
      navigationOptions: () => ({
        tabBarOptions:{
          activeBackgroundColor:'#233947',
          inactiveBackgroundColor: '#D0D0D0',
          activeTintColor: 'white',
          inactiveTintColor: '#2d2d2d'
        },
        tabBarIcon: ({tintColor}) => (
            <Icon3
                name="users"
                color={tintColor}
                size={26}
            />
        )
    })
  },

    Explore: { screen: ExploreScreen ,
      navigationOptions: () => ({
        tabBarOptions:{
          activeBackgroundColor:'#233947',
          inactiveBackgroundColor: '#D0D0D0',
          activeTintColor: 'white',
          inactiveTintColor: '#2d2d2d'
        },
        tabBarIcon: ({tintColor}) => (
            <Icon2
                name="explore"
                color={tintColor}
                size={26}
            />
        )
    })
    }
  },
  {
    navigationOptions: () => {
      return {
        headerShown: false
      };
    }
  },
);


const MainStackNav = createStackNavigator({
  MainTabNav: MainTabNav,
  LoginPage: { screen: LoginScreen },
  LoggedIn: { screen: LoggedInNav,
    navigationOptions: () => {
      return {
       headerShown: false,
      };
    } }
},);

const AppContainer = createAppContainer(MainStackNav);
export default AppContainer;




