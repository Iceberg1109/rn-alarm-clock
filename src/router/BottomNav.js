/**
 * React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Icon} from 'native-base';

import ProfileScreen from '../pages/ProfileScreen';
import AlarmScreen from '../pages/AlarmScreen';
import SettingScreen from '../pages/SettingScreen';
import TermScreen from '../pages/TermScreen';

const BottomNavigator = createBottomTabNavigator(
  {
    Profile: ProfileScreen,
    Alarm: AlarmScreen,
    Setting: SettingScreen,
    Term: TermScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        if (routeName === 'Profile') {
          if (focused) {
            return (
              <Icon
                type="AntDesign"
                active
                name="profile"
                style={{color: 'red'}}
              />
            );
          }

          return <Icon type="AntDesign" active name="profile" />;
        }
        if (routeName === 'Setting') {
          if (focused) {
            return (
              <Icon
                type="AntDesign"
                active
                name="setting"
                style={{color: 'red'}}
              />
            );
          }

          return <Icon type="AntDesign" active name="setting" />;
        }
        if (routeName === 'Alarm') {
          if (focused) {
            return (
              <Icon
                type="MaterialCommunityIcons"
                active
                name="alarm"
                style={{color: 'red'}}
              />
            );
          }

          return <Icon type="MaterialCommunityIcons" active name="alarm" />;
        }
        if (routeName === 'Term') {
          if (focused) {
            return (
              <Icon
                type="MaterialIcons"
                active
                name="library-books"
                style={{color: 'red'}}
              />
            );
          }
          return <Icon type="MaterialIcons" active name="library-books" />;
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#42f44b',
      inactiveTintColor: 'gray',
      showLabel: false,
    },
    initialRouteName: 'Alarm',
  },
);

export default BottomNavigator;

const styles = StyleSheet.create({
  img: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  focused: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});
