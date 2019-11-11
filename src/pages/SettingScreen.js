import React, {Component} from 'react';
import {
  Alert,
  Button,
  Dimensions,
  StyleSheet,
  Text,
  ImageBackground,
  SafeAreaView,
} from 'react-native';

export default class Wallpaper extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.titleText}>Setting Screen</Text>
      </SafeAreaView>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
