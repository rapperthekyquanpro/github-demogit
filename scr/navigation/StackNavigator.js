import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from '../Screen/MainScreen';
import FacebookScreen from '../Screen/FacebookScreen';
import FlatListDemoScreen from '../Screen/FlatListDemoScreen';
import DateMatchesScreen from '../Screen/DateMatchesScreen';
import MatchScreen from '../Screen/MatchScreen';
const Stack = createNativeStackNavigator();
const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="DateMatchesScreen">
            {/* <Stack.Screen name="MainScreen" component={MainScreen} options={{ title: 'Overview' }} /> */}
            {/* <Stack.Screen name="FlatListDemoScreen" component={FlatListDemoScreen} options={{ title: 'Matches' }} /> */}
            <Stack.Screen name="DateMatchesScreen" component={DateMatchesScreen} options={{ title: 'Matches Date' }} />
            <Stack.Screen name="MatchScreen" component={MatchScreen} options={{ title: 'Match' }} />
        </Stack.Navigator>
    );
};

export default StackNavigator;