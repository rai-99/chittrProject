import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import MyChits from './MyChitsScreen';
import MyAccount from './MyAccountScreen';
import MyFollowing from './FollowingScreen';
import UserPage from './UserPageScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/AntDesign';


const LoggedInTab = createBottomTabNavigator(
   {
      My_Account: {
         screen: MyAccount,
         navigationOptions: () => ({   
            title: "My account",
            tabBarOptions:{
              activeBackgroundColor:'#233947',
              inactiveBackgroundColor: '#D0D0D0',
              activeTintColor: 'white',
              inactiveTintColor: '#2d2d2d'
            },
            tabBarIcon: ({tintColor}) => (
                <Icon2
                    name="account-circle"
                    color={tintColor}
                    size={28}
                />
            )
        })
      },

      User_Page: { 
         screen: UserPage ,
         navigationOptions: () => ({   
            title:"Settings",
            tabBarOptions:{
              activeBackgroundColor:'#233947',
              inactiveBackgroundColor: '#D0D0D0',
              activeTintColor: 'white',
              inactiveTintColor: '#2d2d2d'
            },
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="ios-settings"
                    color={tintColor}
                    size={26}
                />
            )
        })
      },

      My_Chits: {
         screen: MyChits,
         navigationOptions: () => ({   
            title: "Start chiting",
            tabBarOptions:{
              activeBackgroundColor:'#233947',
              inactiveBackgroundColor: '#D0D0D0',
              activeTintColor: 'white',
              inactiveTintColor: '#2d2d2d'
            },
            tabBarIcon: ({tintColor}) => (
                <Icon3
                    name="form"
                    color={tintColor}
                    size={26}
                />
            )
        })
      },

      My_Following: {
         screen: MyFollowing,
         navigationOptions: () => ({   
            title: "Current users",
            tabBarOptions:{
              activeBackgroundColor:'#233947',
              inactiveBackgroundColor: '#D0D0D0',
              activeTintColor: 'white',
              inactiveTintColor: '#2d2d2d'
            },
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="ios-people"
                    color={tintColor}
                    size={26}
                />
            )
        })
      },

   },
   {
      navigationOptions: () => {
        return {
         headerShown: false,
        };
      }
    }
);

const LoggedInStackNav = createStackNavigator({
   LoggedInTab: LoggedInTab,
 }
 );


const AppContainer2 = createAppContainer(LoggedInStackNav);
export default AppContainer2;


