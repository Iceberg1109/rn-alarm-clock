import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'native-base';

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '95%',
    borderWidth: 2,
    borderColor: '#456789',
    maxHeight: 120,
    marginTop: 10,
    borderRadius: 5,
    padding: 10,
  },
  text: {},
});
