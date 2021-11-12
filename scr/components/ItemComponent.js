import React from "react";
import {
    Button,
    Text,
    Image,
    View,
    StyleSheet,
    Alert
} from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen";
import {ACTION} from '../Screen/FacebookScreen';

export default function ItemComponent({ item, dispatch}) {
    return (
        <View>
            <Text style={{backgroundColor: item.complete ? "green" : "red"}}>{item.name}</Text>
            <Button
                title="Select"
                onPress={() => dispatch({type: ACTION.SELECT_ITEM, payload: { id: item.id }})}
            />
            <Button
                title="Delete"
                onPress={() => dispatch({type: ACTION.DELETE_ITEM, payload: { id: item.id }})}
            />
        </View>
    );
}