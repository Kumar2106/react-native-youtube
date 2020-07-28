import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import Navbar from './components/Navbar'
import Tabbar from './components/Tabbar'
import data from './components/search.json'
import Body from './components/Body'

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar/>
      <ScrollView>
      <Body
      video = {data.items[0]}
      />
      <Body
      video = {data.items[1]}
      />
      <Body
      video = {data.items[2]}
      />
      <Body
      video = {data.items[3]}
      />
      <Body
      video = {data.items[4]}
      />
      </ScrollView>
      <Tabbar/>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',

  },
});
