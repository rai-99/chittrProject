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
            header: null,
         }
      },
      My_Chits: {
         screen: MyChits,
         navigationOptions: {
            title: "My Chits",
            header: null,
         }
      },

      My_Followers: {
         screen: MyFollower,
         navigationOptions: {
            title: "My Followers",
            header: null,
         }
      },

      My_Following: {
         screen: MyFollowing,
         navigationOptions: {
            title: "Following",
            header: null,
         }
      },

   },
   {
      navigationOptions: () => {
         return {
            headerShown: false
         };
      }
   },
);
const LoggedInStackNav = createStackNavigator({
   LoggedInTab: LoggedInTab,
},
   {});


const AppContainer = createAppContainer(LoggedInStackNav);
export default LoggedInStackNav;


