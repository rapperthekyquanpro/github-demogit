import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TagNavigator from './scr/navigation/TagNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './scr/Screen/MainScreen';
import FacebookScreen from './scr/Screen/FacebookScreen';
import FlatListDemoScreen from './scr/Screen/FlatListDemoScreen';
import DateMatchesScreen from './scr/Screen/DateMatchesScreen';
import MatchScreen from './scr/Screen/MatchScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <TagNavigator/>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
