import React, { useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';

const FirstScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('MyTabs')
    }, 2000);
  }, []);
  return (
    <ImageBackground style={{ flex: 1, backgroundColor: 'red' }} source={require('../assets/Onboarding.png')}></ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AEAFF7'
  },
  text: {
    fontSize: 24,
  },
});

export default FirstScreen;