import React, {Component} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import {Container} from 'native-base';

import bgSrc from '../../images/wallpaper.png';

export default class Wallpaper extends Component {
  render() {
    return (
      <Container>
        <ImageBackground style={styles.picture} source={bgSrc}>
          {this.props.children}
        </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    resizeMode: 'cover',
  },
});
