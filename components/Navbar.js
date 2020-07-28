/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default class Navbar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
        <Image
        style={styles.logo}
        source = { require('./youtube.png')}
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    marginTop: 35,
    height: 55,
    backgroundColor: '#fff',
    elevation: 3,

    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'

  },
  logo:{
    width: 120,
    height: 23,
  }
});
