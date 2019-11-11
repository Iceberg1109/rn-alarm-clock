/**
 * React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from '../pages/LoginScreen';
import SignupScreen from '../pages/SignupScreen';

const AuthNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);

export default AuthNavigator;
