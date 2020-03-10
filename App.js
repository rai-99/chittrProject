import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';
import LoginScreen from './screens/LoginScreen';
import ChitsScreen from './screens/ChitsScreen';
import LoggedInScreen from './screens/LoggedInScreen';


const MainTabNav = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Account: { screen: UserScreen },
    Explore: { screen: ChitsScreen }
  },
  {
    navigationOptions: () => {
      return {
        header: false
      };
    }
  },
);


const MainStackNav = createStackNavigator({
  MainTabNav: MainTabNav,
  Login: { screen: LoginScreen },
  LoggedIn: { screen: LoggedInScreen },
},
{  
  navigationOptions: () => {
    return {
      header: false
    };
  }
},
);

const AppContainer = createAppContainer(MainStackNav);
export default AppContainer;



