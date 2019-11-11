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
      confirm: '',
      bPwdHiden: true,
      bCfmHiden: true,
      bLoading: false,
    };

    this.showPass = this.showPass.bind(this);
    this.showConfirm = this.showConfirm.bind(this);
    this.onSignup = this.onSignup.bind(this);
  }

  showPass() {
    this.setState({bPwdHiden: !this.state.bPwdHiden});
  }

  showConfirm() {
    this.setState({bCfmHiden: !this.state.bCfmHiden});
  }

  validate() {
    if (this.state.email === '') {
      return 'Email is required!';
    }

    if (this.state.password === '') {
      return 'Password is required!';
    }

    if (this.state.password !== this.state.confirm) {
      return 'Password does not match!';
    }

    return 'valid';
  }

  async onSignup() {
    console.log('signup clicked');
    console.log(this.state.email);
    console.log(this.state.password);
    var validResult = this.validate();
    if (validResult !== 'valid') {
      Alert.alert(validResult);
      return;
    }
    this.setState({bLoading: true});
    try {
      await auth().createUserWithEmailAndPassword(
        this.state.email,
        this.state.password,
      );
      this.props.navigation.navigate('App');
      this.setState({bLoading: false});
    } catch (e) {
      console.log(e.code);

      if (e.code === 'auth/email-already-in-use') {
        Alert.alert('Error', 'The email is already in use!');
      }
      if (e.code === 'auth/invalid-email') {
        Alert.alert('Error', 'The email is invalid!');
      }
      if (e.code === 'auth/weak-password') {
        Alert.alert(
          'Error',
          'The password is week!Please try with more than 6 letters',
        );
      }
      this.setState({bLoading: false});
    }
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
                    placeholder="Your Email address"
                    onChangeText={text => this.setState({email: text})}
                  />
                </Item>
                <Item>
                  <Icon type="Feather" active name="lock" />
                  <Input
                    placeholder="Enter your password"
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
                <Item>
                  <Icon type="Feather" active name="lock" />
                  <Input
                    placeholder="Confirm your password"
                    secureTextEntry={this.state.bCfmHiden}
                    onChangeText={text => this.setState({confirm: text})}
                  />
                  <TouchableOpacity onPress={this.showConfirm}>
                    {!this.state.bCfmHiden && (
                      <Icon type="Octicons" active name="eye-closed" />
                    )}
                    {this.state.bCfmHiden && (
                      <Icon type="Octicons" active name="eye" />
                    )}
                  </TouchableOpacity>
                </Item>
              </Form>
              <Button success style={styles.submitBtn} onPress={this.onSignup}>
                {!this.state.bLoading && (
                  <Text style={styles.submitBtnTxt}>Let's Go!</Text>
                )}
                {this.state.bLoading && <Spinner color="white" />}
              </Button>
              <View style={styles.signupBtn}>
                <Text style={styles.signupTxt}>Already have an account?</Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Login')}>
                  <Text style={styles.signupBtnTxt}>Log in</Text>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    flex: 1,
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
    marginTop: 25,
    backgroundColor: '#F035E0',
    borderRadius: 35,
  },
  submitBtnTxt: {
    fontSize: 17,
  },
  signupBtn: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 25,
    borderRadius: 35,
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
