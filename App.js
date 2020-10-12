import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './components/layouts/Header';
import Login from './components/page/Login';

export default function App() {
  return(
    <View style={{ flex:1, backgroundColor: "#fff", justifyContent: "center" }}>
      <Header/>
    </View>
  );
}
