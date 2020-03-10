import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import MyChits from './MyChitsScreen';
import MyAccount from './MyAccountScreen';
import MyFollower from './MyFollowerScreen';
import MyFollowing from './FollowingScreen';

const LoggedInTab = createBottomTabNavigator(
   {
      My_Account: {
         screen: MyAccount,
         navigationOptions: {
            title: "My Account",
            header: false,
         }
      },
      My_Chits: {
         screen: MyChits,
         navigationOptions: {
            title: "My Chits",
            header: false,
         }
      },

      My_Followers: {
         screen: MyFollower,
         navigationOptions: {
            title: "My Followers",
            header: false,
         }
      },

      My_Following: {
         screen: MyFollowing,
         navigationOptions: {
            title: "Following",
            header: false,
         }
      },

   },
   {
      navigationOptions: () => {
        return {
          header: false
        };
      }
    }
);

const LoggedInStackNav = createStackNavigator({
   LoggedInTab: LoggedInTab,
},
{  
   navigationOptions: () => {
     return {
       header: false
     };
   }
 }
 );


const AppContainer = createAppContainer(LoggedInStackNav);
export default LoggedInStackNav;


