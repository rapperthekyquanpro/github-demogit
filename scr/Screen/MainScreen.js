
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import TitleComponent from '../components/TitleComponent';
import LoginButton from '../components/LoginButton';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TitleComponent imageSource={require('../assets/title-image.png')}/>
      <View style={styles.buttonContainer}>
        <LoginButton 
        onPress={() => navigation.navigate('FlatListDemoScreen')} 
        title="Phone" icon="phone" color="green"/>
        <LoginButton 
        onPress={() => navigation.navigate('FacebookScreen')} 
        title="Facebook" icon="facebook" color="blue"/>
        <LoginButton 
        onPress={() => navigation.navigate('FacebookScreen')} 
        title="Google" icon="google" color="red"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: "100%"
  },
  buttonContainer:{
    width: "70%",
        // alignItems: "center"
  }
});

export default MainScreen;
