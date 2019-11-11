import React, {Component} from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {
  Content,
  Text,
  Button,
  View,
  Form,
  Item,
  Input,
  Icon,
  Spinner,
} from 'native-base';

import auth from '@react-native-firebase/auth';

import Logo from '../components/login/Logo';
import Wallpaper from '../components/login/Wallpaper';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      bPwdHiden: true,
      bLoading: false,
    };

    this.showPass = this.showPass.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  validate() {
    if (this.state.email === '') {
      return 'Email is required!';
    }

    if (this.state.password === '') {
      return 'Password is required!';
    }

    return 'valid';
  }

  async onLogin() {
    console.log('login clicked');
    console.log(this.state.email);
    console.log(this.state.password);
    var validResult = this.validate();
    if (validResult !== 'valid') {
      Alert.alert(validResult);
      return;
    }
    this.setState({bLoading: true});
    try {
      await auth().signInWithEmailAndPassword(
        this.state.email,
        this.state.password,
      );
      this.props.navigation.navigate('App');
      this.setState({bLoading: false});
    } catch (e) {
      console.log(e.code);
      if (e.code === 'auth/user-not-found') {
        Alert.alert('Error', 'The user not found!');
      }
      if (e.code === 'auth/invalid-email') {
        Alert.alert('Error', 'The email is invalid!');
      }
      if (e.code === 'auth/wrong-password') {
        Alert.alert('Error', 'The password is wrong!');
      }
      this.setState({bLoading: false});
    }
  }

  showPass() {
    this.setState({bPwdHiden: !this.state.bPwdHiden});
  }

  render() {
    return (
      <Wallpaper>
        <Content padder enableOnAndroid extraScrollHeight={150}>
          <View style={{minHeight: DEVICE_HEIGHT - 80}}>
            <View style={styles.logoContainer}>
              <Logo />
            </View>
            <View style={styles.formContainer}>
              <Form style={styles.form}>
                <Item>
                  <Icon type="Feather" active name="user" />
                  <Input
                    placeholder="Email Address"
                    onChangeText={text => this.setState({email: text})}
                  />
                </Item>
                <Item>
                  <Icon type="Feather" active name="lock" />
                  <Input
                    placeholder="Password"
                    secureTextEntry={this.state.bPwdHiden}
                    onChangeText={text => this.setState({password: text})}
                  />
                  <TouchableOpacity onPress={this.showPass}>
                    {!this.state.bPwdHiden && (
                      <Icon type="Octicons" active name="eye-closed" />
                    )}
                    {this.state.bPwdHiden && (
                      <Icon type="Octicons" active name="eye" />
                    )}
                  </TouchableOpacity>
                </Item>
              </Form>
              <TouchableOpacity style={styles.margin}>
                <Text style={styles.forgotPwd}>Forgot Password?</Text>
              </TouchableOpacity>
              <Button success style={styles.submitBtn} onPress={this.onLogin}>
                {!this.state.bLoading && (
                  <Text style={styles.submitBtnTxt}>Let's Go!</Text>
                )}
                {this.state.bLoading && <Spinner color="white" />}
              </Button>
              <View style={styles.signupBtn}>
                <Text style={styles.signupTxt}>Don't you have an account?</Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Signup')}>
                  <Text style={styles.signupBtnTxt}>Sign up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Content>
      </Wallpaper>
    );
  }
}

const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  logoContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    flex: 3,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  form: {
    padding: 30,
    paddingBottom: 0,
  },
  forgotPwd: {
    color: '#ffffff',
    alignSelf: 'flex-end',
  },
  submitBtn: {
    width: '60%',
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 15,
    backgroundColor: '#F035E0',
    borderRadius: 35,
  },
  submitBtnTxt: {
    fontSize: 17,
  },
  margin: {
    marginTop: 15,
    marginRight: 30,
  },
  signupBtn: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 25,
    color: '#ffffff',
  },
  signupTxt: {
    color: '#ffffff',
  },
  signupBtnTxt: {
    color: '#ffffff',
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 17,
  },
});
