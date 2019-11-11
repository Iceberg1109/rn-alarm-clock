import React, {Component} from 'react';
import {StyleSheet, Text, Platform} from 'react-native';
import {Container, Content, View, Footer, Button} from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
import ReactNativeAN from 'react-native-alarm-notification';

import Clock from '../components/alarm/Clock';
import {ScrollView} from 'react-native-gesture-handler';

export default class Wallpaper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTimePicker: false,
      alarmList: [],
    };
  }

  addAlarm = (event, date) => {
    date = date || this.state.date;
    console.log(date);
    console.log(event);
    if (event.type === 'dismissed') return;

    this.setState({
      showTimePicker: Platform.OS === 'ios' ? true : false,
      date: date,
    });
    this.setState(prevState => {
      return {
        alarmList: [
          ...prevState.alarmList,
          {
            id: '1',
            hour: new Date(date).getHours(),
            minute: new Date(date).getMinutes(),
          },
        ],
      };
    });

    var alarmNotifData = {
      id: '12345', // Required
      title: 'Lernora Alarm', // Required
      message: 'Alarm is ringing now.', // Required
      channel: 'lernora_alarm', // Required. Same id as specified in MainApplication's onCreate method
      ticker: 'My Notification Ticker',
      auto_cancel: true, // default: true
      vibrate: true,
      vibration: 100, // default: 100, no vibration if vibrate: false
      small_icon: 'ic_launcher', // Required
      large_icon: 'ic_launcher',
      play_sound: true,
      sound_name: null, // Plays custom notification ringtone if sound_name: null
      color: 'red',
      schedule_once: true, // Works with ReactNativeAN.scheduleAlarm so alarm fires once
      tag: 'some_tag',
      fire_date: ReactNativeAN.parseDate(new Date(Date.now() + 2000)), // Date for firing alarm, Required for ReactNativeAN.scheduleAlarm.

      // You can add any additional data that is important for the notification
      // It will be added to the PendingIntent along with the rest of the bundle.
      // e.g.
      data: {foo: 'bar'},
    };
    ReactNativeAN.scheduleAlarm(alarmNotifData);
  };

  render() {
    return (
      <Container style={{backgroundColor: '#456789'}}>
        <Content contentContainerStyle={styles.container}>
          <ScrollView>
            {this.state.alarmList.map(alarm => {
              return (
                <Clock id={alarm.id} hour={alarm.hour} minute={alarm.minute} />
              );
            })}
          </ScrollView>
          <View>
            {this.state.showTimePicker && (
              <DateTimePicker
                value={new Date('2020-01-01T00:00:00')}
                mode={'time'}
                is24Hour={true}
                display="default"
                onChange={this.addAlarm}
              />
            )}
          </View>
        </Content>
        <Footer style={{backgroundColor: 'transparent'}}>
          <Button
            style={styles.addBtn}
            light
            onPress={() => this.setState({showTimePicker: true})}>
            <Text style={{fontWeight: '100', fontSize: 40}}>+</Text>
          </Button>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  addbtnContainer: {
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: '#aaa',
    width: '100%',
    alignItems: 'center',
    zIndex: 10,
  },
  addBtn: {
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
