import React from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'
export default function MatchesButtonComponent({ info, type, isOpen, onPress }) {
    return (
        <View>
            <TouchableOpacity activeOpacity={0.7} onPress={onPress} disabled={!isOpen}>
                <View style={styles.buttonStyle}>
                    {isOpen ? <View /> : <Icon name="ban" size={50} style={styles.iconStyle} />}
                    <Text style={styles.typeText}>
                        {type}
                    </Text>
                    <Text style={styles.infoText}>
                        {info}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: 10,
        margin: 10,
    },
    infoText: {
        textAlign: 'center',
        color: 'blue',
        fontSize: 70,
        fontWeight: "bold",
    },
    typeText: {
        textAlign: 'center',
        color: 'blue',
        fontSize: 20,
        fontWeight: "bold",
    },
    iconStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        color: 'red',
        margin: 8
    }
});