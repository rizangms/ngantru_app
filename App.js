import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/layouts/Header';
import Login from './components/page/Login';

export default function App() {
  return(
    <View>
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
  },
  text: { textAlign: 'center' },
});
