import React from "react";
import {
    Button,
    Text,
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
    Alert
} from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'
    export default function LoginButton(props) {
    return (
        <View>
            <TouchableOpacity activeOpacity={0.5} onPress={props.onPress}>
                <View style={styles(props).buttonPhoneStyle}>
                    <Icon name={props.icon} size={30} style={styles(props).iconStyle}/>
                    <Text style={styles(props).buttonText}>
                        {props.title}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = (props) => StyleSheet.create({
    buttonPhoneStyle: {
        width: '100%',
        backgroundColor: props.color,
        alignContent: "stretch",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 10,
        marginTop: 5
    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        color: 'white',
        fontSize: 25,
        fontWeight: "bold",
        alignSelf: "center"
    },
    iconStyle: {
        width: 30,
        height: 30,
        color: "white",
        marginLeft: 20,
    }
});