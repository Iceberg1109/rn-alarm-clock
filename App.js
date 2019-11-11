/**
 * React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AuthNavigator from './src/router/AuthNavigator';
import BottomNav from './src/router/BottomNav';

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthNavigator,
      App: BottomNav,
    },
    {
      initialRouteName: 'Auth',
    },
  ),
);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
