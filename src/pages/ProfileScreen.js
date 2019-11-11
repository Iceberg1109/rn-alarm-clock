import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {
  Container,
  Content,
  Thumbnail,
  Text,
  View,
  Button,
  Icon,
} from 'native-base';
import HorizontalProgressBar from 'react-native-horizontal-progress-bar';

import Feed from '../components/profile/Feed';

import defaultImg from '../images/default.png';

export default class Wallpaper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      level: 0.2,
      filePath: {},
      choosed: false,
      uri:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEXk5ueutLepsLPo6uursbXJzc/p6+zj5ea2u76orrKvtbi0ubzZ3N3O0dPAxcfg4uPMz9HU19i8wcPDx8qKXtGiAAAFTElEQVR4nO2d3XqzIAyAhUD916L3f6+f1m7tVvtNINFg8x5tZ32fQAIoMcsEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQTghAJD1jWtnXJPP/54IgNzZQulSmxvTH6oYXX4WS+ivhTbqBa1r26cvCdCu6i0YXbdZ0o4A1rzV+5IcE3YE+z58T45lqo7g1Aa/JY5tgoqQF3qb382x7lNzBLcxft+O17QUYfQI4IIeklKsPSN4i6LKj/7Zm8n99RbHJpEw9gEBXNBpKIYLJqKYRwjOikf//r+J8ZsVuacbqCMNleI9TqGLGqMzhnVdBOdd6F/RlrFijiCoVMk320CBIahUxTWI0KKEcJqKbMdpdJb5QvdHq6wCI5qhKlgGMS/RBHkubWDAE+QZxB4xhCyDiDkLZxgGEVdQldzSKbTIhmZkFkSEPcVvmBn2SMuZB9od7fQDsMiDdKJjFUSCQarM5WirZ3C2TT/htYnyPcPfgrFHWz0BI74gr6J/IZiGUxAZGQLqmvQLTrtE/Go4YxhVRIpEw+sww1IIcqr5NKmUUzLF3d4/qPkYIp2T/obPuemlojFUR4t9Q2Vojhb7BmgElWHzLPH8hucfpefPNFTVgs9h1AdU/Pin96vwWbWdf+X9Absn3OdO34aMdsDnP8WgKYisTqI6CkNGqZQo1XA6Ef6AU32SJzOcBukHPF07/xNSgmHKa5BOhtezv6mA/rYJpwXNAnbRZ1XuF3BzDcO3vpA3+ny2909gbqE4hhD3LIPhLLyBNhPZvbZ3B+3tPYa18A7auSlXQayKwTPNLKDcuOB0xPYKDPFTkWsevQPRZ1J8Hji9I1KQ34r7hZhrwNwOZ97QxNx0drwn4QI0wQk1DcEsfKCWKdxVvxPSNUIp/knmAXT+nT+Ko3+0H96rcNb3m1fx7MBTJdeBJ7uFcWsc0wvgAsC4pROW0l2inbAmIBv/7GZmuhQH6API2rr8T0e6yuZJ+80A9LZeG62T3tik31XwxtwZcizKuTHkMjB1WdZde4Kmic/A5ZI3rr1ae21d08PlVHYfAaxw9G9CYRbJ+8ZdbTcMRV1XM3VdF0M32vtoTdZ0+u29s0OttJ5bz64UwinjaFMVY9vkqc3KKSxN21Xl+0L4Q3Vuv1tYl0pqnX6ms4XetFz7gdZVAgUEoJntfOUe4ZwsHd9FzqQ3Vv6xe41l0XJcqcKl6TZvlv7ClAW3BsqQW4X7ypApB8dmTgK4IX5wvqIVj33HtD2qSG4BqznxdIefL27Y4sahi0MdIdvUsDva8agGGbCtITmCY31MHD2O0uIdh/0rJDQ1VX5Zdxz3rR2QDbv6qXl9vudzqQtGm1Jv9LDXOsfvvB7VcZ8PDKD0mQ1VHPYQ9O+Yj4hR1IUD8rBnn3ho2m8oQMxbCFiKlL2ioSW5heeJqegED52CzxCtcGD3Kv8Wms9EYLyUhwaFIhSMBClevWEmiK/Iaogu4H7sg6ppQhQG8RUqivuTGOAJOg6FfgW0q0M0PQMRMEgXaeNf3SYDZ8PIMI0+wHgr/MgN7wYwpiLjCCqM6ydUDZLQiB6nDdNC8SDyig3jPPpFXGcC9O8BUBDVmgBY59E7Md/35Loe/UVEECEJwYggJjELZ4J71SaQSBeC02n4Da29CayJNA28SAhd2CQyC1Xw6pSmGSINQVuMhAZp4DClan9MgmkDDNmezqwS8sgtlXK/EPBhoaSmYVC/F7IO1jQEdHOlabpKh3+jzLQSTUiq4X2I+Ip/zU8rlaqAvkS21ElR+gqu3zbjjL+hIAiCIAiCIAiCIAiCsCf/AKrfVhSbvA+DAAAAAElFTkSuQmCC',
    };
    // const ref = firebase.storage().ref('path/to/image.jpg');

    // ref.getDownloadURL().then(url => {
    //   console.log(url);
    // });
  }

  chooseImg = () => {
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Uri = ', this.state.uri);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        console.log(source.uri);
        this.setState({
          choosed: true,
          uri: source.uri,
        });
      }
    });
  };
  render() {
    return (
      <Container>
        <Content contentContainerStyle={styles.container}>
          <View style={styles.header} />
          <View style={styles.avatarConainer}>
            <TouchableOpacity onPress={this.chooseImg.bind(this)}>
              <Thumbnail style={styles.avatar} source={{uri: this.state.uri}} />
            </TouchableOpacity>
          </View>
          <Text style={styles.nameTxt}>Michael Smith</Text>
          <View style={styles.pgsContainer}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.levelTxt}>Level 0</Text>
              <Text style={styles.pointTxt}>25/100</Text>
            </View>
            <HorizontalProgressBar
              color={'#456789'}
              progress={this.state.level}
              style={styles.progressBar}
            />
          </View>
          <View style={styles.btnContainer}>
            <Button style={styles.btn} onPress={this.onLogin}>
              <Icon type="FontAwesome5" active name="pen" />
            </Button>
            <Button style={styles.btn} onPress={this.onLogin}>
              <Icon type="FontAwesome5" active name="share" />
            </Button>
          </View>
          <View style={styles.feedContainer}>
            <Text style={styles.feedTxt}>Feed</Text>
          </View>
          <ScrollView contentContainerStyle={{alignItems: 'center'}}>
            <Feed />
            <Feed />
            <Feed />
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#456789',
    width: '100%',
    height: 100,
    position: 'absolute',
    top: 0,
  },
  avatarConainer: {
    width: 150,
    height: 150,
    borderRadius: 70,
    marginTop: 15,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  nameTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  pgsContainer: {
    width: '80%',
    // marginTop: 0,
  },
  levelTxt: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
  pointTxt: {
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    marginLeft: 200,
  },
  progressBar: {
    width: '100%',
    height: 20,
    borderWidth: 1,
    borderColor: '#aaa',
    borderBottomWidth: 2,
    marginTop: 2,
    borderRadius: 5,
  },
  btnContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  btn: {
    margin: 5,
    width: 70,
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: '#456789',
  },
  feedContainer: {
    width: 100,
    borderBottomWidth: 1,
    alignItems: 'center',
    marginTop: 5,
  },
  feedTxt: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
