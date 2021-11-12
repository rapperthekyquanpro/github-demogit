import React, { useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    Modal,
    Pressable
} from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome'
export default function MatchButtonComponent({ time, team1Logo, team2Logo, status, choose }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [chooseTeam,setChooseTeam] = useState(choose);
    
    return (
        <View>
            <Modal
                animationType="none"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.chooseTeamContainer}>
                            <Pressable style={chooseTeam == 1 ? styles.choose : {}} onPress={() => setChooseTeam(1)}>
                                <Image source={team1Logo} style={styles.image}></Image>
                            </Pressable>
                            <Pressable style={chooseTeam == 2 ? styles.choose : {}} onPress={() => setChooseTeam(2)}>
                                <Image source={team2Logo} style={styles.image}></Image>
                            </Pressable>
                        </View>
                        <Pressable
                            style={[styles.button]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>OK</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity activeOpacity={0.7} onPress={() => setModalVisible(true)}>
                <View style={styles.buttonStyle}>
                    <Text style={styles.infoText}>
                        {time}
                    </Text>
                    <Image source={team1Logo} style={[styles.image]}></Image>
                    <Text style={styles.infoText}>
                        VS
                    </Text>
                    <Image source={team2Logo} style={styles.image}></Image>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        borderRadius: 10,
        margin: 10,
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    infoText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
        fontWeight: "bold",
    },
    image: {
        width: 60,
        height: 60
    },
    choose: {
        borderColor: "black",
        borderWidth: 3,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 0,
    },
    modalView: {
        alignItems: "center",
        justifyContent: "center",
        width: '80%',
        height: '40%',
        backgroundColor: "white",
        borderRadius: 10,
        paddingVertical: 20
    },
    button: {
        borderRadius: 10,
        padding: 10,
        borderWidth: 1,
        marginTop: 30,
        width: 100,
        alignItems: "center"
    },
    chooseTeamContainer: {
        width: '60%',
        height: '50%',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
});