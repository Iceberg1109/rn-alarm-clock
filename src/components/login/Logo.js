import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import {View, Thumbnail} from 'native-base';

import logoImg from '../../images/logo1.png';

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.txtContainer}>
          <Text style={styles.text}>Ready</Text>
          <Text style={[styles.text, styles.textMargin1]}>For</Text>
          <Text style={[styles.text, styles.textMargin2]}>Life</Text>
        </View>
        <View style={styles.logoContainer}>
          <Thumbnail source={logoImg} style={styles.image} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  txtContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 120,
    height: 120,
  },
  text: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 10,
  },
  textMargin1: {
    marginLeft: 30,
  },
  textMargin2: {
    marginLeft: 90,
  },
});
