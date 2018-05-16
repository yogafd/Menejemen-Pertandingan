import React from 'react';
import { Button, View, Text, StyleSheet, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';

import LihatScreen from './uts/Lihat';
import HomeScreen from './uts/Home';
import LogScreen from './uts/Log';
import MulaiScreen from './uts/Mulai';
import StatistikScreen from './uts/Statistik';
import JadwalScreen from './uts/Jadwal';
import Mulai2Screen from './uts/Mulai2';
import HasilScreen from './uts/Hasil';

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const RootStack = StackNavigator(
  {
    Log: {
      screen: LogScreen,
    },
    Home: {
      screen: HomeScreen,
    },
    Mulai: {
      screen: MulaiScreen,
    },
    Mulai2: {
      screen: Mulai2Screen,
    },
    Lihat: {
      screen: LihatScreen,
    },
    Jadwal: {
      screen: JadwalScreen,
    },
    Statistik: {
      screen: StatistikScreen,
    },
    Hasil: {
      screen: HasilScreen,
    },
  },
  {
    initialRouteName: 'Log',
  }
);
