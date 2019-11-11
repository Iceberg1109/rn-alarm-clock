import React, {Component} from 'react';
import {StyleSheet, Text, Switch} from 'react-native';
import {ListItem, Left, Body, Right} from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue: true,
      color: '#33cc00',
    };

    this.switchChanged = this.switchChanged.bind(this);
  }
  switchChanged = value => {
    this.setState({switchValue: value});
    console.log(this.state.switchValue);
    this.state.switchValue === false
      ? this.setState({color: '#33cc00'})
      : this.setState({color: '#ccc'});
  };
  render() {
    return (
      <ListItem itemDivider style={styles.container}>
        <Body style={styles.numberContainer}>
          <Text style={[styles.number, {color: this.state.color}]}>
            {this.props.hour > 12 ? this.props.hour - 12 : this.props.hour}
          </Text>
          <Text style={[styles.colon, {color: this.state.color}]}> : </Text>
          <Text style={[styles.number, {color: this.state.color}]}>
            {this.props.minute}
          </Text>
          <Text style={[styles.indicator, {color: this.state.color}]}>
            {this.props.hour > 12 ? 'PM' : 'AM'}
          </Text>
        </Body>
        <Right>
          <Switch
            value={this.state.switchValue}
            onValueChange={this.switchChanged}
            trackColor={{true: '#33cc00', false: 'grey'}}
            thumbColor={this.state.color}
          />
        </Right>
      </ListItem>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  numberContainer: {
    flexDirection: 'row',
  },
  number: {
    fontSize: 60,
  },
  colon: {
    fontSize: 50,
  },
  indicator: {
    fontSize: 20,
    marginTop: 40,
    marginLeft: 4,
  },
});
